

import { getPostById, generateMoreItems } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';


export async function generateStaticParams() {
  const posts = generateMoreItems(0, 100);
 
  return posts.map((post) => ({
    id: post.id,
  }));
}


export default function BlogPostPage({ params }) {
  const { id } = params;

  
  const post = getPostById(id);

  
  if (!post) {
    notFound();
  }

  
  return <BlogPostClient post={post} />;
}
