import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RetroEffects from '@/components/RetroEffects';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pixel Wisdom - Tech, Art & Finance Blog',
  description:
    'A retro-styled blog about technology, art, and finance with a pixel aesthetic',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
          <RetroEffects />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
