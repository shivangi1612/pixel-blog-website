import Link from 'next/link';
import { Monitor, Palette, DollarSign } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-primary/30 py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="font-bold text-xl text-primary font-['Press_Start_2P'] text-shadow tracking-wider">
              Pixel Wisdom
            </Link>
            <p className="mt-2 text-muted-foreground text-lg font-['VT323']">
              Exploring tech, art, and finance through a pixel-inspired lens.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 font-['Press_Start_2P'] text-primary text-sm">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/tech" className="flex items-center hover:text-primary text-lg font-['VT323']">
                  <Monitor className="h-4 w-4 mr-2 text-green-500" />
                  <span>Tech</span>
                </Link>
              </li>
              <li>
                <Link href="/category/art" className="flex items-center hover:text-primary text-lg font-['VT323']">
                  <Palette className="h-4 w-4 mr-2 text-purple-500" />
                  <span>Art</span>
                </Link>
              </li>
              <li>
                <Link href="/category/finance" className="flex items-center hover:text-primary text-lg font-['VT323']">
                  <DollarSign className="h-4 w-4 mr-2 text-yellow-500" />
                  <span>Finance</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 font-['Press_Start_2P'] text-primary text-sm">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-primary text-lg font-['VT323']">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary text-lg font-['VT323']">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary text-lg font-['VT323']">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary text-lg font-['VT323']">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 font-['Press_Start_2P'] text-primary text-sm">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://x.com/Shivang96741578?t=wKrF-E1SP3Bs70HJOfjGiw&s=08" className="hover:text-primary text-lg font-['VT323']">
                  X
                </Link>
              </li>
              <li>
                <Link href="https://github.com/shivangi1612" className="hover:text-primary text-lg font-['VT323']">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/shivangisingh1612004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-primary text-lg font-['VT323']">
                  Linkedln
                </Link>
              </li>
              <li>
                <Link href="mailto:shivangi.singh161204@gmail.com" className="hover:text-primary text-lg font-['VT323']">
                  hello@pixelwisdom.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/30 mt-8 pt-8 text-center text-muted-foreground">
          <p className="text-lg font-['VT323']">© {currentYear} Pixel Wisdom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}