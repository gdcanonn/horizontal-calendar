import { Sun, Mon, Tue, Wed, Thu, Fri, Sat } from "./constants";

/**
 * Method to get weekday in human readable way
 * @param day Weekday number
 * @returns weekday in human readable way
 */
export const getWeekDay = (day: number): string => {
  switch (day) {
    case 1:
      return Mon
    case 2:
      return Tue
    case 3:
      return Wed
    case 4:
      return Thu
    case 5:
      return Fri
    case 6:
      return Sat
    default:
      return Sun
  }
}

/**
 * Method to verify if a given day is within given holidays arrays
 * @param day Day to evaluete
 * @param holidays Holiday list
 * @returns true if given day is holiday, otherwise return false
 */
export const isHoliday = (day: Date, holidays?: Date[]) => {
  return holidays?.find(d => d.toDateString() === day.toDateString()) ? true : false
}