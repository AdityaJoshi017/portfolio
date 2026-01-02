'use client';

// import Link from 'next/link';
// import { ArrowRight, ExternalLink, Github, FolderGit2 } from 'lucide-react';
// import { projects } from '@/app/data/projects';
// import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, FolderGit2, Sparkles, Calendar, Users, Clock, Star } from 'lucide-react';
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
  return (
    <div className="min-h-screen bg-background">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl-blue-500 md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight"
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Explore my portfolio of innovative projects built with modern technologies. 
            Each project represents a unique challenge and learning experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Multiple Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Live Demos</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                <div 
                  className="h-56 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden cursor-pointer"
                  onClick={() => window.location.href = `/projects/${project.id}`}
                >
                  <div className="text-center p-6 text-white z-10">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="inline-block"
                    >
                      <FolderGit2 className="w-14 h-14 mx-auto mb-4 drop-shadow-lg" />
                    </motion.div>
                    <h3 
                      className="text-2xl font-bold mb-2 hover:underline transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/projects/${project.id}`;
                      }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech: string, i: number) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium border border-border"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium border border-border">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <motion.a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-muted text-muted-foreground hover:bg-accent rounded-lg transition-all duration-200 hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-muted text-muted-foreground hover:bg-accent rounded-lg transition-all duration-200 hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                    <motion.button 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/projects/${project.id}`;
                      }}
                      className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 hover:shadow-lg hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats Section */}
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
            </motion.div>
          ))}
        </motion.div>

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
    </div>
  );
}

