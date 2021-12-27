import { format, isValid, parse } from "date-fns";

/**
 * Parse a string of a given format to a JS-Date.
 *
 * @param dateString The string to parse
 * @param dateFormat The format of the string e.g. dd.MM.yyyy from date-fns
 * @param fallback Fallback value when the parsing fails
 * @returns JS-Date
 */
const parseDate = <T>(
  dateString: string | Nullish,
  dateFormat: string,
  fallback: T
) => {
  if (!dateString) return fallback;
  const parsedDate = parse(dateString, dateFormat, new Date());
  return !isValid(parsedDate) ? fallback : parsedDate;
};

/**
 * Format a JS-Date to string.
 *
 * @param date JS-Date
 * @param dateFormat Format from date-fns
 * @param fallback Fallback value when the formatting fails
 * @returns string e.g. 29.08.2020
 */
const formatDate = (
  date: Date | Nullish,
  dateFormat: string,
  fallback: string
): string => {
  if (!date) return fallback;
  try {
    const formattedDate = format(date, dateFormat);
    return formattedDate;
  } catch (err) {
    return fallback;
  }
};

export { formatDate, parseDate };
