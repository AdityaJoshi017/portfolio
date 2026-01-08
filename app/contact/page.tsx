'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { useEffect } from 'react';

export default function ContactPage() {
  const router = useRouter();
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AdityaJoshi017',
      icon: <Github className="h-5 w-5" />,
      color: 'hover:bg-gray-900',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/joshiaditya017/',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'hover:bg-gray-900',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://x.com/AdityaJoshi017',
    //   icon: <Twitter className="h-5 w-5" />,
    //   color: 'hover:bg-black',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://instagram.com/adityajoshi_17',
    //   icon: <Instagram className="h-5 w-5" />,
    //   color: 'hover:bg-pink-600',
    // },
    {
      name: 'Email',
      url: 'mailto:joshiaditya.ambrish@gmail.com',
      icon: <Mail className="h-5 w-5" />,
      color: 'hover:bg-gray-900',
    },
  ];

  const handleBack = () => {
    // Use window.history to check if we can go back
    if (window.history.length > 1) {
      router.back();
    } else {
      // If no history, fall back to home
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent transition-colors"
              aria-label="Go back to previous page"
            >
              <svg
                className="h-4 w-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="hidden sm:inline">Back to Previous</span>
              <span className="sm:hidden">Back</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Get in Touch</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Feel free to reach out to me through any of these platforms. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
              <div className="p-6 sm:p-8">
                <div className="grid gap-4 sm:gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-4 rounded-lg transition-all duration-200 border border-border hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10 ${social.color}`}
                    >
                      <div className="flex-shrink-0 p-3 rounded-lg bg-muted text-muted-foreground group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors">
                        {social.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-medium text-foreground group-hover:text-blue-500 transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-sm text-gray-400 dark:text-muted-foreground truncate">
                          {social.url.replace(/^https?:\/\//, '').split('/')[0]}
                        </p>
                      </div>
                      <div className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
