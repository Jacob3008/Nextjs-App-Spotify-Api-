import Game from "@/app/components/Game";
import { getAllSongs, getSize } from "@/app/mongoose/spotify/services";
import { CountryModel } from "@/app/mongoose/spotify/models";
import { NextUIProvider } from "@nextui-org/system";

const countrySongs = await getAllSongs(CountryModel);
const modelSize = await getSize(CountryModel);

export default function Home() {

  return (
    <NextUIProvider className="flex items-center justify-center">
      <Game songs={JSON.parse(JSON.stringify(countrySongs))} genre="country" size={modelSize}/>
    </NextUIProvider>
  );
}