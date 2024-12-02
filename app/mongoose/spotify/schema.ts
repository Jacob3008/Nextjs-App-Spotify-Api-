import mongoose from "mongoose";
const { Schema } = mongoose;

var SongSchema = new Schema({
  _id: String,
  name: { type: String, required: true },
  artist: { type: String, required: true},
  popularity: {type: Number,required: true},
  image: {type: String, required: true}
});

export default SongSchema;
