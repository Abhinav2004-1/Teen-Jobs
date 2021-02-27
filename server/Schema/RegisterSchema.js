import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { GraphQLObjectType, GraphQLString } = require('graphql');

const RegisterSchema = new GraphQLObjectType({
  name: 'Register',
  description: 'This is the register schema',
  fields: () => {
    return {
      Username: {type: GraphQLString},
      Password: {type: GraphQLString}
    }
  }
});

export default RegisterSchema;