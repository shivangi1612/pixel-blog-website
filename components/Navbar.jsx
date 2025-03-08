"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Monitor, Palette, DollarSign, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-primary/30 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl text-primary font-['Press_Start_2P'] text-shadow tracking-wider">
            Pixel Wisdom
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/category/tech" className="flex items-center px-3 py-2 rounded-none hover:bg-secondary text-lg font-['VT323']">
              <Monitor className="h-4 w-4 mr-1 text-green-500" />
              <span>Tech</span>
            </Link>
            <Link href="/category/art" className="flex items-center px-3 py-2 rounded-none hover:bg-secondary text-lg font-['VT323']">
              <Palette className="h-4 w-4 mr-1 text-purple-500" />
              <span>Art</span>
            </Link>
            <Link href="/category/finance" className="flex items-center px-3 py-2 rounded-none hover:bg-secondary text-lg font-['VT323']">
              <DollarSign className="h-4 w-4 mr-1 text-yellow-500" />
              <span>Finance</span>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="rounded-none border-2 border-primary hover:bg-primary/20 font-['VT323'] text-lg">Blog</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="rounded-none border-2 border-primary hover:bg-primary/20 font-['VT323'] text-lg">About</Button>
            </Link>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/30">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/category/tech" 
                className="flex items-center px-3 py-2 hover:bg-secondary font-['VT323'] text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Monitor className="h-4 w-4 mr-2 text-green-500" />
                <span>Tech</span>
              </Link>
              <Link 
                href="/category/art" 
                className="flex items-center px-3 py-2 hover:bg-secondary font-['VT323'] text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Palette className="h-4 w-4 mr-2 text-purple-500" />
                <span>Art</span>
              </Link>
              <Link 
                href="/category/finance" 
                className="flex items-center px-3 py-2 hover:bg-secondary font-['VT323'] text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <DollarSign className="h-4 w-4 mr-2 text-yellow-500" />
                <span>Finance</span>
              </Link>
              <Link 
                href="/blog" 
                className="px-3 py-2 hover:bg-secondary font-['VT323'] text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="px-3 py-2 hover:bg-secondary font-['VT323'] text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}