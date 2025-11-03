interface ChipOption {
  id: string;
  text: string;
}

interface TraficLightOption {
  id: string;
  question: string;
}

interface LikertScaleOption {
  id: string;
  text: string;
  description: string;
  color: string;
  value: 0 | 1 | 2 | 3 | 4;
}

interface TextAreaOption {
  id: string;
  placeholder: string;
  max_length: number;
}
