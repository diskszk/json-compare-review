export function validate(value: string): boolean {
  if (!value) {
    return true;
  }

  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}
