import Game from "@/app/components/Game";
import { RockModel } from "@/app/mongoose/spotify/models";
import { getAllSongs, getSize } from "@/app/mongoose/spotify/services";
import { NextUIProvider } from "@nextui-org/system";

const rockSongs = await getAllSongs(RockModel);
const modelSize = await getSize(RockModel);

export default function Home() {

  return (
    <NextUIProvider className="flex items-center justify-center">
      <Game songs={JSON.parse(JSON.stringify(rockSongs))} genre="rock" size={modelSize}/>
    </NextUIProvider>
  );
}