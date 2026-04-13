export function generateBoard(): number[] {
  const board: number[] = [];

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let num;

      if (row % 2 === 0) {
        num = row * 10 + col + 1;
      } else {
        num = row * 10 + (10 - col);
      }

      board.unshift(num);
    }
  }

  return board;
}