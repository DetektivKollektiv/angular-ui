export interface Condition {
  question: string; // ID der Question (Slide)
  option?: string; // Optional: ID des spezifischen Fields innerhalb der Question
  operator: '>' | '<' | 'has_answer' | 'equals';
  value?: number | string | boolean;
}

