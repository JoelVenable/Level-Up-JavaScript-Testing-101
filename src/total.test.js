import { total } from "./total";
import { add } from "./add";

jest.mock("./add");

test("total", () => {
  const result1 = total(5, 50);
  const result2 = total(3, 14);

  expect(result1).toEqual("$55");
  expect(result2).toEqual("$17");
});
