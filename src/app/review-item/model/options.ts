export interface ChipOption {
  id: string;
  text: string;
}

export interface TraficLightOption {
  id: string;
  question: string;
}

export interface LikertScaleOption {
  id: string;
  text: string;
  description: string;
  color: string;
  value: 0 | 1 | 2 | 3 | 4;
}

export interface TextAreaOption {
  id: string;
  placeholder: string;
  max_length: number;
}

