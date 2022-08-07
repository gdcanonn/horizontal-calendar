export type DayCalendar = {
  date: Date
  month: number
  numberDay: number
  year: number
  weekday: string
  selected: boolean
  currentMonth: boolean
  isHoliday: boolean
}

export type CalendarTheme = 'green' | 'blue'