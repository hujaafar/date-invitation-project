import { activities, stepGifs } from '../data/content';
import type { Choice } from '../types';
import AnimalGif from './AnimalGif';
import ChoiceCard from './ChoiceCard';

interface ActivityStepProps {
  onSelect: (choice: Choice) => void;
}

export default function ActivityStep({ onSelect }: ActivityStepProps) {
  return (
    <div className="step-content wide-step">
      <AnimalGif src={stepGifs.activity} alt="Otters holding hands" />
      <div className="heading-group">
        <h1>What are we feeling?</h1>
        <p>Pick our date vibe ✨</p>
      </div>
      <div className="choice-grid activity-grid">
        {activities.map((choice, index) => (
          <ChoiceCard key={choice.label} choice={choice} index={index} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
