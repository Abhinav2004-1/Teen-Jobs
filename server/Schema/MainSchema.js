import { createRequire } from "module";
import RegisterSchema from "./RegisterSchema.js";
const require = createRequire(import.meta.url);
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = require("graphql");
import RegistrationModel from "../Models/register.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const GetToken = (data) => {
  jwt.sign(data, process.env.JWT_AUTH_TOKEN, (err, token) => {
    if (!err) {
      return token;
    }
  });
};

const HashPassword = (Password) => {
  bcrypt.hash(Password, 10, (err, hashed) => {
    if (!err) {
      return hashed;
    }
  });
};

const AddUserResolver = (args) => {
  const Username = args.Username;
  const Password = args.Password;
  const Confirm = args.Confirm;
  const Phone = args.Password;
  if (Username.length > 5 && Password === Confirm && Password.length > 7) {
    const number_regex = /[0-9]/;
    if (number_regex.exec(Password) !== null) {
      RegistrationModel.findOne({ Username }).exec().then((profile) => {
        if (profile !== null) {
          HashPassword(Password).then((hash) => {
            GetToken({ Username, Password: hash, Phone }).then((token) => {
              const Data = new RegistrationModel({
                Username,
                Password,
                Phone,
              });
              Data.save().then(() => {
                return { userInfo: { Username, Password: hash, Phone}, token };
              });
            });
          });
          } else {
            return {User_exists: true};
          }
        });
    }
  }else{
      return {invalid_cred: true};
  }
};

const Mutator = new GraphQLObjectType({
  name: "Root-Query",
  description: "This is the RootQuery",
  fields: {
    AddUser: {
      type: RegisterSchema,
      args: {
        Username: {
          type: GraphQLString,
        },
        Password: {
          type: GraphQLString,
        },
        Confirm: {
          type: GraphQLString,
        },
        Phone: {
          type: GraphQLInt,
        },
      },
      resolve: (_, args) => {
        AddUserResolver(args);
      },
    },
  },
});

const MainSchema = new GraphQLSchema({
  mutation: Mutator,
});

export default MainSchema;
