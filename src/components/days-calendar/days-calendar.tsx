import { useEffect, useState } from "react"
import { CalendarTheme, DayCalendar } from "../../utils/@types"
import { getWeekDay, isHoliday } from "../../utils/utils"
import styles from './days-calendar.module.scss'
import cx from 'classnames'
import { Theme } from "../../utils/constants"

interface DaysCalendarProps {
  date: Date,
  holidays?: Date[],
  theme?: CalendarTheme,
  changeSelectedDay: (day: DayCalendar) => void,
  children?: React.ReactNode
}

const DaysCalendar: React.FC<DaysCalendarProps> = ({ date, holidays, theme, changeSelectedDay }: DaysCalendarProps) => {
  const [visiblesDays, setVisiblesDays] = useState<DayCalendar[]>([])

  const calculateDays = (firstDay: Date) => {
    const dayList: DayCalendar[] = []
    for (let day = 0; day < 7; day++) {
      const newDay = new Date(firstDay.setDate(firstDay.getDate() + 1))
      let visibleDay: DayCalendar = {
        date: (new Date(newDay)),
        month: newDay.getMonth(),
        numberDay: newDay.getDate(),
        year: newDay.getFullYear(),
        weekday: getWeekDay(newDay.getDay()),
        selected: (newDay.toDateString() === date.toDateString()),
        currentMonth: (newDay.getMonth() === date.getMonth()),
        isHoliday: isHoliday(newDay, holidays)
      }
      dayList.push(visibleDay)
    }
    setVisiblesDays(dayList)
  }

  useEffect(() => {
    const originalDate = new Date(date.getTime())
    const weekday = originalDate.getDay() !== 0 ? originalDate.getDay() : 7
    const firstDay = new Date(originalDate.setDate(originalDate.getDate() - weekday))
    calculateDays(firstDay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  return (
    <div className={styles.boxContent}>
      {visiblesDays.map((day: DayCalendar, index: number) => (
        <div key={`wd-${index}`} onClick={() => changeSelectedDay(day)}
          className={cx(styles.boxDay,
            { [styles.boxDayBlue]: theme === Theme.BLUE },
            { [styles.boxDayOtherMonth]: !day.currentMonth },
            { [styles.boxDayActive]: day.selected },
            { [styles.boxDayActiveBlue]: day.selected && theme === Theme.BLUE }
          )}>
          <h4>{day.weekday}</h4>
          <div className={styles.boxDayNum}>
            <span>{day.numberDay}</span>
          </div>
          <div className={styles.boxDayBottom}>
            <div className={cx(
              { [styles.boxDayBottomDot]: day.isHoliday },
              { [styles.boxDayBottomDotActive]: day.selected },
              { [styles.boxDayBottomDotBlue]: theme === Theme.BLUE }
            )}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DaysCalendar;
