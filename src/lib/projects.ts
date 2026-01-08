import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'efootball-stats',
    title: 'eFootball Stats',
    description: 'Comprehensive statistics and analytics platform for eFootball players and teams.',
    shortDescription: 'Advanced analytics for eFootball enthusiasts',
    coverImage: '/projects/efootball-stats/cover.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/efootball-stats',
    liveUrl: 'https://efootball-stats-six.vercel.app/',
    // lanUrl: "http://10.120.28.44:3001",
    featured: true,
    date: '2023-11-15',
    content: {
      overview: 'eFootball Stats is a comprehensive platform that provides detailed statistics, match analysis, and player performance metrics for the eFootball gaming community.',
      features: [
        'Real-time match statistics',
        'Player performance analytics',
        'Team comparison tools',
        'Interactive dashboards',
        'Historical data analysis'
      ],
      technologies: [
        'Next.js 14 for server-side rendering',
        'TypeScript for type safety',
        'Tailwind CSS for styling',
        'MongoDB for data storage',
        'NextAuth for authentication',
        'Chart.js for data visualization'
      ],
      challenges: [
        {
          challenge: 'Handling real-time data synchronization',
          solution: 'Implemented WebSockets for real-time updates'
        },
        {
          challenge: 'Optimizing for mobile performance',
          solution: 'Implemented code splitting and lazy loading'
        },
        {
          challenge: 'Managing large datasets efficiently',
          solution: 'Used pagination and server-side data fetching'
        }
      ],
      solutions: [
        'Implemented WebSockets for real-time updates',
        'Used server-side rendering with incremental static regeneration',
        'Optimized database queries with indexing'
      ]
    },
    screenshots: [
      '/projects/efootball-stats/screenshot1.jpg',
      '/projects/efootball-stats/screenshot2.jpg',
      '/projects/efootball-stats/screenshot3.jpg'
    ]
  },
  // Add more projects here following the same structure
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.id);
}
