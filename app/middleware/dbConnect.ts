import mongoose from "mongoose";
const uri = "mongodb+srv://jsneuman2:Newsuw76@spotify.4cimw.mongodb.net/?retryWrites=true&w=majority&appName=Spotify";

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("🎉 connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;