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
      {/* Header - Mobile optimized */}
      <header className="bg-card border-b border-border">
        <div className="w-full max-w-full mx-auto px-3 py-2.5">
          <div className="flex justify-end items-center gap-2">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-foreground hover:text-primary transition-colors group text-sm min-h-[36px] px-2.5"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" />
              <span className="font-medium text-sm">Back</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile optimized */}
      <section className="py-6 text-center px-3 w-full max-w-full overflow-hidden">
        {/* Main heading with better mobile line breaks */}
        <h1 className="text-2xl font-bold text-blue-900 mb-4 leading-snug px-1">
          Hi, I&apos;m{' '}
          <span className="text-blue-600 block">
            <TypingEffect
              texts={[
                'Aditya Joshi',
                'AI/ML Developer',
                'Full Stack Dev',
                'Tech Enthusiast',
              ]}
              className="font-mono text-blue-600 text-2xl"
              typingSpeed={80}
              deletingSpeed={50}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-foreground/70 mb-4 mx-auto leading-relaxed max-w-[90%]">
          Crafting digital experiences with code and creativity
        </p>

        {/* Typing subtitle - Mobile safe */}
        <div className="min-h-[48px] mb-6 w-full overflow-hidden">
          <TypingEffect
            texts={[
              'AI/ML Developer',
              'Java & Python',
              'Full Stack Dev',
              'Web & Mobile',
              'Ideas into Reality',
            ]}
            className="w-full"
            textClassName="
              text-sm
              text-gray-600 dark:text-gray-300
              text-center
              break-words
              hyphens-auto
              leading-relaxed
              px-2
              mx-auto
              max-w-[95%]
            "
            typingSpeed={70}
            deletingSpeed={50}
            pauseTime={2000}
          />
        </div>

        {/* Buttons - Mobile optimized */}
        <div className="flex flex-col gap-3 w-full max-w-[280px] mx-auto px-2">
          <Link
            href="/projects"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm text-center font-medium"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm text-center font-medium"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section - Mobile optimized */}
      <section className="py-8 bg-card border-t border-border">
        <div className="w-full max-w-full mx-auto px-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4 text-center px-2">
            About Me
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed text-center mx-auto px-3 max-w-[90%]">
            I&apos;m a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create
            efficient, scalable, and user-friendly solutions.
          </p>
        </div>
      </section>

      {/* Skills Section - Mobile optimized */}
      <section className="py-8">
        <div className="w-full max-w-full mx-auto px-3">
          <h2 className="text-lg font-bold text-center mb-6 px-2">
            My Skills
          </h2>
          <div className="grid grid-cols-2 gap-2.5 px-1">
            {['Java', 'Python', 'ML/AI', 'Frontend', 'DBMS', 'DSA', 'Next.js', 'React'].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-3 bg-card text-card-foreground rounded-lg border border-border text-center flex items-center justify-center min-h-[55px]"
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
