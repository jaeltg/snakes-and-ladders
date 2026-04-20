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
        <div className={styles.grid}>
          {BOARD_TILES.map((num) => {
            const isGreen = num % 2 === 0;

            return (
              <div
                key={num}
                className={`${styles.tile} ${isGreen ? styles.greenTile : styles.pinkTile}`}
              >
                <p className={styles.tileText}>{num}</p>
              </div>
            )
          })}
        </div>

        <div className={styles.tokenLayer}>
          {players.map(p => (
            <PlayerToken
              key={p.id}
              color={p.color}
              position={p.position}
            />
          ))
          }
        </div>
      </div>
    </>
  );
}