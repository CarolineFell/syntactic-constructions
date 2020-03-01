export default function returnNumber(number) {
  if (Number.isNaN(parseInt(number, 10)) || parseInt(number, 10) === 0) {
    throw new Error(`${number} не является числом`);
  }
  return parseInt(number, 10);
}