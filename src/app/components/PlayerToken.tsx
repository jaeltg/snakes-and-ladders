import styles from './PlayerToken.module.css'

type Props = {
    color: string;
};

export default function PlayerToken({ color }: Props) {
    return (
        <div
            className={styles.playerPiece}
            style={{ backgroundColor: color }}
        />
    );
}