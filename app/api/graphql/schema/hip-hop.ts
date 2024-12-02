import HipHopModel from "../../../mongoose/spotify/models/hip-hop";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { SongInterface } from "../../../mongoose/spotify/interface";

export default class HipHop extends MongoDataSource<SongInterface> {
    // Function to fetch all songs
    async getAllSongs() {
      try {
        return await HipHopModel.find();
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    }
  }