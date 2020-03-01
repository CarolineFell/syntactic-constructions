import returnNumber from '../try.catch.returnNumber';

test('Should be 762', () => {
  expect(() => returnNumber('a762')).toThrowError('a762 не является числом');
});

test('Should be a number', () => {
  expect(returnNumber(25)).toBe(25);
});

test('Should be a string number', () => {
  expect(returnNumber('25')).toBe(25);
});

test('Should be a string', () => {
  expect(() => returnNumber('smth')).toThrowError('smth не является числом');
});