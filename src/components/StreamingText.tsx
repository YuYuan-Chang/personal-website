'use client';

import { useState, useEffect } from 'react';

interface StreamingTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  prompt?: string;
  command?: string;
}

export default function StreamingText({
  text,
  speed = 50,
  className = '',
  onComplete,
  prompt = '',
  command = ''
}: StreamingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      if (onComplete) {
        onComplete();
      }
      setShowCursor(false);
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <div className={`font-mono ${className}`}>
      {prompt && (
        <span className="text-gray-400">{prompt}</span>
      )}
      {command && (
        <span className="text-green-400"> {command}</span>
      )}
      {(prompt || command) && <br />}
      <span className="text-left whitespace-pre-wrap">{displayedText}</span>
      {showCursor && currentIndex < text.length && (
        <span className="animate-pulse text-green-400">_</span>
      )}
    </div>
  );
}