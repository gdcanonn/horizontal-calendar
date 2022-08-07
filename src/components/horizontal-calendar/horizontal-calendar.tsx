import { useState } from "react";
import { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec, Theme } from "../../utils/constants";
import styles from './horizontal-calendar.module.scss'
import DaysCalendar from "../days-calendar/days-calendar";
import { CalendarTheme, DayCalendar } from "../../utils/@types";
import cx from 'classnames'

const months = [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec];

interface HorizontalCalendarProps {
  day: Date,
  theme?: CalendarTheme,
  holidays?: Date[],
  children?: React.ReactNode
}

const HorizontalCalendar: React.FC<HorizontalCalendarProps> = ({ day, theme = 'green', holidays }: HorizontalCalendarProps) => {
  const [selectedDay, setSelectedDay] = useState(day)

  const previousDay = () => {
    setSelectedDay(new Date(selectedDay.setDate(selectedDay.getDate() - 1)));
  }

  const nextDay = () => {
    setSelectedDay(new Date(selectedDay.setDate(selectedDay.getDate() + 1)));
  }

  const changeSelectedDay = (date: DayCalendar) => {
    setSelectedDay(new Date(date.year, date.month, date.numberDay));
  }

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <img src={process.env.PUBLIC_URL + 'icons/arrow-left.png'}
          className={cx(styles.imgArrow, { [styles.imgArrowLeftBlue]: theme === Theme.BLUE })}
          alt='go-left-calendar' onClick={previousDay} />

        <h3>{months[selectedDay.getMonth()].substring(0, 3)} {selectedDay.getDate()}</h3>

        <img src={process.env.PUBLIC_URL + 'icons/arrow-right.png'}
          className={cx(styles.imgArrow, { [styles.imgArrowRightBlue]: theme === Theme.BLUE })}
          alt='go-right-calendar' onClick={nextDay} />
      </div>
      <DaysCalendar
        date={selectedDay}
        holidays={holidays}
        theme={theme}
        changeSelectedDay={changeSelectedDay}
      />
    </div>
  );
}

export default HorizontalCalendar;
