import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text1: string;
  text2: string;
}

export default function TypewriterText({ text1, text2 }: TypewriterTextProps) {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [isTypingText1, setIsTypingText1] = useState(true);
  const [showCursor1, setShowCursor1] = useState(true);
  const [showUnderline, setShowUnderline] = useState(false);

  useEffect(() => {
    if (isTypingText1) {
      if (displayedText1.length < text1.length) {
        const timeout = setTimeout(() => {
          setDisplayedText1(text1.slice(0, displayedText1.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTypingText1(false);
          setShowCursor1(false);
        }, 300);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText2.length < text2.length) {
        const timeout = setTimeout(() => {
          setDisplayedText2(text2.slice(0, displayedText2.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else if (!showUnderline) {
        setShowUnderline(true);
      }
    }
  }, [displayedText1, displayedText2, isTypingText1, text1, text2, showUnderline]);

  return (
    <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-4 tracking-tight leading-tight min-h-[120px] md:min-h-[160px]">
      <span>
        {displayedText1}
        {showCursor1 && <span className="animate-pulse text-primary">|</span>}
      </span>
      <br />
      <span className="text-primary relative inline-block">
        {displayedText2}
        {!showCursor1 && displayedText2.length < text2.length && (
          <span className="animate-pulse text-foreground">|</span>
        )}
        {!showCursor1 && displayedText2.length === text2.length && (
          <span className="animate-pulse text-foreground font-light">|</span>
        )}
        
        {/* Animated Underline that appears after typing finishes */}
        {showUnderline && (
          <motion.svg 
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-full h-3 -bottom-1 left-0 text-primary" 
            viewBox="0 0 100 10" 
            preserveAspectRatio="none"
          >
            <path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
          </motion.svg>
        )}
      </span>
    </h1>
  );
}
