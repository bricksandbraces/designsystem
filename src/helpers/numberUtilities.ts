/* eslint-disable import/prefer-default-export */

/**
 * Parse a number from a string.
 *
 * @param toParse the string to parse
 * @param float if the string could be a float
 * @returns the parsed number
 */
const parseToNumber = (toParse: string | undefined, float: boolean) => {
  if (toParse == null) return Number.NaN;
  const number = float ? Number.parseFloat(toParse) : Number.parseInt(toParse);
  return number;
};

export { parseToNumber };
