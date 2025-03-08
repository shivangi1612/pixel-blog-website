"use client";

import { useEffect, useState } from 'react';

export default function RetroEffects() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      <div className="scanlines"></div>
      <div className="crt-effect"></div>
      <style jsx global>{`
        body {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='%2314783c' /%3E%3Crect x='0' y='0' width='8' height='8' fill='%2314783c' /%3E%3Crect x='8' y='8' width='8' height='8' fill='%2314783c' /%3E%3C/svg%3E") 8 8, auto;
        }
      `}</style>
    </>
  );
}