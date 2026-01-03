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
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="w-full max-w-full md:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
          <div className="flex justify-end items-center gap-2 sm:gap-3">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-foreground hover:text-primary transition-colors group text-sm sm:text-base min-h-[36px] px-2 sm:px-3"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:-translate-x-0.5" />
              <span className="font-medium">Back</span>
            </button>

            {/* ❌ scale-75 REMOVED */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-16 text-center px-3 sm:px-4 md:px-6 w-full max-w-full overflow-hidden">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-4 leading-tight">
          Hi, I&apos;m{' '}
          <span className="text-blue-600 block sm:inline">
            <TypingEffect
              texts={[
                'Aditya Joshi',
                'AI/ML Developer',
                'Full Stack Dev',
                'Tech Enthusiast',
              ]}
              className="font-mono text-blue-600 text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
            />
          </span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-foreground/70 mb-6 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with code and creativity
        </p>

        {/* Typing subtitle — mobile safe */}
        <div className="min-h-[56px] mb-6 w-full max-w-full overflow-hidden">
          <TypingEffect
            texts={[
              'AI/ML Developer',
              'Java & Python',
              'Full Stack Developer',
              'Web & Mobile Specialist',
              'Turning ideas into reality',
            ]}
            className="w-full max-w-full px-2 sm:px-6"
            textClassName="
              text-xs sm:text-base
              text-gray-500 dark:text-gray-400
              text-center
              break-words
              whitespace-normal
              w-full
              max-w-full
            "
          />
        </div>

        {/* Buttons — NEVER overflow */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-full sm:max-w-md mx-auto px-4 sm:px-0">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base text-center"
          >
            View My Work
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base text-center"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-card border-t border-border">
        <div className="w-full max-w-full md:max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed text-center max-w-2xl mx-auto">
            I&apos;m a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create
            efficient, scalable, and user-friendly solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-full md:max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['Java', 'Python', 'ML/AI', 'Frontend', 'DBMS', 'DSA', 'Next.js', 'React'].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-3 bg-card text-card-foreground rounded-lg border border-border text-center flex items-center justify-center min-h-[60px]"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
