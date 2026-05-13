import { getCoordsFromPosition, ladders, snakes } from '../utils/game';
import styles from './PlayerToken.module.css'

type Props = {
    color: string;
    position: number;
};

export default function BoardDecorations() {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
            }}
        >
            {Object.entries(ladders).map(([start, end]) => {
                const startCoords = getCoordsFromPosition(Number(start));
                const endCoords = getCoordsFromPosition(end);

                const x1 = (startCoords.x + 0.5) * 10;
                const y1 = (startCoords.y + 0.5) * 10;

                const x2 = (endCoords.x + 0.5) * 10;
                const y2 = (endCoords.y + 0.5) * 10;

                return (
                    <line
                        key={`${start}-${end}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="brown"
                        strokeWidth="1"
                        strokeLinecap="round"
                    />
                );
            })}

            {Object.entries(snakes).map(([start, end]) => {
                const startCoords = getCoordsFromPosition(Number(start));
                const endCoords = getCoordsFromPosition(end);

                const x1 = (startCoords.x + 0.5) * 10;
                const y1 = (startCoords.y + 0.5) * 10;

                const x2 = (endCoords.x + 0.5) * 10;
                const y2 = (endCoords.y + 0.5) * 10;

                return (
                    <line
                        key={`${start}-${end}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="green"
                        strokeWidth="1"
                        strokeLinecap="round"
                    />
                );
            })}
        </svg>
    );
}