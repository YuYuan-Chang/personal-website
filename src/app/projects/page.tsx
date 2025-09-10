import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Agent Powered Code Analysis System',
    description: 'Designed a graph database and RAG driven retrieval framework that enables LLMs to read large, multi-file codebases. Constructed a Neo4j code graph database, extracting code elements (MODULE, CLASS, FUNCTION, METHOD, FIELD, GLOBAL_VARIABLE) as nodes and semantic relationships as edges for precise LLM retrieval.',
    techStack: ['Neo4j', 'RAG', 'LangChain', 'Python', 'Graph Databases', 'LLM', 'Cypher', 'Vector Search'],
    githubUrl: 'https://github.com/YuYuan-Chang/ai-code-analysis',
  },
  {
    id: '2',
    title: 'Student Resource Sharing Platform',
    description: 'Developed a web application that allows students to share their resumes and receive feedback from peers. Implemented a Microservices architecture with distributed system handling user authorization, resume handling, comments, and concurrency situations.',
    techStack: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes', 'Nginx', 'Redis'],
    githubUrl: 'https://github.com/YuYuan-Chang/student-resource-platform',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each one represents a unique 
            challenge and showcases different aspects of my development skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/YuYuan-Chang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}