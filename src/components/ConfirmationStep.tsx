import { motion } from 'framer-motion';
import { stepGifs } from '../data/content';
import type { DatePlan } from '../types';
import { formatDate } from '../utils/date';
import AnimalGif from './AnimalGif';
import Confetti from './Confetti';

interface ConfirmationStepProps {
  plan: DatePlan;
  onRestart: () => void;
}

export default function ConfirmationStep({ plan, onRestart }: ConfirmationStepProps) {
  return (
    <div className="step-content confirmation-step">
      <Confetti />
      <AnimalGif src={stepGifs.celebration} alt="Celebrating animal" />
      <div className="heading-group">
        <h1>It's a date! 💕</h1>
        <p>Best decision ever.</p>
      </div>
      <motion.div
        className="summary-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 16 }}
      >
        <p><span>📅</span><strong>{plan.date ? formatDate(plan.date) : 'Date selected'}</strong></p>
        <p><span>{plan.activity?.emoji ?? '🎯'}</span><strong>{plan.activity?.label ?? 'Activity selected'}</strong></p>
        <p><span>{plan.food?.emoji ?? '🍽️'}</span><strong>{plan.food?.label ?? 'Food selected'}</strong></p>
      </motion.div>
      <p className="closing-line">Be ready. I'm coming to get you. No take-backs. This is legally binding now. 💕</p>
      <motion.div
        className="big-heart"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ repeat: Infinity, duration: 1.1 }}
      >
        💗
      </motion.div>
      <button type="button" className="restart-button" onClick={onRestart}>Start over</button>
    </div>
  );
}
