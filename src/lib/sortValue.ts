export function sortValue(inputValue: string): string {
  const obj: object = JSON.parse(inputValue);

  return JSON.stringify(
    obj,
    (_, v) =>
      !(v instanceof Array || v === null) && typeof v == "object"
        ? Object.keys(v)
            .sort()
            .reduce((r, k) => {
              r[k] = v[k];
              return r;
            }, {})
        : v,
    2
  );
}
