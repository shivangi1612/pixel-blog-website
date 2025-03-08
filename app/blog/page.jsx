import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog - Pixel Wisdom',
  description: 'All blog posts from Pixel Wisdom',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 font-['Press_Start_2P'] text-primary leading-relaxed">All Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="rounded-none border-2 border-primary/50 hover:border-primary transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className={`
                  rounded-none font-['VT323'] text-base
                  ${post.category === 'tech' ? 'border-green-500 text-green-500' : ''}
                  ${post.category === 'art' ? 'border-purple-500 text-purple-500' : ''}
                  ${post.category === 'finance' ? 'border-yellow-500 text-yellow-500' : ''}
                `}>
                  {post.category}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm font-['VT323']">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
              <CardTitle className="mt-2 font-['Press_Start_2P'] text-base leading-relaxed">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3 font-['VT323'] text-lg">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.slug}`} className="w-full">
                <Button variant="outline" className="w-full rounded-none font-['VT323'] text-lg">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}