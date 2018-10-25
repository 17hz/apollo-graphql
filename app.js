const { ApolloServer, gql } = require('apollo-server');
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book],
    getBook(title:String):Book  
  }

  type Mutation {
      addBook(title: String, author: String): Book
  }
`;

const resolvers = {
    Query: {
        books:() => books,
    },
    Mutation: {
      addBook: {

      }
    }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
