"use client"

import { useGame } from "../hooks/useGame";
import { generateBoard } from "../utils/game";
import styles from './Board.module.css';
import PlayerToken from "./PlayerToken";

const BOARD_TILES = generateBoard();

export default function Board() {
  const { players, rolledNumber, rollDice } = useGame();

  return (
    <>
      <button onClick={() => rollDice()}>
        {`Dice: ${rolledNumber}`}
      </button>

      <div className={styles.board}>
        {BOARD_TILES.map((num) => {
          const isGreen = num % 2 === 0;

          return (
            <div
              key={num}
              className={`${styles.tile} ${isGreen ? styles.greenTile : styles.pinkTile}`}
            >
              {players
                .filter(p => p.position === num)
                .map(p => (
                  <PlayerToken key={p.id} color={p.color} />
                ))
              }
              <p className={styles.tileText}>{num}</p>
            </div>
          )
        })}
      </div>
    </>
  );
}