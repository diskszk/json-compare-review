import { test, expect } from "vitest";
import { validate } from "./validate";

test("json形式の文字列の入力を受け取った場合、trueを返す", () => {
  const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;

  const result = validate(jsonText);

  expect(result).toBeTruthy();
});

test("文字列を受け取った場合、falseを返す", () => {
  const result = validate("string");
  expect(result).toBeFalsy();
});
test("オブジェクト文字列を受け取った場合、falseを返す", () => {
  const objString = `{
    name: "john",
    year: 25,
    hobby: ["fishing", "cooking"],
  }`;

  const result = validate(objString);
  expect(result).toBeFalsy();
});
