import { createRequire } from "module";
const require = createRequire(import.meta.url);
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
} = require("graphql");
import PropertyModel from '../Models/properties.js';
import RegistrationModel from '../Models/register.js';


const FetchProperties = (request_count) => {
  PropertyTypeModel.find({}).skip(request_count * 10).limit(10)
}

// GrpahQL Schema Types

const UserType = new GraphQLObjectType({
  name: 'USERTYPE',
  description: 'This is the user type',
  fields: () => {
    return (
      {
        _id: {type: GraphQLString},
        Username: {type: GraphQLString},
        Password: {type: GraphQLString},
        Phone: {type: GraphQLString},
        token: {type: GraphQLString}
      }
    )
  }
});

const PropertyType = new GraphQLObjectType({
  name:'PropertyType',
  description: 'This is the property type',
  fields: () => {
    return (
      {
        _id: {type: GraphQLString},
        location: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLInt},
        image: {type: GraphQLString},
        dimensions: {type: GraphQLString},
        sellerID: {type: GraphQLString},
        SellerInfo: {
          type: UserType,
          resolve: (parent, _) => RegistrationModel.findById(parent.sellerID)
        }
      }
    )
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the rootQuery',
  fields: {
    Properties: {
      type: PropertyType,
      args: {request_count: {type: GraphQLID}},
      resolve: (_, args) => {
        return PropertyModel.find({}).skip(args.request_count * 10).limit(10);
      }
    },

    Property: {
      type: PropertyType,
      args: {id: GraphQLID},
      resolve: (_, args) => {
        return PropertyModel.findById(args.id)
      }
    }
  }
});

const MainSchema = new GraphQLSchema({
  query: RootQuery,
});

export default MainSchema;
