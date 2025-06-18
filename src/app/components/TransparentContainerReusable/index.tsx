
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
      className={`relative bg-black/50 backdrop-blur-sm border border-white/30 rounded-lg p-6 flex justify-center shadow-lg transition-all duration-300 w-full mt-12 ${className}`}
      // style={{ opacity: safeOpacity / 100 }} this comment is hiding the content behind 50% black opacity instead of being in the background.
    >
      {children}
    </div>
  );
}
