import { CountryModel } from "../../../mongoose/spotify/models";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { SongInterface } from "../../../mongoose/spotify/interface";

export default class Country extends MongoDataSource<SongInterface> {
    // Function to fetch all songs
    async getAllSongs() {
      try {
        return await CountryModel.find();
      } catch (error) {
        throw new Error("Failed to fetch songs");
      }
    }
  }