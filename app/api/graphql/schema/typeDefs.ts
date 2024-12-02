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
    rock: [Songs]
    pop: [Songs]
    country: [Songs]
  }
`;

export default typeDefs;