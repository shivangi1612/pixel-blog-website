import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Calendar } from 'lucide-react';

export default function FeaturedPost({ post }) {
  return (
    <div className="border-4 border-primary rounded-none overflow-hidden bg-card hover:border-primary/80 transition-colors pixel-borders">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <Badge
              variant="outline"
              className={`
              mb-4 text-base font-['VT323'] rounded-none
              ${
                post.category === 'tech'
                  ? 'border-green-500 text-green-500'
                  : ''
              }
              ${
                post.category === 'art'
                  ? 'border-purple-500 text-purple-500'
                  : ''
              }
              ${
                post.category === 'finance'
                  ? 'border-yellow-500 text-yellow-500'
                  : ''
              }
            `}
            >
              {post.category}
            </Badge>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-['Press_Start_2P'] text-primary leading-relaxed">
              {post.title}
            </h2>

            <div className="flex flex-wrap gap-4 text-muted-foreground mb-4 font-['VT323'] text-lg">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 font-['VT323'] text-xl">
              {post.excerpt}
            </p>

            <Link href={`/blog/${post.slug}`}>
              <Button className="rounded-none font-['VT323'] text-lg">
                Read Article
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
