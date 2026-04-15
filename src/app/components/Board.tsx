"use client"

import { useState } from "react";
import { generateBoard } from "../utils/game";
import styles from './Board.module.css';
import { getRandomIntInclusive } from "../utils/helpers";

const BOARD_TILES = generateBoard();

export default function Board() {
const [playerPosition, setPlayerPosition] = useState(1)
const [rolledNumber, setRolledNumber] = useState< number | null >(null)

const snakes: Record<number, number> = {
40: 3,
  43: 18,
  27: 5,
  54: 31,
  66: 45,
  99: 41,
  89: 53,
};

const ladders: Record<number, number> = {
  4: 25,
  13: 46,
  50: 69,
  42: 63,
  62: 81,
  74: 92,
};

function rollDice(): void {
  const roll = getRandomIntInclusive(1, 6);
  setRolledNumber(roll)

  setPlayerPosition((prev) => {
    let newPosition = prev + roll;
    if (newPosition > 100) {
      return 100 - (newPosition - 100)
    }
    if (snakes[newPosition]) {
      newPosition = snakes[newPosition];
    }

    if (ladders[newPosition]) {
      newPosition = ladders[newPosition];
    }
    return newPosition;
  })
}

  return (
    <>
     <button onClick={() => rollDice()}>{`Dice: ${rolledNumber}`}</button>
    <div className={styles.board}>
     
      {BOARD_TILES.map((num) => {
        const isGreen = num % 2 === 0;

        return (
         <div 
         key={num} 
         className={`${styles.tile} ${isGreen ? styles.greenTile : styles.pinkTile}`}
         >
          {playerPosition === num && <div className={styles.playerPiece}/>}
          <p className={styles.tileText}>{num}</p>
        </div>
        )
}
)}
    </div>
    </>
  );
}