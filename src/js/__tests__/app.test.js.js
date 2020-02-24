import returnNumber from '../app';

test('Should be 762', () => {
  expect(() => returnNumber('0p85')).toThrowError('0p85 не является числом');
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