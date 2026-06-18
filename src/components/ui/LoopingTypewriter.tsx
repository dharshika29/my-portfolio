"use client";
import { useState, useEffect } from "react";

interface LoopingTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}

export default function LoopingTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 1500,
}: LoopingTypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const type = () => {
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(word.slice(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
          return;
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(type, currentText === word && !isDeleting ? pauseDelay : speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

  return (
    <span className="inline-block relative">
      {currentText || '\u200B'}
      <span className="animate-pulse border-r-2 border-primary ml-1 h-full absolute right-[-8px] top-0 bottom-0" />
    </span>
  );
}
