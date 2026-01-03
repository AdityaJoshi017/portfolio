import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
// import { TypingEffect } from '@/components/TypingEffect';
import {TypingEffect} from './components/TypingEffect';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
          <div className="flex justify-end space-x-2">
            <button 
              onClick={() => router.back()} 
              className="inline-flex items-center text-foreground hover:text-primary transition-colors group text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back</span>
            </button>
            <ThemeToggle className="scale-90 sm:scale-100" />
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-4 sm:py-8 md:py-16 text-center px-4 sm:px-6 max-w-full overflow-hidden">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
          Hi, I'm{' '}
          <span className="text-blue-600 relative block sm:inline">
            <TypingEffect 
              texts={[
                'Aditya Joshi',
                'AI/ML Developer',
                'Full Stack Dev',
                'Tech Enthusiast'
              ]} 
              className="font-mono text-blue-600 text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
            />
          </span>
        </h1>
        <div className="min-h-[24px] sm:min-h-[28px] mb-3 sm:mb-4">
          <p className="text-sm sm:text-lg md:text-xl text-foreground/70 mb-3 sm:mb-4 md:mb-4 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with code and creativity
          </p>
        </div>
        <div className="min-h-[48px] xs:min-h-[56px] sm:min-h-[72px] mb-6 sm:mb-8 w-full">
          <TypingEffect
            texts={[
              'AI/ML Developer | Java & Python',
              'Full Stack Developer',
              'Web & Mobile Specialist',
              'Passionate about technology',
              'Turning ideas into reality'
            ]}
            className="w-full px-4 sm:px-6"
            textClassName="text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
          <Link 
            href="/projects" 
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
          >
            View My Work
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 sm:px-5 sm:py-2.5 border border-gray-300 dark:border-gray-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 bg-gray-50"> */} 
      {/* change 0017 */}
      <section className="py-8 sm:py-12 md:py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-5 text-center px-2">About Me</h1>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed text-center max-w-2xl mx-auto px-2">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create
            efficient, scalable, and user-friendly solutions.
          </p>
        </div>
      </section>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed" />
      {/* Skills Section */}
      <section className="py-8 sm:py-12 md:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-10 px-2">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 px-2">
            {['Java', 'Python', 'ML/AI', 'Frontend', 'DBMS', 'DSA', 'Next.js', 'React'].map((skill) => (
              <div key={skill} className="p-2 sm:p-3 bg-card text-card-foreground rounded-lg border border-border text-center flex items-center justify-center min-h-[60px] sm:min-h-[70px]">
                <span className="text-xs sm:text-sm md:text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
