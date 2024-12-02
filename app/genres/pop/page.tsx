import Game from "@/app/components/Game";
import { PopModel } from "@/app/mongoose/spotify/models";
import { getAllSongs, getSize } from "@/app/mongoose/spotify/services";
import { NextUIProvider } from "@nextui-org/system";

const popSongs = await getAllSongs(PopModel);
const modelSize = await getSize(PopModel);

export default function Home() {

  return (
    <NextUIProvider className="flex items-center justify-center">
      <Game songs={JSON.parse(JSON.stringify(popSongs))} genre="pop" size={modelSize}/>
    </NextUIProvider>
  );
}