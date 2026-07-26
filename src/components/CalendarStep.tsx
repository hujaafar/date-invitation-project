import { motion } from 'framer-motion';
import { stepGifs } from '../data/content';
import { nextWeekday, startOfDay } from '../utils/date';
import AnimalGif from './AnimalGif';
import MiniCalendar from './MiniCalendar';

interface CalendarStepProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

export default function CalendarStep({ selectedDate, onSelect }: CalendarStepProps) {
  const today = startOfDay(new Date());

  const chooseWeekend = () => onSelect(nextWeekday(6));

  const chooseNextWeek = () => {
    const date = new Date(today);
    date.setDate(today.getDate() + 7);
    onSelect(date);
  };

  const chooseTomorrow = () => {
    const date = new Date(today);
    date.setDate(today.getDate() + 1);
    onSelect(date);
  };

  return (
    <div className="step-content wide-step">
      <AnimalGif src={stepGifs.calendar} alt="Cute animal looking at a clock" />
      <div className="heading-group">
        <h1>When are you free?</h1>
        <p>Pick a day 📅</p>
      </div>
      <div className="calendar-wrap">
        <MiniCalendar monthOffset={0} selectedDate={selectedDate} onSelect={onSelect} />
        <MiniCalendar monthOffset={1} selectedDate={selectedDate} onSelect={onSelect} />
      </div>
      <div className="quick-options">
        <motion.button type="button" whileTap={{ scale: 0.96 }} onClick={() => onSelect(nextWeekday(5))}>This Friday</motion.button>
        <motion.button type="button" whileTap={{ scale: 0.96 }} onClick={chooseWeekend}>This Weekend</motion.button>
        <motion.button type="button" whileTap={{ scale: 0.96 }} onClick={chooseNextWeek}>Next Week</motion.button>
        <motion.button type="button" whileTap={{ scale: 0.96 }} onClick={chooseTomorrow}>Whenever you want — I'm free 24/7 lol</motion.button>
      </div>
    </div>
  );
}
