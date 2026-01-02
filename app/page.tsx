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
    <div className="min-h-screen flex flex-col">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-end p-3 sm:p-4">
            <button 
              onClick={() => router.back()} 
              className="inline-flex items-center text-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back</span>
            </button>
            <ThemeToggle className="scale-90 sm:scale-100" />
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-20 text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-3 sm:mb-6">
          Hi, I'm{' '}
          <span className="text-blue-600 relative">
            <TypingEffect 
              texts={[
                'Aditya Joshi',
                'AI/ML Developer',
                'Full Stack Dev',
                'Tech Enthusiast'
              ]} 
              className="font-mono text-blue-600 whitespace-nowrap"
            />
          </span>
        </h1>
        <div className="min-h-[20px] sm:min-h-[28px] mb-2 sm:mb-4">
          <p className="text-lg sm:text-xl text-foreground/70 mb-3 sm:mb-4 max-w-2xl mx-auto leading-snug sm:leading-normal">
            Crafting digital experiences with code and creativity
          </p>
        </div>
        <div className="min-h-[40px] sm:min-h-[72px] mb-4 sm:mb-8">
          <p className="text-xs sm:text-base md:text-lg text-gray-500 max-w-[95%] sm:max-w-2xl mx-auto leading-snug sm:leading-normal">
            <TypingEffect
              texts={[
                'AI/ML Developer | Java & Python Enthusiast | Frontend Developer',
                // 'Intern at ARInspects | Building intelligent solutions',
                'Passionate about technology and innovation',
                'Turning ideas into reality with code'
              ]} 
              className="font-mono text-gray-500"
            />
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 w-full max-w-xs sm:max-w-md mx-auto">
          <Link 
            href="/projects" 
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
          >
            View My Work
          </Link>
          <Link 
            href="/contact" 
            className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 text-blue-700 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 bg-gray-50"> */} 
      {/* change 0017 */}
      <section className="py-12 sm:py-16 md:py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-4 sm:mb-6">About Me</h1>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed text-center max-w-2xl mx-auto">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create
            efficient, scalable, and user-friendly solutions.
          </p>
        </div>
      </section>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed" />
      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {['Java', 'Python', 'Machine Learning', 'AI', 'Frontend Development', 'DBMS', 'Data Structures', 'Algorithms'].map((skill) => (
              <div key={skill} className="p-3 sm:p-4 bg-card text-card-foreground rounded-lg border border-border text-center flex items-center justify-center min-h-[80px]">
                <span className="text-sm sm:text-base md:text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
