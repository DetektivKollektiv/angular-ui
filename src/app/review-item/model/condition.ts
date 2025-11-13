interface BaseCondition {
  field_id: string;
}

interface HasAnswerCondition extends BaseCondition {
  operator: 'has_answer';
}

interface ComparisonCondition extends BaseCondition {
  operator: '>' | '<';
  value: number;
}

interface EqualsCondition extends BaseCondition {
  operator: 'equals';
  value: string | number | boolean;
}

export type Condition = HasAnswerCondition | ComparisonCondition | EqualsCondition;

