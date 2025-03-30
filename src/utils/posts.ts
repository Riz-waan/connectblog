import type { CollectionEntry } from 'astro:content';

export function getRelatedPosts(currentPost: CollectionEntry<'blog'>, allPosts: CollectionEntry<'blog'>[], limit = 3) {
  return allPosts
    .filter(post => 
      post.slug !== currentPost.slug && // Exclude current post
      post.data.tags.some(tag => currentPost.data.tags.includes(tag)) // Must share at least one tag
    )
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
    .slice(0, limit);
}