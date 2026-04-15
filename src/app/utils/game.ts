export function generateBoard(): number[] {
  const size = 10;
  return Array.from({length: size}, (_, row) => {
    const startVal = row * size + 1;
    const rowNumbers = Array.from({length: size}, (_, i) => startVal + i);

    return row % 2 === 1 ? rowNumbers.reverse() : rowNumbers;
  }).reverse().flat()
}
