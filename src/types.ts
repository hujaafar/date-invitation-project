export type Step = 1 | 2 | 3 | 4 | 5;

export interface Choice {
  emoji: string;
  label: string;
  description?: string;
}

export interface DatePlan {
  date: Date | null;
  activity: Choice | null;
  food: Choice | null;
}
