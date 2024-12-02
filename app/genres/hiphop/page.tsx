import Game from "@/app/components/Game";
import { HipHopModel } from "@/app/mongoose/spotify/models";
import { getAllSongs, getSize } from "@/app/mongoose/spotify/services";
import { NextUIProvider } from "@nextui-org/system";

const hiphopSongs = await getAllSongs(HipHopModel);
const modelSize = await getSize(HipHopModel);

export default function Home() {

  return (
    <NextUIProvider className="flex items-center justify-center">
      <Game songs={JSON.parse(JSON.stringify(hiphopSongs))} genre="hiphop" size={modelSize}/>
    </NextUIProvider>
  );
}