// // app/projects/[id]/page.tsx
// 'use server';

// import { notFound } from 'next/navigation';
// import { projects } from '@/app/data/projects';
// import { ProjectView } from './project-view';

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function ProjectPage({ params }: PageProps) {
//   // Find the project by ID
//   const project = projects.find((p) => p.id === params.id);

//   // If project not found, return 404
//   if (!project) {
//     notFound();
//   }

//   return <ProjectView project={project} />;
// }// app/projects/[id]/page.tsx
'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/app/data/projects';
// import { ProjectView } from './project-view';
import dynamic from 'next/dynamic';

const ProjectView = dynamic(
  () => import('./project-view').then(m => m.ProjectView),
  { ssr: false }
);

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params); 

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} />;
}
