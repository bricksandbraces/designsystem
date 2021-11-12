import { format, parse, isValid } from "date-fns";

const parseDate = <T>(
  dateString: string | Nullish,
  dateFormat: string,
  fallback: T
) => {
  if (!dateString) return fallback;
  const parsedDate = parse(dateString, dateFormat, new Date());
  return !isValid(parsedDate) ? fallback : parsedDate;
};

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
