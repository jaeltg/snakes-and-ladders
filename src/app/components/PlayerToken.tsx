import { getCoordsFromPosition } from '../utils/game';
import styles from './PlayerToken.module.css'

type Props = {
    color: string;
    position: number;
};

export default function PlayerToken({ color, position }: Props) {
    const { x, y } = getCoordsFromPosition(position);
    return (
        <div
            className={styles.tokenMover}
            style={{
                transform: `translate(${x * 100}%, ${y * 100}%)`,
            }}
        >
            <div
                className={styles.tokenCircle}
                style={{ backgroundColor: color }}
            />
        </div>
    );
}