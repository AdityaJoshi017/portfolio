export interface ProjectMedia {
  type: 'image' | 'gif';
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  date: string;
  localPath?: string;
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  content?: string;
  features: string[];
  challenges: Array<{ challenge: string; solution: string }>;
  learnings: string[];
  logo?: string;
  tagline?: string;
  role?: string;
  timeline?: string;
  teamSize?: string;
  links?: Array<{ label: string; url: string }>;
  relatedProjects?: Array<{
    title: string;
    description: string;
    url: string;
    icon?: React.ReactNode;
  }>;
  media?: ProjectMedia[];
  summary?: string;
  socialLinks?: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
}

export const projects: Project[] = [
  // {
  //   id: "efootball-stats",
  //   title: "eFootball Stats",
  //   description: "Advanced analytics platform for eFootball with player statistics and match analysis",
  //   technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
  //   image: "/images/projects/efootball.jpg",
  //   date: "2023-12-15",
  //   githubUrl: "https://github.com/yourusername/efootball-stats",
  //   liveUrl: "http://localhost:3001/",
  //   content: `
  //     <h2>Project Overview</h2>
  //     <p>eFootball Stats is a comprehensive analytics platform designed for eFootball enthusiasts and competitive players. The application provides detailed statistics, match analysis, and performance metrics to help players improve their gameplay.</p>
  //   `,
  //   features: [
  //     "Real-time match statistics and analytics",
  //     "Player performance tracking and comparison",
  //     "Team composition analysis",
  //     "Match history and trends visualization",
  //     "AI-powered performance predictions"
  //   ],
  //   challenges: [
  //     "Handling large datasets efficiently",
  //     "Creating responsive visualizations",
  //     "Implementing real-time updates"
  //   ],
  //   learnings: [
  //     "Optimized data fetching with React Query",
  //     "Improved state management with Context API",
  //     "Enhanced UI/UX for complex data visualization"
  //   ]
  // },
  {
    id: 'project1',
    title: "Efootball stats",
    description: "An Efootball stats project that provides detailed analytics and visualizations for eFootball players and matches. The platform helps users track performance metrics, analyze match data, and gain insights to improve their gameplay.",
    technologies: ["JavaScript", "Node.js", "React",  "Next.js", "Tailwind CSS"],
    image: "/images/projects/efootball-stats/screenshot1.png",
    date: "2025-12-01",
    localPath: "/projects/project1",
    githubUrl: "https://github.com/AdityaJoshi017",
    liveUrl: "http://localhost:3001/",
    // lanUrl: "http://10.120.28.44:3000",

    //change 0017
    
    content: `
      <h2>Project Overview</h2>
      <p>Efootball Stats is a comprehensive analytics platform designed for eFootball enthusiasts and competitive players. The application provides detailed statistics, match analysis, and performance metrics to help players improve their gameplay.</p>
    `,
    features: [
      "Player statistics tracking and visualization",
      "Match analysis and predictions",
      "User authentication and data persistence",
      "Responsive design for all devices",
      "Interactive dashboards and reports"
    ],
    challenges: [
      {
        challenge: "Handling real-time data updates",
        solution: "Implemented WebSockets for real-time data synchronization and updates"
      },
      {
        challenge: "Implementing complex visualizations",
        solution: "Utilized Chart.js with custom plugins to create interactive and responsive visualizations"
      },
      {
        challenge: "Processing large datasets efficiently",
        solution: "Optimized data processing with server-side pagination and lazy loading"
      },
      {
        challenge: "Ensuring cross-platform compatibility",
        solution: "Adopted responsive design patterns and tested across multiple devices and browsers"
      }
    ],
    learnings: [
      "Data processing with Python and Pandas",
      "Building responsive UIs with React and Next.js",
      "Data visualization techniques with Chart.js",
      "Real-time data processing with WebSockets",
      "Performance optimization for data-heavy applications"
    ],
    media: [
      { 
        type: 'image', 
        url: '/images/projects/efootball-stats/screenshot1.png', 
        alt: 'Efootball Stats Dashboard' 
      },
      { 
        type: 'image', 
        url: '/images/projects/efootball-stats/player-stats.png', 
        alt: 'Player Statistics' 
      }
    ],
    summary: "A comprehensive football statistics platform that provides detailed player and team analytics, match predictions, and performance metrics.",
    socialLinks: {
      github: "https://github.com/yourusername/efootball-stats",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      email: "mailto:your.email@example.com"
    }
  },
  // Add more projects here
];
