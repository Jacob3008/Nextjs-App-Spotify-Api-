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
    },

    pop: async(
      _: any,
      __: any,
      context: { dataSources: { pop: { getAllSongs: () => any } } }
    ) => {
      try {
        return await context.dataSources.pop.getAllSongs();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },

    rock: async(
      _: any,
      __: any,
      context: { dataSources: { rock: { getAllSongs: () => any } } }
    ) => {
      try {
        return await context.dataSources.rock.getAllSongs();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    },
    country: async(
      _: any,
      __: any,
      context: { dataSources: { country: { getAllSongs: () => any } } }
    ) => {
      try {
        return await context.dataSources.country.getAllSongs();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    }
  } 
};
  
  export default resolvers;