export enum ItemSources {
  Messenger = 'messenger',
  SocialMedia = 'social_media',
  WebSurfing = 'web_surfing',
  OtherMedia = 'other_media',
  Orally = 'orally',
  Other = 'other'
}

export type ItemSource = ItemSources | string | null;
