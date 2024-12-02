import Score from "@/app/components/Score";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {

  return (
    <NextUIProvider>
        <Score></Score>
    </NextUIProvider>
  );
}