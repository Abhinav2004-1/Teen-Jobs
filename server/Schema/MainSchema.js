import { createRequire } from "module";
import RegisterSchema from "./RegisterSchema.js";
const require = createRequire(import.meta.url);
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
} = require("graphql");
import RegistrationModel from "../Models/register.js";
import PropertyModel from '../Models/properties.js';
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

const FetchProperties = (request_count) => {
  PropertyModel.find({}).skip(request_count * 10).limit(10).then((response) => {
    return response;
  })
}

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    Properties: {
      type: PropertySchema,
      args: {request_count: {type: GraphQLInt}},
      resolve: (_, args) => {
        return FetchProperties(args.request_count);
      }
    },

    Property: {
      type: PropertySchema,
      args: {id: {type: GraphQLID}},
      resolve: (_, args) => {
        return PropertyModel.findById(args.id);
      }
    }
  }
})

const Mutator = new GraphQLObjectType({
  name: "MUTATOR",
  description: "This is the Mutator",
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
  query: RootQuery
});

export default MainSchema;
