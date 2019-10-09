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
