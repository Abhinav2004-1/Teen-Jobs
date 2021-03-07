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

const LoginHandler = (args, cb) => {
  const Username = args.Username;
  const Password = args.Password;
  if (Username.length > 5 && Password.length > 7) {
    const number_regex = /[0-9]/;
    if (number_regex.exec(Password) !== null) {
      RegistrationModel.findOne({ Username }).exec()
        .then(profile => {
          if (profile !== null) {
            bcrypt.compare(Password, profile.Password, (err, condition) => {
              if (condition === true) {
                const context = {
                  Username,
                  Password: profile.Password,
                  Phone: profile.Phone,
                };
                GetToken(context, token => {
                  const ResponseData = { UserInfo: {Username, Hash: profile.Password, Phone: profile.Phone}, token: token };
                  return cb(ResponseData);
                });
              }else{
                return cb({access_denied: true});
              }
            });
          }else{
            return cb({access_denied: true});
          }
        });
    }
  }else{
   return cb({access_denied: true});
  }
};

router.post("/", (req, res) => {
  LoginHandler(req.body, data => {
    return res.json(data);
  });
});

export default router;
