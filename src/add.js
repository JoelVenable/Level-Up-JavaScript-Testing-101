export const add = (x, y) => x + y;

test("add", () => {
  // arrange
  const num1 = 1;
  const num2 = 2;

  const num3 = 13;
  const num4 = 7;

  // act
  const value = add(num1, num2);
  const value2 = add(num3, num4);

  // assert
  expect(value).toEqual(3);
  expect(value2).toEqual(20);
  //expect(add).toHaveBeenCalledTimes(1);
  //expect(add).toHaveBeenCalledWith(num1, num2);
});
