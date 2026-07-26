import { foods, stepGifs } from '../data/content';
import type { Choice } from '../types';
import AnimalGif from './AnimalGif';
import ChoiceCard from './ChoiceCard';

interface FoodStepProps {
  onSelect: (choice: Choice) => void;
}

export default function FoodStep({ onSelect }: FoodStepProps) {
  return (
    <div className="step-content wide-step">
      <AnimalGif src={stepGifs.food} alt="Hamster eating something cute" />
      <div className="heading-group">
        <h1>Now the important question...</h1>
        <p>What are we eating? 🍽️</p>
      </div>
      <div className="choice-grid food-grid">
        {foods.map((choice, index) => (
          <ChoiceCard key={choice.label} choice={choice} index={index} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
