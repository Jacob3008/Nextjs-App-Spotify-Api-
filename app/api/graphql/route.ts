import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import resolvers from "./schema/resolvers";
import typeDefs from "./schema/typeDefs";
import HipHop from "./schema/hip-hop";
import {HipHopModel, CountryModel, PopModel, RockModel} from "../../mongoose/spotify/models"; 
import Pop from "./schema/pop";
import Rock from "./schema/rock";
import Country from "./schema/country";
import connectDB from "@/app/middleware/dbConnect";

await connectDB();

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
      pop: new Pop({modelOrCollection: PopModel}),
      rock: new Rock({modelOrCollection: RockModel}),
      country: new Country({modelOrCollection: CountryModel})
    },
  }),
});


export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
}