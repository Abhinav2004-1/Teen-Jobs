import { createRequire } from "module";
const require = createRequire(import.meta.url);
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = require("graphql");
import PropertyModel from "../Models/properties.js";
import RegistrationModel from "../Models/register.js";

const LinearSearch = (response, blocked) => {
  let data = [...response];
  let splice_count = 0;
  for (let blocked_id of blocked) {
    for (let property in response) {
      if (response[property]._id === blocked_id) {
        data.splice(property - splice_count, 1);
        splice_count++;
      }
    }
  }
  return data;
};

// GrpahQL Schema Types

const UserType = new GraphQLObjectType({
  name: "USERTYPE",
  description: "This is the user type",
  fields: () => {
    return {
      _id: { type: GraphQLString },
      Username: { type: GraphQLString },
      Password: { type: GraphQLString },
      Phone: { type: GraphQLString },
      token: { type: GraphQLString },
      Collateral: {type: GraphQLInt},
      Achievements: {type: GraphQLString},
      Deals: {type: GraphQLInt},
      Ratings: {type: GraphQLInt}
    };
  },
});

const PropertyType = new GraphQLObjectType({
  name: "PropertyType",
  description: "This is the property type",
  fields: () => {
    return {
      _id: { type: GraphQLString },
      Location: { type: GraphQLString },
      Title: { type: GraphQLString },
      Description: { type: GraphQLString },
      Price: { type: GraphQLInt },
      Picture: { type: GraphQLString },
      Dimensions: { type: GraphQLString },
      sellerID: { type: GraphQLString },
      SellerInfo: {
        type: UserType,
        resolve: (parent, _) => RegistrationModel.findById(parent.sellerID),
      },
    };
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  description: "This is the rootQuery",
  fields: {
    Properties: {
      type: new GraphQLList(PropertyType),
      args: { request_count: { type: GraphQLInt } },
      resolve: async (_, args) => {
        console.log(args);
        let response = await PropertyModel.find({}).skip(parseInt(args.request_count) * 10).limit(10);
        if(response.length > 0){
          let blocked = response.BlockedProperties;
          if (blocked.length >= 1) {
            return LinearSearch(response, blocked);
          }
        }
        return response;
      },
    },

    Property: {
      type: PropertyType,
      args: { id: { type: GraphQLID } },
      resolve: async(_, args) => {
        const response = await PropertyModel.findById(args.id);
        return response;
      },
    },
  },
});

const MainSchema = new GraphQLSchema({
  query: RootQuery,
});

export default MainSchema;
