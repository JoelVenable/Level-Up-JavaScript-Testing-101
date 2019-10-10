import { total } from "./total";
import { add } from "./add";

jest.mock("./add", () => ({
  add: jest.fn(() => 55)
}));

test("total", () => {
  const result1 = total(5, 50);

  add.mockImplementation(() => 17);
  const result2 = total(3, 14);

  expect(add).toHaveBeenCalledTimes(2);

  expect(result1).toEqual("$55");
  expect(result2).toEqual("$17");
});
