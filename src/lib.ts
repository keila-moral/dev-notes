import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published posts, newest first. Drafts show up only in `npm run dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Prefixes a site-relative path with the configured base, e.g. /blog/posts/x/. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function readingTime(body: string | undefined): string {
  const words = (body ?? '').trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/** Two-digit issue number for a post, counting from the oldest (01). */
export function postNumber(post: Post, posts: Post[]): string {
  return pad(posts.length - posts.findIndex((p) => p.id === post.id));
}

export function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/** ISO date (YYYY-MM-DD), used for the monospace date columns. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
