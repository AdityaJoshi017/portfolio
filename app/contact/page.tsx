'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary mb-8"
        >
          <svg
            className="mr-2 h-4 w-4"
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
          Back to home
        </Link>

        <div className="bg-card rounded-lg shadow-md p-6 sm:p-8 border border-border">
          <h1 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h1>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out to me through any of these platforms:
          </p>

          <div className="space-y-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-lg transition-colors border border-border hover:bg-accent hover:text-accent-foreground"
              >
                <div className="p-2 rounded-full bg-muted text-muted-foreground">
                  {social.icon}
                </div>
                <span className="font-medium text-foreground">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
