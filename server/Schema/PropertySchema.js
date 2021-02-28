import { createRequire } from "module";
import RegisterSchema from "./RegisterSchema.js";
import RegistrationModel from '../Models/register.js';
const require = createRequire(import.meta.url);
const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const PropertySchema = new GraphQLObjectType({
    name: 'Property Schema',
    description: 'This is the poperty schema',
    fields: () => {
        return {
            location: {type: GraphQLString},
            title: {type: GraphQLString},
            description: {type: GraphQLString},
            price: {type: GraphQLInt},
            image: {type: GraphQLString},
            seller: {
                type: RegisterSchema,
                resolve: (parent, _) => {
                    return RegistrationModel.findById(parent.sellerID)
                }
            }
        }
    }
});

export default PropertySchema;