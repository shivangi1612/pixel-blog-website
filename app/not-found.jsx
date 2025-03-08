import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold mb-6 font-['Press_Start_2P'] text-primary">404</h1>
      <h2 className="text-2xl font-bold mb-8 font-['Press_Start_2P']">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto font-['VT323'] text-xl">
        The page you're looking for doesn't exist or has been moved to another URL.
      </p>
      <div className="flex justify-center">
        <div className="w-64 h-64 bg-muted/30 border-2 border-primary/50 flex items-center justify-center mb-8 pixel-art">
          <div className="text-6xl font-['Press_Start_2P'] text-primary animate-pulse">?</div>
        </div>
      </div>
      <Link href="/">
        <Button className="rounded-none font-['VT323'] text-lg">Return Home</Button>
      </Link>
    </div>
  );
}