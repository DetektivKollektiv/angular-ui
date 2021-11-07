export interface ShareItem {
  type: 'link' | 'mail' | 'twitter' | 'facebook' | 'instagram';
  url: string;
  faIcon: string;
}
