import { expect, test } from "vitest";
import { sortValue } from "./sortValue";

test("keyをアルファベット順に並び替える", () => {
  const jsonText = `{
  "cherry": 3,
  "banana": 2,
  "apple": {
    "red": "red-apple",
    "green": "green-apple"
  }
}`;

  const result = sortValue(jsonText);

  expect(result).toEqual(
    `{
  "apple": {
    "green": "green-apple",
    "red": "red-apple"
  },
  "banana": 2,
  "cherry": 3
}`
  );
});
