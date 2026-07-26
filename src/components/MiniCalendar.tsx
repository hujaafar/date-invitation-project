import { useMemo } from 'react';
import { sameDay, startOfDay } from '../utils/date';

interface MiniCalendarProps {
  monthOffset: number;
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function MiniCalendar({ monthOffset, selectedDate, onSelect }: MiniCalendarProps) {
  const monthDate = useMemo(() => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() + monthOffset);
    return date;
  }, [monthOffset]);

  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leading = new Date(year, month, 1).getDay();
  const today = startOfDay(new Date());
  const cells = Array.from({ length: leading + daysInMonth }, (_, index) =>
    index < leading ? null : new Date(year, month, index - leading + 1),
  );

  return (
    <section className="calendar-month">
      <h3>{monthDate.toLocaleDateString('en', { month: 'long', year: 'numeric' })}</h3>
      <div className="calendar-grid weekdays">
        {weekdays.map((day) => <span key={day}>{day.slice(0, 1)}</span>)}
      </div>
      <div className="calendar-grid">
        {cells.map((date, index) => {
          if (!date) return <span key={`blank-${index}`} />;
          const disabled = startOfDay(date) <= today;
          const selected = selectedDate ? sameDay(date, selectedDate) : false;
          return (
            <button
              key={date.toISOString()}
              type="button"
              className={`day-button${selected ? ' selected' : ''}`}
              disabled={disabled}
              onClick={() => onSelect(date)}
              aria-label={date.toDateString()}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </section>
  );
}
