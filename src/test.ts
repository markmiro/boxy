import { add, sub } from "./index";

test("add 1 and 2 should be 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sub 1 and 2 should be -1", () => {
  expect(sub(1, 2)).toBe(-1);
});
