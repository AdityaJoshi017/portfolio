'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, FolderGit2, ArrowLeft, Calendar } from 'lucide-react';
import { projects } from '@/app/data/projects';
import { ThemeToggle } from '@/components/theme-toggle';
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, duration: 0.6 }
  }
};

const item = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  show: { y: 0, opacity: 1, scale: 1 }
};

const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
export default function Projects() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-foreground hover:text-primary transition-colors group text-sm sm:text-base"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back</span>
            </button>
<div className="scale-90 sm:scale-100">
  <ThemeToggle />
</div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-4 sm:py-6">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4 leading-tight"
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-3 sm:mb-5 px-1"
          >
            Explore my portfolio of innovative projects built with modern technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              <span>{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
              <span>Multiple Technologies</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative h-full flex flex-col group cursor-pointer"
              onClick={() => router.push(`/projects/${project.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => e.key === 'Enter' && router.push(`/projects/${project.id}`)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/15 dark:to-purple-500/15 rounded-xl blur-sm group-hover:blur-md transition-all duration-200 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-200 flex-1 flex flex-col">
                <div className="h-36 bg-gradient-to-br from-blue-500/90 via-purple-600/90 to-indigo-700/90 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-4 text-white z-10 w-full">
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="inline-block"
  >
    <FolderGit2 className="w-10 h-10 mx-auto mb-2 drop-shadow-lg" />
  </motion.div>

  <h3 className="text-lg font-bold mb-1 line-clamp-1">
    {project.title}
  </h3>

  <div className="flex items-center justify-center gap-1 text-xs opacity-90">
    <Calendar className="w-3 h-3" />
    <span>
      {new Date(project.date).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      })}
    </span>
  </div>
</div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
                
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3 max-h-20 overflow-hidden">
                    {project.technologies.slice(0, 3).map((tech: string, i: number) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-[10px] font-medium border border-border whitespace-nowrap"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-[10px] font-medium border border-border">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-3 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {project.githubUrl && (
                          <motion.a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-muted-foreground hover:text-foreground rounded-md transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`View ${project.title} on GitHub`}
                            title="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-muted-foreground hover:text-foreground rounded-md transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`View ${project.title} live demo`}
                            title="View Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                      <motion.button 
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/projects/${project.id}`);
                        }}
                        className="text-xs font-medium text-foreground hover:text-primary flex items-center gap-1 transition-colors"
                        whileHover={{ x: 2 }}
                        aria-label={`View ${project.title} details`}
                      >
                        View Details <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        {/* Stats Section
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Projects', value: projects.length, icon: '🚀' },
            { label: 'Technologies', value: '15+', icon: '⚡' },
            { label: 'Live Demos', value: '10+', icon: '🌐' },
            { label: 'Years', value: '2+', icon: '📅' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.article>
          ))}
        </motion.div> */}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 p-1 bg-card/50 backdrop-blur-sm rounded-full border border-border">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg border border-transparent"
            >
              <span className="text-lg">← Back to Home</span>
            </Link>
            <div className="w-px h-8 bg-border" />
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 text-foreground hover:text-primary font-medium rounded-full transition-all duration-300 hover:bg-accent"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
        </div>
      </main>
    </div>
  );
}

