import { add, multiply } from "./App";

test("add", () => {
  // arrange
  const num1 = 32;
  const num2 = 12;

  // act
  const value = add(num1, num2);

  // assert
  expect(value).toEqual(44);
});

test("multiply", () => {
  // arrange
  const num1 = 10;
  const num2 = 5;

  // act
  const result = multiply(num1, num2);

  // assert
  expect(result).toEqual(50);
});
