import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import resolvers from "./schema/resolvers";
import typeDefs from "./schema/typeDefs";
import HipHop from "./schema/hip-hop";
import HipHopModel from "../../mongoose/spotify/models/hip-hop"; 

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

// @ts-ignore
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {
      hiphop: new HipHop({ modelOrCollection: HipHopModel }),
    },
  }),
});


export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}