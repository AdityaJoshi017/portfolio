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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
          <div className="flex justify-end space-x-2">
            <button 
              onClick={() => router.back()} 
              className="inline-flex items-center text-foreground hover:text-primary transition-colors group text-xs sm:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:-translate-x-0.5 sm:group-hover:-translate-x-1" />
              <span className="font-medium text-xs sm:text-base">Back</span>
            </button>
            <ThemeToggle className="scale-80 sm:scale-100" />
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-16 text-center px-3 sm:px-6 w-full mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-2 sm:mb-4 md:mb-6 leading-tight px-1">
            Hi, I'm{' '}
            <span className="text-blue-600 block sm:inline-block mt-1 sm:mt-0">
              <TypingEffect 
                texts={[
                  'Aditya Joshi',
                  'AI/ML Developer',
                  'Full Stack Dev',
                  'Tech Enthusiast'
                ]} 
                className="font-mono text-blue-600 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              />
            </span>
          </h1>
          <div className="min-h-[20px] sm:min-h-[28px] mb-3 sm:mb-4">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/70 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed px-1">
              Crafting digital experiences with code and creativity
            </p>
          </div>
          <div className="min-h-[40px] xs:min-h-[48px] sm:min-h-[56px] mb-6 sm:mb-8 w-full px-2">
            <div className="text-xs xs:text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              <TypingEffect
                texts={[
                  'AI/ML Developer | Java & Python',
                  'Full Stack Developer',
                  'Web & Mobile Specialist',
                  'Passionate about technology',
                  'Turning ideas into reality'
                ]}
                className="w-full"
                textClassName="inline-block text-center w-full"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-xs xs:max-w-sm sm:max-w-md mx-auto px-1">
            <Link 
              href="/projects" 
              className="px-4 py-2.5 sm:px-5 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto text-center font-medium"
            >
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2.5 sm:px-5 sm:py-2.5 border border-gray-300 dark:border-gray-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base w-full sm:w-auto text-center font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 text-center px-1">
            About Me
          </h1>
          <div className="max-w-2xl mx-auto px-2">
            <p className="text-sm xs:text-base sm:text-lg text-foreground/70 leading-relaxed text-center">
              I'm a passionate developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create
              efficient, scalable, and user-friendly solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 sm:py-12 md:py-16 overflow-hidden bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 px-2">
            My Skills
          </h2>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 px-1">
            {[
              { name: 'Java', level: 'Advanced' },
              { name: 'Python', level: 'Advanced' },
              { name: 'ML/AI', level: 'Intermediate' },
              { name: 'Frontend', level: 'Advanced' },
              { name: 'DBMS', level: 'Intermediate' },
              { name: 'DSA', level: 'Advanced' },
              { name: 'Next.js', level: 'Intermediate' },
              { name: 'React', level: 'Advanced' }
            ].map((skill) => (
              <div 
                key={skill.name} 
                className="group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="block text-sm xs:text-base font-medium text-gray-900 dark:text-white mb-1">
                  {skill.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
