const typeDefs = `#graphql
  type Songs {
    _id: String!
    name: String!
    artist: String!
    popularity: Int!
    image: String!
  }

  type Query {
    hiphop: [Songs]
  }
`;

export default typeDefs;