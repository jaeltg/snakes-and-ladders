import { useState } from "react";
import { ladders, movePlayer, Player, snakes } from "../utils/game";
import { getRandomIntInclusive } from "../utils/helpers";

export function useGame() {
    const [players, setPlayers] = useState<Player[]>([
        { id: 1, position: 1, color: 'red' },
        { id: 2, position: 1, color: 'blue' }
    ])
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
    const [rolledNumber, setRolledNumber] = useState<number | null>(null)

    const currentPlayer = players[currentPlayerIndex];

    function rollDice() {
        const roll = getRandomIntInclusive(1, 6)
        setRolledNumber(roll);

        setPlayers((prev) =>
            prev.map((player, index) =>
                index === currentPlayerIndex
                    ? movePlayer(player, roll, snakes, ladders)
                    : player
            )
        );

        setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    }

    return {
        players,
        currentPlayer,
        rolledNumber,
        rollDice
    }
}