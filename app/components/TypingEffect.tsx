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

//   // Calculate the maximum width needed for the container
//   const maxTextLength = Math.max(...texts.map(text => text.length));
//   const averageCharWidth = 8; // Approximate width of a character in pixels
//   const containerWidth = `${maxTextLength * averageCharWidth}px`;

//   return (
//     <span className={`inline-block min-w-[${containerWidth}] text-left ${className}`}>
//       <span className="inline-block">
//         {displayText}
//         <span className="animate-pulse">|</span>
//       </span>
//     </span>
//   );
// }
// 'use client'
// import { useEffect, useState } from 'react'

// export function TypingEffect({
//   texts,
//   className = '',
// }: {
//   texts: string[]
//   className?: string
// }) {
//   const [displayText, setDisplayText] = useState('')
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [charIndex, setCharIndex] = useState(0)
//   const [isDeleting, setIsDeleting] = useState(false)

//   useEffect(() => {
//     const currentText = texts[currentIndex]

//     const timeout = setTimeout(
//       () => {
//         if (!isDeleting) {
//           setDisplayText(currentText.slice(0, charIndex + 1))
//           setCharIndex((c) => c + 1)

//           if (charIndex === currentText.length) {
//             setTimeout(() => setIsDeleting(true), 1000)
//           }
//         } else {
//           setDisplayText(currentText.slice(0, charIndex - 1))
//           setCharIndex((c) => c - 1)

//           if (charIndex === 0) {
//             setIsDeleting(false)
//             setCurrentIndex((i) => (i + 1) % texts.length)
//           }
//         }
//       },
//       isDeleting ? 60 : 120
//     )

//     return () => clearTimeout(timeout)
//   }, [charIndex, currentIndex, isDeleting, texts])

//   // 🔒 FIXED WIDTH (in ch units – perfect for text)
//   const maxChars = Math.max(...texts.map((t) => t.length))

//   return (
//     <span
//       className={`inline-block text-left ${className}`}
//       style={{ minWidth: `${maxChars}ch` }}
//     >
//       {displayText}
//       <span className="animate-pulse">|</span>
//     </span>
//   )
// }
  // 'use client'

  // import { useEffect, useState } from 'react'

  // type TypingEffectProps = {
  //   texts: string[]
  //   className?: string
  //   typingSpeed?: number
  //   deletingSpeed?: number
  //   pauseDelay?: number
  // }

  // export function TypingEffect({
  //   texts,
  //   className = '',
  //   typingSpeed = 120,
  //   deletingSpeed = 60,
  //   pauseDelay = 1000,
  // }: TypingEffectProps) {
  //   const [displayText, setDisplayText] = useState('')
  //   const [currentIndex, setCurrentIndex] = useState(0)
  //   const [charIndex, setCharIndex] = useState(0)
  //   const [isDeleting, setIsDeleting] = useState(false)

  //   useEffect(() => {
  //     const currentText = texts[currentIndex]

  //     const timeout = setTimeout(() => {
  //       if (!isDeleting) {
  //         setDisplayText(currentText.slice(0, charIndex + 1))
  //         setCharIndex((c) => c + 1)

  //         if (charIndex === currentText.length) {
  //           setTimeout(() => setIsDeleting(true), pauseDelay)
  //         }
  //       } else {
  //         setDisplayText(currentText.slice(0, charIndex - 1))
  //         setCharIndex((c) => c - 1)

  //         if (charIndex === 0) {
  //           setIsDeleting(false)
  //           setCurrentIndex((i) => (i + 1) % texts.length)
  //         }
  //       }
  //     }, isDeleting ? deletingSpeed : typingSpeed)

  //     return () => clearTimeout(timeout)
  //   }, [charIndex, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDelay])

  //   const maxChars = Math.max(...texts.map((t) => t.length))

  //   return (
  //     <span
  //       className={`inline-block text-left font-mono ${className}`}
  //       style={{ minWidth: `${maxChars}ch` }}
  //     >
  //       {displayText}
  //       <span className="animate-pulse">|</span>
  //     </span>
  //   )
  // }
'use client'

import { useEffect, useState } from 'react'

type TypingEffectProps = {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDelay?: number
}

export function TypingEffect({
  texts,
  className = '',
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

  const maxChars = Math.max(...texts.map((t) => t.length))

  return (
    <span
      className={`inline-block text-left font-mono ${className}`}
      style={{ minWidth: `${maxChars}ch` }}
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}