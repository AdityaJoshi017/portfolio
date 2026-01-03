// import Link from 'next/link';
// import Image from 'next/image';
// import { ThemeToggle } from '@/components/theme-toggle';
// // import { TypingEffect } from '@/components/TypingEffect';
// import {TypingEffect} from './components/TypingEffect';
// import { useRouter } from 'next/navigation';
// import { ArrowLeft } from 'lucide-react';

// export default function Home() {
//   const router = useRouter();
//    return (
//     <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
//       {/* Header */}
//       <header className="bg-card border-b border-border">
//         <div className="w-full max-w-full md:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
//           <div className="flex justify-end items-center gap-2 sm:gap-3">
//             <button
//               onClick={() => router.back()}
//               className="inline-flex items-center text-foreground hover:text-primary transition-colors group text-sm sm:text-base min-h-[36px] px-2 sm:px-3"
//             >
//               <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:-translate-x-0.5" />
//               <span className="font-medium">Back</span>
//             </button>

//             {/* ❌ scale-75 REMOVED */}
//             <ThemeToggle />
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-6 sm:py-8 md:py-16 text-center px-3 sm:px-4 md:px-6 w-full max-w-full overflow-hidden">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-4 leading-tight">
//           Hi, I&apos;m{' '}
//           <span className="text-blue-600 block sm:inline">
//             <TypingEffect
//               texts={[
//                 'Aditya Joshi',
//                 'AI/ML Developer',
//                 'Full Stack Dev',
//                 'Tech Enthusiast',
//               ]}
//               className="font-mono text-blue-600 text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
//             />
//           </span>
//         </h1>

//         <p className="text-sm sm:text-lg md:text-xl text-foreground/70 mb-6 max-w-2xl mx-auto leading-relaxed">
//           Crafting digital experiences with code and creativity
//         </p>

//         {/* Typing subtitle — mobile safe */}
//         <div className="min-h-[56px] mb-6 w-full max-w-full overflow-hidden">
//           <TypingEffect
//             texts={[
//               'AI/ML Developer',
//               'Java & Python',
//               'Full Stack Developer',
//               'Web & Mobile Specialist',
//               'Turning ideas into reality',
//             ]}
//             className="w-full max-w-full px-2 sm:px-6"
//             textClassName="
//               text-xs sm:text-base
//               text-gray-500 dark:text-gray-400
//               text-center
//               break-words
//               whitespace-normal
//               w-full
//               max-w-full
//             "
//           />
//         </div>

//         {/* Buttons — NEVER overflow */}
//         <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-full sm:max-w-md mx-auto px-4 sm:px-0">
//           <Link
//             href="/projects"
//             className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base text-center"
//           >
//             View My Work
//           </Link>

//           <Link
//             href="/contact"
//             className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm sm:text-base text-center"
//           >
//             Contact Me
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-10 sm:py-12 md:py-16 bg-card border-t border-border">
//         <div className="w-full max-w-full md:max-w-4xl mx-auto px-4 sm:px-5 md:px-6">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
//             About Me
//           </h2>
//           <p className="text-sm sm:text-base text-foreground/70 leading-relaxed text-center max-w-2xl mx-auto">
//             I&apos;m a passionate developer with expertise in building modern web applications.
//             With a strong foundation in both frontend and backend technologies, I create
//             efficient, scalable, and user-friendly solutions.
//           </p>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-8 sm:py-12 md:py-16">
//         <div className="w-full max-w-full md:max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
//             My Skills
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//             {['Java', 'Python', 'ML/AI', 'Frontend', 'DBMS', 'DSA', 'Next.js', 'React'].map(
//               (skill) => (
//                 <div
//                   key={skill}
//                   className="p-3 bg-card text-card-foreground rounded-lg border border-border text-center flex items-center justify-center min-h-[60px]"
//                 >
//                   <span className="text-sm font-medium">{skill}</span>
//                 </div>
//               )
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
import { TypingEffect } from './components/TypingEffect';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  
  const skills = [
    { name: 'Java', icon: '☕' },
    { name: 'Python', icon: '🐍' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'Frontend', icon: '⚡' },
    { name: 'DBMS', icon: '🗄️' },
    { name: 'DSA', icon: '⚙️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Git', icon: '📚' },
    { name: 'DevOps', icon: '🚀' }
  ];

  const projects = [
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing',
      tech: ['Next.js', 'OpenAI', 'TypeScript'],
      link: '/projects/ai-chat'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online shopping solution',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '/projects/ecommerce'
    },
    {
      title: 'ML Model Dashboard',
      description: 'Interactive dashboard for machine learning models',
      tech: ['Python', 'FastAPI', 'React'],
      link: '/projects/ml-dashboard'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">AJ</span>
              </div>
              <span className="font-semibold text-sm sm:text-base md:text-lg">Aditya Joshi</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={() => router.back()} 
                className="inline-flex items-center text-foreground hover:text-primary transition-colors group text-sm sm:text-base px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-accent"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium hidden sm:inline">Back</span>
              </button>
              <ThemeToggle className="scale-85 sm:scale-95 md:scale-100" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-20 lg:py-24 text-center px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Available for opportunities
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              <TypingEffect 
                texts={[
                  'Aditya Joshi',
                  'AI/ML Developer',
                  'Full Stack Engineer',
                  'Tech Enthusiast'
                ]} 
                className="font-bold inline-block"
                typingSpeed={80}
                deletingSpeed={50}
                pauseTime={1500}
              />
            </span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-4 sm:mb-6 leading-relaxed">
              Crafting digital experiences with clean code, modern tech, and a passion for innovation
            </p>
            
            <div className="min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
              <TypingEffect
                texts={[
                  'Building intelligent systems with AI/ML',
                  'Creating scalable web applications',
                  'Expert in Java & Python ecosystems',
                  'Full Stack Development specialist',
                  'Passionate about problem-solving',
                  'Turning complex ideas into reality'
                ]}
                className="w-full"
                textClassName="
                  text-sm sm:text-base md:text-lg
                  text-gray-600 dark:text-gray-300
                  text-center
                  font-medium
                  italic
                  px-2
                "
                typingSpeed={60}
                deletingSpeed={40}
                pauseTime={2000}
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-md mx-auto px-4">
          <Link 
            href="/projects" 
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-base sm:text-lg font-semibold w-full sm:w-auto text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            href="/contact" 
            className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-base sm:text-lg font-semibold w-full sm:w-auto text-center hover:-translate-y-0.5"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '50+', label: 'Projects' },
            { value: '100%', label: 'Satisfaction' },
            { value: '∞', label: 'Learning' }
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-card rounded-xl border border-border text-center hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-xs sm:text-sm text-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">About </span>
              <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
              Passionate developer with a focus on creating efficient, scalable solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold">My Journey</h3>
                <p className="text-foreground/80 leading-relaxed">
                  With over 3 years of experience in software development, I've worked on diverse projects 
                  ranging from AI/ML solutions to full-stack web applications. I believe in writing clean, 
                  maintainable code and staying updated with the latest technologies.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold">Philosophy</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I approach every project with attention to detail, performance optimization, and user 
                  experience. My goal is to build solutions that not only work well but also provide 
                  exceptional value to users.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  {[
                    '🎯 Specialized in AI/ML & Full Stack Development',
                    '💻 Proficient in Java, Python, and JavaScript/TypeScript',
                    '🚀 Experience with modern frameworks and tools',
                    '📚 Constantly learning and adapting to new technologies',
                    '🤝 Strong believer in collaborative development'
                  ].map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span className="text-foreground/80">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">My </span>
              <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group p-4 sm:p-5 bg-card text-card-foreground rounded-xl border border-border text-center flex flex-col items-center justify-center hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm sm:text-base font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 sm:mt-12 text-center">
            <Link 
              href="/skills" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
            >
              View all skills & experience
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-12 sm:py-16 md:py-20 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">Featured </span>
              <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              A glimpse of some exciting projects I've worked on
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index}
                href={project.link}
                className="group block"
              >
                <div className="bg-background border border-border rounded-xl p-5 sm:p-6 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-lg">P{index + 1}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-sm sm:text-base mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-10 sm:mt-12 text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 sm:p-10 md:p-12 border border-border">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear about it!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </Link>
              <Link 
                href="/resume" 
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-base sm:text-lg font-semibold"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <span className="font-bold text-lg">Aditya Joshi</span>
              </div>
              <p className="text-foreground/60 text-sm mt-2">
                Building the future, one line of code at a time
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="https://github.com" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link 
                href="https://linkedin.com" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link 
                href="mailto:hello@example.com" 
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="sr-only">Email</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-foreground/50 text-sm">
              © {new Date().getFullYear()} Aditya Joshi. All rights reserved.
              <span className="mx-2">•</span>
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}