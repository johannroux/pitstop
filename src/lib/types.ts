export interface Post {
  id: string;
  creatorId: string;
  caption: string;
  imageUrl: string;
  imagePrompt: string;
  postedAt: string;
  likeCount: number;
  commentCount: number;
}

export interface Creator {
  id: string;
  slug: string;
  displayName: string;
  tagline: string;
  avatarUrl: string;
  avatarPrompt: string;
  followerCount: number;
  previewImageUrl: string;
  previewPrompt: string;
}

export interface PostWithCreator extends Post {
  creator: Creator;
}
