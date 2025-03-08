import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Palette, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'About - Pixel Wisdom',
  description: 'Learn more about Pixel Wisdom blog',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 font-['Press_Start_2P'] text-primary leading-relaxed">About Pixel Wisdom</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="text-lg mb-4 font-['VT323'] text-xl">
            Pixel Wisdom is a blog dedicated to exploring the intersections of technology, art, and finance through a unique pixel-inspired lens.
          </p>
          <p className="text-lg mb-4 font-['VT323'] text-xl">
            Founded in 2025, our mission is to provide insightful, accessible, and engaging content that helps our readers navigate these rapidly evolving fields.
          </p>
          <p className="text-lg font-['VT323'] text-xl">
            Whether you're a tech enthusiast, an aspiring artist, or someone looking to better understand the world of finance, Pixel Wisdom has something for you.
          </p>
        </div>
        
        <Card className="bg-muted/50 rounded-none border-2 border-primary/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4 font-['Press_Start_2P'] text-primary">Our Values</h2>
            <ul className="space-y-2 font-['VT323'] text-xl">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span>Accessibility: Making complex topics understandable to everyone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span>Creativity: Approaching subjects with fresh perspectives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span>Integrity: Providing honest, well-researched information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span>Community: Fostering discussion and connection</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 font-['Press_Start_2P'] text-primary leading-relaxed">Our Categories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-green-500/30 rounded-none border-2">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="h-5 w-5 text-green-500" />
              <h3 className="text-xl font-bold font-['Press_Start_2P'] text-green-500">Tech</h3>
            </div>
            <p className="font-['VT323'] text-xl">
              Exploring the latest in technology, from AI and programming to gadgets and digital trends. We break down complex tech concepts into digestible insights.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-purple-500/30 rounded-none border-2">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-5 w-5 text-purple-500" />
              <h3 className="text-xl font-bold font-['Press_Start_2P'] text-purple-500">Art</h3>
            </div>
            <p className="font-['VT323'] text-xl">
              Celebrating digital art, pixel art, and the creative process. We showcase artists, techniques, and the intersection of technology and artistic expression.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-yellow-500/30 rounded-none border-2">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="h-5 w-5 text-yellow-500" />
              <h3 className="text-xl font-bold font-['Press_Start_2P'] text-yellow-500">Finance</h3>
            </div>
            <p className="font-['VT323'] text-xl">
              Demystifying personal finance, investments, and economic trends. We provide practical advice and insights to help you make informed financial decisions.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-3xl font-bold mb-6 font-['Press_Start_2P'] text-primary leading-relaxed">Meet the Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="rounded-none border-2 border-primary/50">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 font-['Press_Start_2P']">Alex Chen</h3>
            <p className="text-muted-foreground mb-4 font-['VT323'] text-lg">Founder & Tech Editor</p>
            <p className="font-['VT323'] text-xl">
              With a background in computer science and 10+ years in the tech industry, Alex brings deep expertise and a passion for making technology accessible to all.
            </p>
          </CardContent>
        </Card>
        
        <Card className="rounded-none border-2 border-primary/50">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 font-['Press_Start_2P']">Maya Rodriguez</h3>
            <p className="text-muted-foreground mb-4 font-['VT323'] text-lg">Art Director</p>
            <p className="font-['VT323'] text-xl">
              A digital artist with a focus on pixel art, Maya has worked on several indie games and brings her creative vision to Pixel Wisdom's art coverage.
            </p>
          </CardContent>
        </Card>
        
        <Card className="rounded-none border-2 border-primary/50">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-2 font-['Press_Start_2P']">Jordan Taylor</h3>
            <p className="text-muted-foreground mb-4 font-['VT323'] text-lg">Finance Writer</p>
            <p className="font-['VT323'] text-xl">
              A certified financial planner with a knack for explaining complex financial concepts in simple terms, Jordan leads our finance section.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}