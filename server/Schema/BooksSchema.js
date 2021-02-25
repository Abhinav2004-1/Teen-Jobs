import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = require('graphql');

const BookSchema = new GraphQLObjectType({
  name: 'Book Schema',
  description: 'This is the book Schema',
  fields: () => {
    return {
      title: {type: GraphQLString},
      id: {type: GraphQLID},
      genre: {type: GraphQLString},
      author: {
        type: AuthorSchema,
        resolve: (parent, _) => {

        }
      }
    }
  }
})

const AuthorSchema = new GraphQLObjectType({
  name: 'Author Schema',
  description: 'This is the Author Schema',
  fields: () => {
    return {
      name: {type: GraphQLString},
      age: {type: GraphQLInt}
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'Root Query',
  fields: {
    book: {
      type: BookSchema,
      args: {id: {type: GraphQLID}},
      resolve: (_, args) => {
        // DB checkings || DB retrienval
      }
    }

  }
});


