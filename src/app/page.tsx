import Board from "./components/Board";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Snakes & Ladders</h1>
      <Board />
    </main>
  );
}
