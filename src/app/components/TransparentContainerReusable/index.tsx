'use client';
import { ReactNode } from 'react';

interface TransparentContainerProps {
  children: ReactNode;
  className?: string;
  opacity?: number;
}

export default function TransparentContainer({ 
  children, 
  className = '',
  opacity = 50
}: TransparentContainerProps) {
  
  const safeOpacity = Math.min(100, Math.max(0, opacity));

  return (
    <div 
      className={`relative bg-black/50 border border-white/30 rounded-lg p-60 shadow-[0_0_40px_rgba(0,0,255,0.3)] hover:opacity-50 transition-all duration-300 ${className}`}
      style={{ opacity: safeOpacity / 100 }}
    >
      {children}
    </div>
  );
}
