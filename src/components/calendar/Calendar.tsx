import { useState } from "react";
import './calendar.css';

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const Calendar = () => {
  const today = new Date();
  const [current, setCurrent] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const { year, month } = current;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const prev = () =>
    setCurrent(({ year, month }) =>
      month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }
    );

  const next = () =>
    setCurrent(({ year, month }) =>
      month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }
    );

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="nav-btn" onClick={prev}>‹</button>
        <p>{MONTHS[month]} {year}</p>
        <button className="nav-btn" onClick={next}>›</button>
      </div>

      <ul className="calendar-days">
        {DAYS.map((day) => (
          <li key={day} className="calendar-day">{day}</li>
        ))}
      </ul>

      <ul className="calendar-dates">
        {/* Empty spacers for leading offset */}
        {Array.from({ length: firstDay }, (_, i) => (
          <li key={`spacer-${i}`} className="calendar-spacer" />
        ))}

        {/* Current month days only */}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          return (
            <li
              key={day}
              className={["calendar-date", isToday(day) ? "today" : ""].join(" ").trim()}
            >
              {day}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Calendar;