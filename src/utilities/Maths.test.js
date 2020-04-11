import utils from './Maths';

it('should sum up the numbers of an array', () => {
  const numbersArray = [1, 7, 2];

  const sumCalc = utils.sum(numbersArray);

  expect(sumCalc).toEqual(10);
});

it('should create an array of numbers between min and max', () => {
  const min = 1;
  const max = 9;

  const rangeCalc = utils.range(min, max);

  const response = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  expect(rangeCalc.length).toBe(9);

  expect(rangeCalc).toEqual(response);
});

it('should pick a random number between min and max', () => {
  const min = 1;
  const max = 9;

  const randomCalc = utils.random(min, max);

  expect(randomCalc).toBeGreaterThanOrEqual(1);
  expect(randomCalc).toBeLessThanOrEqual(9);
});

it('should pick a random sum from the array', () => {
  const availableNumbers = [2, 3];
  const max = 9;

  const randomSum = utils.randomSumIn(availableNumbers, max);
  expect(randomSum).not.toBe(1);
  expect(randomSum).not.toBe(4);
  expect(randomSum).not.toBeGreaterThanOrEqual(6);
});
