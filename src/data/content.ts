import type { Choice } from '../types';

export const noButtonLabels = [
  'No',
  'Are you sure?',
  'Really??',
  'Come on...',
  'Please please please 🥺',
  "I'll be sad...",
  'Very very sad...',
  "I'm literally crying rn",
  'The button is getting smaller btw',
  "Ok I'll stop asking...",
  'Jk, just say yes! ❤️',
];

export const askSubtexts = [
  "Choose wisely. There's only one right answer.",
  "Choose wisely. There's only one right answer.",
  'Nice try lol',
  'Nice try lol',
  'Nice try lol',
  'The button is getting smaller haha',
  'The button is getting smaller haha',
  'Just give up and say yes 😭',
];

export const animalGifs = [
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/ZFuKkiDwHsl8I/giphy.gif',
  'https://media.giphy.com/media/yaUG0KDAcIcWA/giphy.gif',
  'https://media.giphy.com/media/krewXUB6LBja/giphy.gif',
  'https://media.giphy.com/media/3o7TKr5t9drIximd8c/giphy.gif',
  'https://media.giphy.com/media/MeIucAjPKoA120R7sN/giphy.gif',
  'https://media.giphy.com/media/vBz3YgnHJyChBL2Qod/giphy.gif',
];

export const stepGifs = {
  calendar: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  activity: 'https://media.giphy.com/media/1CrejqXxVZs9q/giphy.gif',
  food: 'https://media.giphy.com/media/yaUG0KDAcIcWA/giphy.gif',
  celebration: 'https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif',
};

export const activities: Choice[] = [
  { emoji: '🎬', label: 'Movie Night', description: 'Couch, blanket, snacks' },
  { emoji: '🌳', label: 'Walk in the Park', description: 'Just talking and walking' },
  { emoji: '👩‍🍳', label: 'Cook Together', description: 'Chaos in the kitchen' },
  { emoji: '🌌', label: 'Stargazing', description: 'You, me, and the universe' },
  { emoji: '🎮', label: 'Game Night', description: 'Loser buys dessert' },
  { emoji: '🚗', label: 'Go for a Drive', description: 'No destination, just vibes' },
];

export const foods: Choice[] = [
  { emoji: '🍣', label: 'Sushi' },
  { emoji: '🍕', label: 'Pizza' },
  { emoji: '🍜', label: 'Ramen' },
  { emoji: '🍔', label: 'Burgers' },
  { emoji: '🌮', label: 'Tacos' },
  { emoji: '🍦', label: 'Ice Cream' },
];
