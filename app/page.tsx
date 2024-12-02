import Menu from "./components/Menu";
import connectDB from "./middleware/dbConnect";
import { HipHopModel, CountryModel, PopModel, RockModel } from "./mongoose/spotify/models";
import getSongs from "./api/spotify/getSongs";
import { storeSong } from "./mongoose/spotify/services";
import Image from "next/image";
import Spotify from "@/public/spotify.png";


await connectDB();

const COUNTRY_ID = "37i9dQZF1DX1lVhptIYRda";
const HIPHOP_ID = "37i9dQZF1DXb8wplbC2YhV";
const POP_ID = "37i9dQZF1DX2L0iB23Enbq";
const ROCK_ID = "37i9dQZF1DWXRqgorJj26U";

// POPULATE MONGODB WITH API CALL

/*const countrySongs = await getSongs(COUNTRY_ID);
const hipHopSongs = await getSongs(HIPHOP_ID);
const popSongs = await getSongs(POP_ID);
const rockSongs = await getSongs(ROCK_ID);

countrySongs.forEach(song => {
  storeSong(song, CountryModel);
});

hipHopSongs.forEach(song => {
  storeSong(song, HipHopModel);
});

popSongs.forEach(song => {
  storeSong(song, PopModel);
});

rockSongs.forEach(song => {
  storeSong(song, RockModel);
});*/

export default function Home() {

  return (
    <div className="flex items-center justify-center flex-col">
        <div className="flex">
          <Image src={Spotify} alt="Spotify logo" width={400}/>
          <h1 className="p-3">Higher or Lower</h1>
        </div>

        <Menu/>
    </div>
  );
}
