import { useState } from "react";
import { ladders, movePlayer, Player, snakes } from "../utils/game";
import { getRandomIntInclusive, sleep } from "../utils/helpers";

export function useGame() {
    const [players, setPlayers] = useState<Player[]>([
        { id: 1, position: 1, color: 'red' },
        { id: 2, position: 1, color: 'blue' }
    ])
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    const [rolledNumber, setRolledNumber] = useState<number | null>(null)

    const currentPlayer = players[currentPlayerIndex];

    async function rollDice() {
        const roll = getRandomIntInclusive(1, 6)
        setRolledNumber(roll);

        const player = players[currentPlayerIndex];

        const moveResult = movePlayer(
            player,
            roll,
            snakes,
            ladders
        );

        for (
            let pos = moveResult.startPosition + 1;
            pos <= moveResult.endPosition;
            pos++
        ) {
            await sleep(250);

            setPlayers(prev =>
                prev.map((p, index) =>
                    index === currentPlayerIndex
                        ? { ...p, position: pos }
                        : p
                )
            );
        }

        if (moveResult.finalPosition !== moveResult.endPosition) {
            await sleep(300);

            setPlayers(prev =>
                prev.map((p, index) =>
                    index === currentPlayerIndex
                        ? {
                            ...p,
                            position: moveResult.finalPosition
                        }
                        : p
                )
            );
        }

        setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    }

    return {
        players,
        currentPlayer,
        rolledNumber,
        rollDice
    }
}