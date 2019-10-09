import { add, multiply } from "./App";

test("add", () => {
  // arrange
  const num1 = 32;
  const num2 = 12;

  const num3 = 4;
  const num4 = 4;
  // act
  const value = add(num1, num2);
  const value2 = add(num3, num4);

  // assert
  expect(value).toEqual(44);
  expect(value2).toEqual(8);
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
