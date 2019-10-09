import { multiply, total } from "./App";

const add = jest.fn(() => 3);

test("add", () => {
  // arrange
  const num1 = 1;
  const num2 = 2;

  // act
  const value = add(num1, num2);

  // assert
  expect(value).toEqual(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(num1, num2);
});

test("multiply", () => {
  // arrange
  const num1 = 10;
  const num2 = 5;

  const num3 = 4;
  const num4 = 6;

  // act
  const result = multiply(num1, num2);
  const result2 = multiply(num3, num4);

  // assert
  expect(result).toEqual(50);
  expect(result2).toEqual(24);
});

test("total", () => {
  const result1 = total(5, 50);
  const result2 = total(3, 14);

  expect(result1).toEqual("$55");
  expect(result2).toEqual("$17");
});
