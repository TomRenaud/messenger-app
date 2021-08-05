/**
 * Return a random date
 * @param days
 * @param months
 * @param years
 * @example randomDate([1,2,7,9,10], [0,1,2,7,9,10], [2019,2020,2021])
 */
export const randomDate = (years, months, days) => {
  const year = years[Math.floor(Math.random() * years.length)];
  const month = months[Math.floor(Math.random() * months.length)];
  const day = days[Math.floor(Math.random() * days.length)];
  return new Date(year, month, day);
}