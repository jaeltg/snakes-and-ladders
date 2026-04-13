import { generateBoard } from "../utils/game";
import styles from './Board.module.css';

export default function Board() {
const boardTiles = generateBoard();

  return (
    <div className={styles.board}>
      {boardTiles.map((num) => {
        const isGreen = num % 2 === 0;

        return (
         <div key={num} className={`${styles.tile} ${isGreen ? styles.greenTile : styles.pinkTile}`}>
          <p className={styles.tileText}>{num}</p>
        </div>
        )
}
)}
    </div>
  );
}