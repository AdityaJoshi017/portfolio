import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
// import { TypingEffect } from '@/components/TypingEffect';
import {TypingEffect} from './components/TypingEffect';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
          Hi, I'm{' '}
          <span className="text-blue-600 relative">
            <TypingEffect 
              texts={[
                'Aditya Joshi',
                'AI/ML Developer',
                'Full Stack Dev',
                'Tech Enthusiast'
              ]} 
              className="font-mono text-blue-600"
            />
          </span>
        </h1>
        <p className="text-xl text-foreground/70 mb-4 max-w-2xl mx-auto">
          Crafting digital experiences with code and creativity
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          <TypingEffect
            texts={[
              'AI/ML Developer | Java & Python Enthusiast | Frontend Developer',
              'Intern at ARInspects | Building intelligent solutions',
              'Passionate about technology and innovation',
              'Turning ideas into reality with code'
            ]} 
            className="font-mono text-gray-500"
          />
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 border-2 border-gray-300 text-blue-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 bg-gray-50"> */} 
      {/* change 0017 */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">About Me</h2>
          <p className="text-lg text-foreground/70 leading-relaxed text-center max-w-2xl mx-auto">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create
            efficient, scalable, and user-friendly solutions.
          </p>
        </div>
      </section>
      <div className="h-px bg-border max-w-5xl mx-auto" />
      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Java', 'Python', 'Machine Learning', 'AI', 'Frontend Development', 'DBMS', 'Data Structures', 'Algorithms'].map((skill) => (
              <div key={skill} className="p-4 bg-card text-card-foreground rounded-lg border border-border text-center">
              {/* <div key={skill} className="p-4 bg-white rounded-lg shadow-md text-center">  change 0017*/}
                <span className="text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
