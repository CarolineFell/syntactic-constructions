export default function findBy(a, b) {
  const key = a;
  const value = b;
  return function includeValue(element) {
    if (element[key].includes(value) && element[key] !== undefined) {
      return true;
    }
    return false;
  };
}