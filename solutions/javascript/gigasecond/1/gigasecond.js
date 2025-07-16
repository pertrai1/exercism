const GIGA_MILLISECONDS = 10 ** 12;

export const gigasecond = (date) => {
  return new Date(date.getTime() + GIGA_MILLISECONDS);
};
