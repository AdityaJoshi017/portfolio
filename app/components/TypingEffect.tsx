// 'use client';

// import { useEffect, useState } from 'react';

// export function TypingEffect({ texts, className = '' }: { texts: string[]; className?: string }) {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   useEffect(() => {
//     const currentText = texts[currentIndex];
    
//     const type = () => {
//       if (!isDeleting) {
//         // Typing
//         setDisplayText(currentText.substring(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
        
//         if (charIndex === currentText.length - 1) {
//           // Pause at the end of the word
//           setTimeout(() => setIsDeleting(true), 1000);
//           return;
//         }
//       } else {
//         // Deleting
//         setDisplayText(currentText.substring(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
        
//         if (charIndex === 0) {
//           // Move to next word when done deleting
//           setIsDeleting(false);
//           setCurrentIndex((currentIndex + 1) % texts.length);
//           setTypingSpeed(150); // Reset typing speed for next word
//           return;
//         }
        
//         // Speed up deletion
//         setTypingSpeed(prev => Math.max(prev - 10, 30));
//       }
//     };

//     const timer = setTimeout(type, isDeleting ? 60 : typingSpeed);
//     return () => clearTimeout(timer);
//   }, [charIndex, currentIndex, isDeleting, texts, typingSpeed]);

'use client'

import { useEffect, useState } from 'react'

interface TypingEffectProps {
  texts: string[]
  className?: string
  textClassName?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDelay?: number
}

export function TypingEffect({
  texts,
  className = '',
  textClassName = '',
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseDelay = 1000,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]

    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDelay)
    } else if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)

        if (charIndex + 1 === currentText.length) {
          setIsPaused(true)
        }
      }, typingSpeed)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)

        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setCurrentIndex((i) => (i + 1) % texts.length)
        }
      }, deletingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    currentIndex,
    isDeleting,
    isPaused,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
  ])

  return (
    <span className={`relative inline-block w-full overflow-hidden ${className}`}>
      <span
        className={`block w-full text-center overflow-hidden whitespace-normal break-words ${textClassName}`}
      >
        {/* Animated text (does NOT control layout width) */}
        <span className="inline-block max-w-full overflow-hidden align-middle">
          {displayText}
        </span>

        {/* Cursor with FIXED WIDTH — prevents overflow */}
        <span
          className="inline-block w-[1ch] text-left align-middle animate-pulse"
          aria-hidden
        >
          |
        </span>
      </span>
    </span>
  )
}