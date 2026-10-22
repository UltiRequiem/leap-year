/**
 * Get the (UTC) year out of anything date-like.
 *
 * @param value - A `Date`, a year as number or string, or a date string.
 *
 * @throws {@link TypeError}
 *
 * Thrown if the value cannot be turned into a year.
 */
export function parseDateLike(value: Date | string | number): number {
  if (value instanceof Date) {
    return value.getUTCFullYear();
  }

  if (typeof value === "number") {
    return value;
  }

  const year = Number(value);

  if (value.trim() !== "" && Number.isInteger(year)) {
    return year;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    throw new TypeError(`Could not get a year out of "${value}".`);
  }

  return date.getUTCFullYear();
}
