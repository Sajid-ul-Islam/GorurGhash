import { ISocialService, SocialStory, SocialPost, SocialReel } from './ISocialService';

export class MockSocialService implements ISocialService {
  private stories: SocialStory[] = [
    {
      id: 'story-1',
      title: 'Dhaka Drop',
      thumbnailUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500',
      mediaUrl: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1080',
      mediaType: 'image',
      durationSeconds: 5,
      caption: 'Fresh from our cutting room: Boxy silhouettes, 260 GSM combed cotton. Built for the tropics.',
      taggedProduct: {
        productId: 'gg-prod-1',
        productName: 'Heavyweight Boxy Graphic Tee',
        price: 1350,
        imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500',
      },
      hasUnseen: true,
    },
    {
      id: 'story-2',
      title: 'Corduroy Era',
      thumbnailUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500',
      mediaUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=1080',
      mediaType: 'image',
      durationSeconds: 5,
      caption: 'Wide-wale corduroy jackets with matte hardware. Tailored right here in Dhaka.',
      taggedProduct: {
        productId: 'gg-prod-3',
        productName: 'Vintage Wale Corduroy Overshirt',
        price: 2450,
        imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500',
      },
      hasUnseen: true,
    },
    {
      id: 'story-3',
      title: 'Cargo Restock',
      thumbnailUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500',
      mediaUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1080',
      mediaType: 'image',
      durationSeconds: 5,
      caption: '6-pocket utilitarian cargo pants restocked in Olive, Washed Black & Khaki.',
      taggedProduct: {
        productId: 'gg-prod-2',
        productName: 'Relaxed Multi-Pocket Cargo Trousers',
        price: 1950,
        imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500',
      },
      hasUnseen: true,
    },
    {
      id: 'story-4',
      title: 'Cuban Resort',
      thumbnailUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
      mediaUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1080',
      mediaType: 'image',
      durationSeconds: 5,
      caption: 'Breezy camp collar shirts featuring signature subversive illustrated motifs.',
      taggedProduct: {
        productId: 'gg-prod-4',
        productName: 'Block-Print Camp Collar Cuban Shirt',
        price: 1650,
        imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
      },
      hasUnseen: false,
    },
    {
      id: 'story-5',
      title: 'Atelier Dhaka',
      thumbnailUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500',
      mediaUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1080',
      mediaType: 'image',
      durationSeconds: 5,
      caption: 'Behind the scenes at our Uttara design studio. Every stitch considered.',
      hasUnseen: false,
    },
  ];

  private feedPosts: SocialPost[] = [
    {
      id: 'post-1',
      platform: 'instagram',
      permalink: 'https://www.instagram.com/gorurghash/?hl=en',
      imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      caption: 'When they ask why Dhaka streetwear hits different 🔥 Wearing our signature 260 GSM Oversized Drop Tee paired with Relaxed Washed Cargos.',
      likesCount: 1420,
      commentsCount: 68,
      datePosted: '2 hours ago',
      taggedProducts: [
        {
          productId: 'gg-prod-1',
          productName: 'Heavyweight Boxy Graphic Tee',
          price: 1350,
          imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500',
        },
      ],
    },
    {
      id: 'post-2',
      platform: 'instagram',
      permalink: 'https://www.instagram.com/gorurghash/?hl=en',
      imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
      caption: 'Cold evenings in Dhanmondi call for ribbed corduroy and effortless tailoring. Available now online & at Uttara store. 🇧🇩',
      likesCount: 2310,
      commentsCount: 114,
      datePosted: '1 day ago',
      taggedProducts: [
        {
          productId: 'gg-prod-3',
          productName: 'Vintage Wale Corduroy Overshirt',
          price: 2450,
          imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500',
        },
      ],
    },
    {
      id: 'post-3',
      platform: 'facebook',
      permalink: 'https://www.facebook.com/gorurghash',
      imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800',
      caption: 'Weekend uniforms sorted. Minimal branding, premium feel, maximum comfort. On-spot trial with courier rider available all over Bangladesh!',
      likesCount: 980,
      commentsCount: 42,
      datePosted: '3 days ago',
      taggedProducts: [
        {
          productId: 'gg-prod-2',
          productName: 'Relaxed Multi-Pocket Cargo Trousers',
          price: 1950,
          imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500',
        },
      ],
    },
    {
      id: 'post-4',
      platform: 'instagram',
      permalink: 'https://www.instagram.com/gorurghash/?hl=en',
      imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800',
      caption: 'Resort vibes in the heart of the metropolis. Camp collar shirts crafted with breathable cotton linen blend.',
      likesCount: 1840,
      commentsCount: 79,
      datePosted: '4 days ago',
      taggedProducts: [
        {
          productId: 'gg-prod-4',
          productName: 'Block-Print Camp Collar Cuban Shirt',
          price: 1650,
          imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
        },
      ],
    },
  ];

  private reels: SocialReel[] = [
    {
      id: 'reel-1',
      title: 'How We Style The Heavyweight Boxy Tee 3 Ways',
      thumbnailUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      viewsCount: 48900,
      likesCount: 3800,
      durationSeconds: 15,
      taggedProduct: {
        productId: 'gg-prod-1',
        productName: 'Heavyweight Boxy Graphic Tee',
        price: 1350,
        imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500',
      },
    },
    {
      id: 'reel-2',
      title: 'Dhaka Traffic Fits: Corduroy Jacket & Cargos',
      thumbnailUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      viewsCount: 72400,
      likesCount: 5400,
      durationSeconds: 18,
      taggedProduct: {
        productId: 'gg-prod-3',
        productName: 'Vintage Wale Corduroy Overshirt',
        price: 2450,
        imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500',
      },
    },
  ];

  async getStories(): Promise<SocialStory[]> {
    return this.stories;
  }

  async getFeedPosts(): Promise<SocialPost[]> {
    return this.feedPosts;
  }

  async getReels(): Promise<SocialReel[]> {
    return this.reels;
  }
}

export const socialService = new MockSocialService();
