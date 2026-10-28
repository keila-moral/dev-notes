import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_TAGLINE } from '../consts';
import { getPosts } from '../lib';

export async function GET(context) {
  const posts = await getPosts();
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: SITE_TITLE,
    description: SITE_TAGLINE,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.subtitle,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: `${base}/posts/${post.id}/`,
    })),
  });
}
