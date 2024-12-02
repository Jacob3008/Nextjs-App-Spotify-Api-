"use client"
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {useState, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/system";
import Score from "./Score";

const Game = (params: any) => {

    const songs = params.songs;
    const size = params.size;
    const genre = params.genre;

    const [indexOne, setIndexOne] = useState(0);
    const [indexTwo, setIndexTwo] = useState(0);
    const [score, setScore] = useState(0);
    const [previousWinner, setPreviousWinner] = useState(0);
    const [consecutiveWins, setConsecutiveWins] = useState(0);
    const [isBlurred, setIsBlurred] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    function getRandomNumbers(choice: number) {
        var newIndex = Math.floor(Math.random() * size);
        var winner;

        setIsBlurred(false);

        setTimeout(() => {


            if (songs[indexOne].popularity > songs[indexTwo].popularity) {
                winner = 1;
            }
            else if (songs[indexOne].popularity < songs[indexTwo].popularity) {
                winner = 2
            }
            else {
                winner = 3;
            }

            if (choice == winner) {
                if (winner == previousWinner) {
                    if (consecutiveWins == 1) {
                        if (choice == 1) {
                            choice = 2;
                        }
                        else {
                            choice = 1;
                        }
                        setConsecutiveWins(0);
                    }
                    else {
                        setConsecutiveWins(1);
                    }
                }
                if (choice == 1) {
                    while (newIndex == indexOne) {
                        newIndex = Math.floor(Math.random() * size);
                    }
                    setIndexTwo(newIndex);
                }
                else {
                    while (newIndex == indexTwo) {
                        newIndex = Math.floor(Math.random() * size);
                    }
                    setIndexOne(newIndex);
                }
                setScore(score + 1);
            }
            else if (winner == 3) {
                newIndex = Math.floor(Math.random() * size);
                setIndexOne(newIndex);
                newIndex = Math.floor(Math.random() * size);
                while (newIndex == indexOne) {
                    newIndex = Math.floor(Math.random() * size);
                }
                setIndexTwo(newIndex);
                setScore(score + 1);
            }
            else {
                setIsOpen(true);
            }
            setIsBlurred(true);
            setPreviousWinner(winner);
        }, 1500);
    }
    
useEffect(() => {
    var randomOne = Math.floor(Math.random() * size);
    var randomTwo = Math.floor(Math.random() * size);

    while (randomOne == randomTwo) {
        randomOne = Math.floor(Math.random() * size);
    }

    setIndexOne(randomOne);
    setIndexTwo(randomTwo);
}, []);


    return (
        <NextUIProvider className="flex flex-col p-8 items-center">
            <div className="flex">
                <Card shadow="sm" isPressable onPress={() => getRandomNumbers(1)} className="w-[400px]">
                    <CardBody className="overflow-visible p-0">
                        <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={songs[indexOne].name}
                        className="w-full object-cover"
                        src={songs[indexOne].image}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b>{songs[indexOne].name}</b>
                        <div className="flex">
                            <p>Popularity: &nbsp;</p>
                            <p className={`text-default-500 ${isBlurred ? 'blur-[3px]' : 'blur-none'}`}>{songs[indexOne].popularity}</p>
                        </div>
                        
                    </CardFooter>
                </Card>
                <Card shadow="sm" isPressable onPress={() => getRandomNumbers(2)} className="w-[400px]">
                    <CardBody className="overflow-visible p-0">
                        <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={songs[indexTwo].name}
                        className="w-full object-cover"
                        src={songs[indexTwo].image}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b>{songs[indexTwo].name}</b>
                        <div className="flex">
                            <p>Popularity: &nbsp;</p>
                            <p className={`text-default-500 ${isBlurred ? 'blur-[3px]' : 'blur-none'}`}>{songs[indexTwo].popularity}</p>
                        </div>
                        
                    </CardFooter>
                </Card>
            </div>
            <p className="p-9 text-lg">Score: {score}</p>

            <Score open={isOpen} score={score} genre={genre}/>
        </NextUIProvider>
    )
}

export default Game;