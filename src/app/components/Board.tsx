"use client"

import { useGame } from "../hooks/useGame";
import { generateBoard } from "../utils/game";
import styles from './Board.module.css';
import BoardDecorations from "./BoardDecorations";
import PlayerToken from "./PlayerToken";

const BOARD_TILES = generateBoard();

export default function Board() {
  const { players, rolledNumber, rollDice, currentPlayer } = useGame();

  return (
    <>
      <button onClick={() => rollDice()}>
        {`Dice: ${rolledNumber}`}
      </button>
      <p>Current turn: Player {currentPlayer.id}</p>

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
        <BoardDecorations />
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