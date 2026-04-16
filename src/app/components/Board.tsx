"use client"

import { useState } from "react";
import { generateBoard } from "../utils/game";
import styles from './Board.module.css';
import { getRandomIntInclusive } from "../utils/helpers";

const BOARD_TILES = generateBoard();

export default function Board() {
  const [players, setPlayers] = useState([
    { id: 1, position: 1, color: 'red' },
    { id: 2, position: 1, color: 'blue' }
  ])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const currentPlayer = players[currentPlayerIndex];

  const [rolledNumber, setRolledNumber] = useState<number | null>(null)

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

  function rollDice() {
    const roll = getRandomIntInclusive(1, 6);
    setRolledNumber(roll)

    setPlayers((prev) => {
      return prev.map((player, index) => {
        if (index !== currentPlayerIndex) return player;

        let newPosition = player.position + roll;

        if (newPosition > 100) {
          return { ...player, position: 100 - (newPosition - 100) }
        }
        if (snakes[newPosition]) {
          newPosition = snakes[newPosition];
        }

        if (ladders[newPosition]) {
          newPosition = ladders[newPosition];
        }
        return { ...player, position: newPosition }
      })
    })
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
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
              {players.map((p) => {
                if (p.position === num) {
                  return <div
                    key={p.id}
                    className={`${styles.playerPiece} ${p.color === 'red' ? styles.playerRed : styles.playerBlue}`}
                  />
                }
              })
              }
              <p className={styles.tileText}>{num}</p>
            </div>
          )
        }
        )}
      </div>
    </>
  );
}