/**
 * Calculates the last day of a given month, defaulting to current month.
 * Uses JavaScript Date constructor behavior: new Date(year, month, 0)
 * returns the last day of the previous month, automatically handling
 * leap years and varying month lengths.
 */

export default (month?: number, year?: number): number => {
  const now = new Date();
  const targetMonth = month !== undefined ? month : now.getMonth() + 1;
  const targetYear = year !== undefined ? year : now.getFullYear();

  return new Date(targetYear, targetMonth, 0).getDate();
};
