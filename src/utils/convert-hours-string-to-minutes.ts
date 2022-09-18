/*
 * 18:00 -> ["18", "00"]-> [18,00]
 */
export const convertHoursStringToMinutes = (hoursString: string) => {
  const [hours, minutes] = hoursString.split(" : ").map(Number);
  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
};
