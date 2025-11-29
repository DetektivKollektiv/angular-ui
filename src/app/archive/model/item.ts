export interface Item {
  // Core identification
  id: string;
  title: string;

  // Content
  content: string; // URL or claim text
  language: string;

  // Status & timing
  status: 'in_progress' | 'published';
  open_timestamp: string;
  close_timestamp?: string;

  // Assessment results
  result_score: number; // 0-4 (float)
  content_tags: string[]; // e.g., ['RKI', 'Covid', 'Sterblichkeitsrate']
  review_tags: ReviewTag[];

  // OpenGraph metadata
  opengraph?: OpenGraphData;

  // Legacy/detail fields (optional while the detail view is simplified)
  review_comments?: any[];
  discussion_comments?: any[];
  users?: any[];
  reviews?: any[];
  warning_tags?: { text: string; icon?: string }[];

  // Aggregated ratings per question category
  rating_categories: RatingCategory[];
  comments: Comment[];
}

export interface ReviewTag {
  text: string;
  score: number; // 0-4 (float)
}

export interface OpenGraphData {
  title?: string;
  description?: string;
  url?: string;
  images?: string[]; // Array of image URLs
  site_name?: string;
  type?: string;
}

// Interface für die aggregierten Bewertungen einer einzelnen Frage
export interface QuestionRating {
  question_id: string; // z.B. 'grammar', 'structure', etc.
  question_text: string; // Der vollständige Fragetext
  total_reviews: number; // Gesamtzahl der Bewertungen
  distribution: RatingDistribution; // Verteilung der Bewertungen
  rating_tag: RatingTag; // Tags, die mit dieser Frage verbunden sind
}

// Verteilung der Bewertungen (0-4 für Traffic Light)
export interface RatingDistribution {
  0: number; // Prozent für "Rot" / kritischer Fehler (0-100)
  1: number; // Prozent für "Orange" / größerer Mangel
  2: number; // Prozent für "Gelb" / kleiner Mangel
  3: number; // Prozent für "Grün" / korrekt
  4: number; // Optional: für "Grau" / nicht bewertbar
}

// Kategorie von Fragen (entspricht den Slides in der Review)
export interface RatingCategory {
  category_id: string; // z.B. 'content_criteria_question', 'source_criteria_question'
  title: string; // z.B. 'Inhalte', 'Quelle', 'Bilder'
  icon?: string; // Optional: Icon identifier
  questions: QuestionRating[]; // Fragen innerhalb dieser Kategorie
}

export interface RatingTag {
  text: string;
  score: number; // 0-4 (float)
}

export interface Comment {
  id: string;
  user_name: string;
  timestamp: string; // ISO format
  text: string;
  upvotes: number;
  is_flagged?: boolean; // Optional: Kommentar wurde gemeldet
}
