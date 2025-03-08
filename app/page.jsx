import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Palette, DollarSign, Clock } from 'lucide-react';
import FeaturedPost from '@/components/FeaturedPost';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 7);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-16 border-b border-primary/30">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary font-['Press_Start_2P'] tracking-tight leading-relaxed">
          Pixel Wisdom
        </h1>
        <p className="text-xl mb-8 text-muted-foreground font-['VT323'] text-2xl">
          Tech • Art • Finance
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/category/tech">
            <Button variant="outline" className="rounded-none border-2 border-green-500 hover:bg-green-500/20 font-['VT323'] text-lg">
              <Monitor className="mr-2 h-4 w-4" />
              Tech
            </Button>
          </Link>
          <Link href="/category/art">
            <Button variant="outline" className="rounded-none border-2 border-purple-500 hover:bg-purple-500/20 font-['VT323'] text-lg">
              <Palette className="mr-2 h-4 w-4" />
              Art
            </Button>
          </Link>
          <Link href="/category/finance">
            <Button variant="outline" className="rounded-none border-2 border-yellow-500 hover:bg-yellow-500/20 font-['VT323'] text-lg">
              <DollarSign className="mr-2 h-4 w-4" />
              Finance
            </Button>
          </Link>
        </div>
        <Link href="/about">
          <Button variant="ghost" className="font-['VT323'] text-lg">
            About Us
          </Button>
        </Link>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 font-['Press_Start_2P'] text-green-400 leading-relaxed">Latest Pixelated Wisdom</h2>
        
        {featuredPost && <FeaturedPost post={featuredPost} />}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {recentPosts.map((post) => (
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
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="rounded-none font-['VT323'] text-lg">View All Posts</Button>
          </Link>
        </div>
      </section>
      
      <section className="py-12 border-t border-primary/30">
        <h2 className="text-3xl text-center font-bold mb-8 font-['Press_Start_2P'] text-green-400 leading-relaxed">Subscribe to Our Newsletter</h2>
        <div className="max-w-md mx-auto">
          <p className="text-muted-foreground mb-4 font-['VT323'] text-xl">Get the latest pixelated wisdom delivered straight to your inbox.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="flex h-10 w-full rounded-none border-2 border-primary/50 bg-background px-3 py-2 text-lg font-['VT323'] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button type="submit" className="rounded-none font-['VT323'] text-lg">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}