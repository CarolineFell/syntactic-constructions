export default function findBy(a, b) {
  const key = a;
  const value = b;
  return function includeValue(element) {
    return (element[key].includes(value) && element[key] !== undefined);
  };
}
// ----------- 0001 -----------
// export default function findBy(a, b) {
//   const key = a;
//   const value = b;
//   return function includeValue(element) {
//     if (element[key].includes(value) && element[key] !== undefined) {
//       return true;
//     }
//     return false;
//   };
// }

// ----------- 0010 -----------
// так как в условии (if) тоже используется булевое значение:

// export default function findBy(a, b) {
//   const key = a;
//   const value = b;
//   return function includeValue(element) {
//     return element[key].includes(value) && element[key] !== undefined
//   };
// }

// ----------- 0011 -----------
// если предположить, что у нас лишь один уровень вложенности:

// export default function findBy(a, b) {
//   const key = a;
//   const value = b;
//   return function includeValue(element) {
//     return element[key] === value
// 		};
// }

// ----------- 0100 -----------

// export default function findBy(key, value) {
//   return function includeValue(element) {
//     return element[key] === value
// 		};
// }

// ----------- 0101 -----------

// export default function findBy(key, value) {
//   return (element) => {
//     return element[key] === value
// 		};
// }

// ----------- 0110 -----------

// export default function findBy(key, value) {
//   return (element) => element[key] === value
// }

// ----------- 0111 -----------

// const findBy(key, value)  => (element) => element[key] === value;
// export default findBy;