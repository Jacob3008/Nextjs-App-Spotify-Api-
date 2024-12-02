"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";


const Score = (params: any) => {
    const cookies = useCookies();
    const router = useRouter();

    var isOpen = params.open;
    const score = params.score;
    const genre = params.genre;

    console.log(genre);

    const highscore = Number(getHighscore());


    function getHighscore() {
        try {
            return cookies.get(genre);
        } catch {
            return 0;
        }
    }

    if (isOpen) {
        if (score > highscore || Number.isNaN(highscore)) {
            cookies.set(genre, score);
        }
    }

    return (
        <>
        <Modal isOpen={isOpen} hideCloseButton={true}>
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">Better Luck Next Time</ModalHeader>
                <ModalBody>
                    <p> Your final score was {score}</p>
                    <strong>Highscore: {highscore}</strong>
                    <p> Play again or return home to choose a different game</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={() => window.location.reload()}>
                        Play Again
                    </Button>
                    <Button color="danger" variant="light" onPress={() => router.push("/")}>
                        Home
                    </Button>
                    <Button color="primary" onPress={() => console.log("login")}>
                        Login
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    );
}
export default Score;