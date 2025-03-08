import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Monitor, Palette, DollarSign } from 'lucide-react';
import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const category = params.category;
  const validCategories = ['tech', 'art', 'finance'];

  if (!validCategories.includes(category)) {
    return {
      title: 'Category Not Found - Pixel Wisdom',
    };
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `${categoryName} - Pixel Wisdom`,
    description: `Articles about ${categoryName} from Pixel Wisdom`,
  };
}

export async function generateStaticParams() {
  return [{ category: 'tech' }, { category: 'art' }, { category: 'finance' }];
}

export default function CategoryPage({ params }) {
  const category = params.category;
  const validCategories = ['tech', 'art', 'finance'];

  if (!validCategories.includes(category)) {
    notFound();
  }

  const posts = getAllPosts().filter((post) => post.category === category);
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  let CategoryIcon;
  if (category === 'tech') {
    CategoryIcon = Monitor;
  } else if (category === 'art') {
    CategoryIcon = Palette;
  } else {
    CategoryIcon = DollarSign;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <CategoryIcon className={`
          h-8 w-8
          ${category === 'tech' ? 'text-green-500' : ''}
          ${category === 'art' ? 'text-purple-500' : ''}
          ${category === 'finance' ? 'text-yellow-500' : ''}
        `} />
        <h1 className="text-4xl font-bold font-['Press_Start_2P'] text-primary leading-relaxed">
          {categoryName}
        </h1>
      </div>

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
              <CardTitle className="mt-2 font-['Press_Start_2P'] text-base leading-relaxed">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3 font-['VT323'] text-lg">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.slug}`} className="w-full">
                <Button variant="outline" className="w-full rounded-none font-['VT323'] text-lg">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground font-['VT323'] text-xl">
            No posts found in this category.
          </p>
          <Link href="/blog">
            <Button variant="outline" className="mt-4 rounded-none font-['VT323'] text-lg">
              View All Posts
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}