import { motion } from 'framer-motion';
import type { Choice } from '../types';

interface ChoiceCardProps {
  choice: Choice;
  index: number;
  onSelect: (choice: Choice) => void;
}

export default function ChoiceCard({ choice, index, onSelect }: ChoiceCardProps) {
  return (
    <motion.button
      type="button"
      className="choice-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 220, damping: 18 }}
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onSelect(choice)}
    >
      <span className="choice-emoji">{choice.emoji}</span>
      <span className="choice-copy">
        <strong>{choice.label}</strong>
        {choice.description && <small>{choice.description}</small>}
      </span>
    </motion.button>
  );
}
