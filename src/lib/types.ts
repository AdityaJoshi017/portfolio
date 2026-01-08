export interface ProjectContent {
  overview: string;
  features: string[];
  technologies: string[];
  challenges?: Array<{ challenge: string; solution: string }>;
  solutions?: string[];
  [key: string]: any; // For additional dynamic content
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  lanUrl?: string;
  featured: boolean;
  date: string;
  content: ProjectContent;
  screenshots?: string[];
  // Add any other project-specific fields here
}

export interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
