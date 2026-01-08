// src/components/projects/ProjectView.tsx
'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code,
  Layers,
  Clock,
  Tag,
  AlertCircle,
  Maximize2,
  Minimize2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Project as ProjectType, ProjectContent } from '@/lib/types';

interface Project extends Omit<ProjectType, 'content'> {
  technologies: string[];
  features: string[];
  learnings?: string[];
  content: ProjectContent | string;
}

interface ProjectViewProps {
  project: Project;
}

export function ProjectView({ project }: ProjectViewProps) {
  const router = useRouter();
  const [isMaximized, setIsMaximized] = useState(false);

  // ✅ Hydration-safe date formatting
  const formattedDate = useMemo(() => {
    return new Date(project.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [project.date]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
          {isMaximized && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMaximized(false)}
              className="ml-auto"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
          )}
        </div>

        <article
          className={`bg-card rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-300 ${
            isMaximized ? 'fixed inset-0 m-0 rounded-none z-50' : 'relative'
          }`}
        >
          {/* Header */}
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-600 group">
            <div className="absolute inset-0 bg-black/20" />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all transform hover:scale-110"
              aria-label={isMaximized ? 'Minimize' : 'Maximize'}
            >
              {isMaximized ? (
                <Minimize2 className="w-5 h-5" />
              ) : (
                <Maximize2 className="w-5 h-5" />
              )}
            </button>
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center text-white z-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg text-white/90 max-w-2xl">{project.description}</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 lg:p-12">
            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-sm text-foreground/70">
                <Clock className="w-4 h-4 mr-2" />
                {formattedDate}
              </div>

              <div className="flex items-center text-sm text-foreground/70">
                <Tag className="w-4 h-4 mr-2" />
                {project.technologies.join(', ')}
              </div>
            </div>

            {/* Description / Content */}
            {typeof project.content === 'string' ? (
              <div
                suppressHydrationWarning
                className="prose dark:prose-invert max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            ) : (
              <div className="prose dark:prose-invert max-w-none mb-12">
                {project.content.overview}
              </div>
            )}

            {/* Features */}
            {project.features?.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2 text-primary" />
                  Key Features
                </h2>

                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Learnings */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {typeof project.content !== 'string' && project.content.challenges && project.content.challenges.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Challenges & Solutions
                  </h3>
                  <ul className="space-y-4">
                    {typeof project.content !== 'string' && project.content.challenges?.map((item, index) => (
                      <li key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">Challenge</h4>
                        <p className="text-foreground/70 dark:text-gray-300 mb-2">{item.challenge}</p>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 mt-3">Solution</h4>
                        <p className="text-foreground/70 dark:text-gray-300">{item.solution}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.learnings && project.learnings.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Key Learnings
                  </h3>
                  <ul className="space-y-2">
                    {project.learnings?.map((learning, i) => (
                      <li
                        key={i}
                        className="text-foreground/70 flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Technologies Used
              </h2>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}

              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
  