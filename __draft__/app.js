const { ApolloServer, gql } = require('apollo-server');

const Dogs = [{id:1,name:'dog1'},{id:2,name:'dog2'}];
const Images = [{id:3,dogId:1,url:'baidu.com'},{id:4,dogId:2,url:'google.com'}];

const typeDefs = gql`
    schema {
        query: Query
        mutation: Mutation
    }
    
    input SearchInput {
        name:String!
    } 
    
    enum DogType {
        NEWHOPE
        EMPIRE
        JEDI
    }

    type Query {
        dogs: [Dog]
        dog(data: SearchInput!): Dog
    }
    
    type Dog {
        id: Int!
        name:String!
        type: DogType
        displayImage:Image
    }

    type Image {
        id: Int!
        dogId:Int!
        url: String!
    }

    type Response {
        newDog: Dog
    }
    
    type Mutation {
        addDog(name:String!):Response
    }
`;

const resolvers = {
    Query: {
        dogs: () => Dogs,
        dog: (root , {data}) => Dogs.find(dog => dog.name === data.name)
    },

    Dog: {
        displayImage: ({id}) => {
            console.log('search image for dog '+ id);
            return Images.find(image => image.dogId === id)}
    },

    Mutation: {
        addDog: (root, {name},context,info) => {
            let id = Dogs.length + 1;
            let newDog = {id,name};
            Dogs.push(newDog);
            return {newDog};
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen()
    .then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    })
    .catch(e => console.log(`Error: ${e}`));
