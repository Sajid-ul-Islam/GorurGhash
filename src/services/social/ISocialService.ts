export interface SocialProductTag {
  productId: string;
  productName: string;
  price: number;
  imageUrl: string;
}

export interface SocialStory {
  id: string;
  title: string;
  thumbnailUrl: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  durationSeconds: number;
  caption?: string;
  taggedProduct?: SocialProductTag;
  hasUnseen?: boolean;
}

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'facebook';
  permalink: string;
  imageUrl: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  datePosted: string;
  taggedProducts: SocialProductTag[];
}

export interface SocialReel {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  viewsCount: number;
  likesCount: number;
  durationSeconds: number;
  taggedProduct?: SocialProductTag;
}

export interface ISocialService {
  getStories(): Promise<SocialStory[]>;
  getFeedPosts(): Promise<SocialPost[]>;
  getReels(): Promise<SocialReel[]>;
}
