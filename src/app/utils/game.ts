export function generateBoard(): number[] {
  const size = 10;
  return Array.from({ length: size }, (_, row) => {
    const startVal = row * size + 1;
    const rowNumbers = Array.from({ length: size }, (_, i) => startVal + i);

    return row % 2 === 1 ? rowNumbers.reverse() : rowNumbers;
  }).reverse().flat()
};

export type Player = {
  id: number;
  position: number;
  color: string;
};


export const snakes: Record<number, number> = {
  40: 3,
  43: 18,
  27: 5,
  54: 31,
  66: 45,
  99: 41,
  89: 53,
};

export const ladders: Record<number, number> = {
  4: 25,
  13: 46,
  50: 69,
  42: 63,
  62: 81,
  74: 92,
};

export function movePlayer(
  player: Player,
  roll: number,
  snakes: Record<number, number>,
  ladders: Record<number, number>
): Player {
  let newPosition = player.position + roll;

  if (newPosition > 100) {
    newPosition = 100 - (newPosition - 100)
  }

  if (snakes[newPosition]) {
    newPosition = snakes[newPosition];
  }

  if (ladders[newPosition]) {
    newPosition = ladders[newPosition];
  }
  return { ...player, position: newPosition };
}