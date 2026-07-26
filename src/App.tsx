import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ActivityStep from './components/ActivityStep';
import AskStep from './components/AskStep';
import CalendarStep from './components/CalendarStep';
import ConfirmationStep from './components/ConfirmationStep';
import FloatingHearts from './components/FloatingHearts';
import FoodStep from './components/FoodStep';
import ProgressDots from './components/ProgressDots';
import type { Choice, DatePlan, Step } from './types';

const emptyPlan: DatePlan = { date: null, activity: null, food: null };

export default function App() {
  const [step, setStep] = useState<Step>(1);
  const [noCount, setNoCount] = useState(0);
  const [plan, setPlan] = useState<DatePlan>(emptyPlan);

  const selectDate = (date: Date) => {
    setPlan((current) => ({ ...current, date }));
    setStep(3);
  };

  const selectActivity = (activity: Choice) => {
    setPlan((current) => ({ ...current, activity }));
    setStep(4);
  };

  const selectFood = (food: Choice) => {
    setPlan((current) => ({ ...current, food }));
    setStep(5);
  };

  const restart = () => {
    setStep(1);
    setNoCount(0);
    setPlan(emptyPlan);
  };

  return (
    <main className="app-shell">
      <FloatingHearts />
      <div className="page-card">
        <ProgressDots step={step} />
        <AnimatePresence mode="wait">
          <motion.section
            key={step}
            className="step-stage"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <AskStep
                noCount={noCount}
                onNo={() => setNoCount((count) => count + 1)}
                onYes={() => setStep(2)}
              />
            )}
            {step === 2 && <CalendarStep selectedDate={plan.date} onSelect={selectDate} />}
            {step === 3 && <ActivityStep onSelect={selectActivity} />}
            {step === 4 && <FoodStep onSelect={selectFood} />}
            {step === 5 && <ConfirmationStep plan={plan} onRestart={restart} />}
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  );
}
