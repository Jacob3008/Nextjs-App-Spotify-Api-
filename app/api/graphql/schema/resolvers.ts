const resolvers = {
    Query: {
        hiphop: async(
        _: any,
      __: any,
      context: { dataSources: { hiphop: { getAllSongs: () => any } } }
    ) => {
      try {
        return await context.dataSources.hiphop.getAllSongs();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    }}
  };
  
  export default resolvers;