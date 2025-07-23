// This file is now a SERVER COMPONENT.

import { getPostById, generateMoreItems } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';


export async function generateStaticParams() {
  const posts = generateMoreItems(0, 100);
 
  return posts.map((post) => ({
    id: post.id,
  }));
}

// This is the main page component that runs on the server.
export default function BlogPostPage({ params }) {
  const { id } = params;

  // 1. Fetch the data on the server.
  const post = getPostById(id);

  // 2. Handle not found cases on the server.
  if (!post) {
    notFound();
  }

  // 3. Render the Client Component and pass the fetched data down as a prop.
  return <BlogPostClient post={post} />;
}