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
                left: `${(x + 0.5) * 10}%`,
                top: `${(y + 0.5) * 10}%`,
            }}
        >
            <div
                className={styles.tokenCircle}
                style={{ backgroundColor: color }}
            />
        </div>
    );
}