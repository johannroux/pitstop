import type { Creator, Post, PostWithCreator } from './types';
import creatorsData from '../data/creators.json';
import postsData from '../data/posts.json';

const creators = creatorsData as Creator[];
const posts = postsData as Post[];

const creatorMap = new Map(creators.map((creator) => [creator.id, creator]));

export function getCreators(): Creator[] {
  return creators;
}

export function getPostsWithCreators(): PostWithCreator[] {
  return posts
    .map((post) => {
      const creator = creatorMap.get(post.creatorId);
      if (!creator) return null;
      return { ...post, creator };
    })
    .filter((post): post is PostWithCreator => post !== null)
    .sort(
      (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
    );
}

export function formatRelativeTime(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 1) return 'Just now';
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return count.toString();
}
