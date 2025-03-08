import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, User, Share2 } from 'lucide-react';
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Pixel Wisdom',
    };
  }
  
  return {
    title: `${post.title} - Pixel Wisdom`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-4 font-['VT323'] text-lg">← Back to all posts</Button>
          </Link>
          
          <Badge variant="outline" className={`
            mb-4 rounded-none font-['VT323'] text-base
            ${post.category === 'tech' ? 'border-green-500 text-green-500' : ''}
            ${post.category === 'art' ? 'border-purple-500 text-purple-500' : ''}
            ${post.category === 'finance' ? 'border-yellow-500 text-yellow-500' : ''}
          `}>
            {post.category}
          </Badge>
          
          <h1 className="text-3xl font-bold mb-4 font-['Press_Start_2P'] text-primary leading-relaxed">{post.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-8 font-['VT323'] text-lg">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none mb-12 font-['VT323'] text-xl">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
        
        <div className="border-t border-primary/30 pt-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium mb-2 font-['Press_Start_2P'] text-sm">Share this post</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-none">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Link href={`/category/${post.category}`}>
              <Button variant="outline" className="rounded-none font-['VT323'] text-lg">
                More in {post.category}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}