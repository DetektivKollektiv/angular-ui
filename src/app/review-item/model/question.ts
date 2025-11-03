import { Condition } from './condition';
import { Field } from './fields';

interface Metadata {
  title: string;
  text: string;
  help_url: string;
  indent_level?: number; // 0 = keine Einrückung (default), 1 = eine Ebene, 2 = zwei Ebenen, etc.
}

export interface Question {
  id: string;
  metadata: Metadata;
  fields: Field[]; // Array von Fields - mehrere pro Slide möglich!
  conditions?: Condition[]; // Conditions auf Slide-Ebene
}

