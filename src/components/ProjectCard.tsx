import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {project.imageUrl && (
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Project Image</div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              GitHub →
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;