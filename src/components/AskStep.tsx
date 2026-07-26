import { motion } from 'framer-motion';
import { animalGifs, askSubtexts, noButtonLabels } from '../data/content';
import AnimalGif from './AnimalGif';

interface AskStepProps {
  noCount: number;
  onNo: () => void;
  onYes: () => void;
}

export default function AskStep({ noCount, onNo, onYes }: AskStepProps) {
  const yesScale = Math.min(1 + noCount * 0.4, 5);
  const noScale = Math.max(1 - noCount * 0.25, 0.3);
  const gif = animalGifs[noCount % animalGifs.length];
  const noLabel = noButtonLabels[Math.min(noCount, noButtonLabels.length - 1)];
  const subtext = askSubtexts[Math.min(noCount, askSubtexts.length - 1)];

  return (
    <div className="step-content">
      <AnimalGif src={gif} alt="Cute animal asking nicely" />
      <div className="heading-group">
        <h1>Will you go on a date with me?</h1>
        <p>{subtext}</p>
      </div>
      <div className="ask-actions">
        <motion.button
          type="button"
          className="primary-button yes-button"
          animate={{ scale: yesScale }}
          transition={{ type: 'spring', stiffness: 180, damping: 14 }}
          whileTap={{ scale: Math.max(0.95, yesScale - 0.08) }}
          onClick={onYes}
        >
          Yes 💕
        </motion.button>
        <motion.button
          type="button"
          className="secondary-button no-button"
          animate={{ scale: noScale }}
          transition={{ type: 'spring', stiffness: 240, damping: 16 }}
          whileHover={noCount >= 4 ? { x: [0, 42, -38, 24, 0], y: [0, -22, 15, -12, 0] } : undefined}
          onClick={onNo}
        >
          {noLabel}
        </motion.button>
      </div>
    </div>
  );
}
