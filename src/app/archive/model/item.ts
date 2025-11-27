export interface Item {
  // Core identification
  id: string;

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
