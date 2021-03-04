import express from "express";
import RegistrationModel from "../Models/register.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const GetToken = (data, cb) => {
  jwt.sign(
    data,
    process.env.JWT_AUTH_TOKEN,
    { expiresIn: 60 * 60 * 24 * 2.1 },
    (err, token) => {
      if (!err) {
        return cb(token);
      }
    }
  );
};

const HashPassword = (Password, cb) => {
  bcrypt.hash(Password, 10, (err, hashed) => {
    if (!err) {
      return cb(hashed);
    }
  });
};

const AddUserResolver = (args, cb) => {
  const Username = args.Username;
  const Password = args.Password;
  const Confirm = args.Confirm;
  const Phone = args.Password;
  if (
    Username.length > 5 &&
    Password === Confirm &&
    Password.length > 7 &&
    Phone.length > 9
  ) {
    const number_regex = /[0-9]/;
    if (number_regex.exec(Password) !== null) {
      RegistrationModel.findOne({ Username })
        .exec()
        .then((profile) => {
          if (profile === null) {
            HashPassword(Password, (hash) => {
              GetToken({ Username, Password: hash, Phone }, (token) => {
                const Data = new RegistrationModel({
                  Username,
                  Password: hash,
                  Phone,
                });
                Data.save().then(() => {
                  return cb({ UserInfo: {Username, Password: hash, Phone}, token });
                });
              });
            });
          }else{
            return cb({access_denied: true});
          }
        });
    }else{
      return cb({access_denied: true});
    }
  }else{
    return cb({access_denied: true});
  }
};

router.post("/", async (req, res) => {
  AddUserResolver(req.body, data => {
    return res.json(data);
  });
});

export default router;
