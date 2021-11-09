/* eslint-disable import/prefer-default-export */
const parseToNumber = (toParse: string | undefined, float: boolean = false) => {
  if (toParse == null) return Number.NaN;
  const number = float ? Number.parseFloat(toParse) : Number.parseInt(toParse);
  return number;
};

export { parseToNumber };
