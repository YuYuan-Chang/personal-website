import { Project } from '@/types';
import StreamingText from '@/components/StreamingText';

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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            <div className="mb-8">
              <StreamingText
                prompt="$"
                command="ls projects/"
                text="Featured Projects"
                speed={25}
                className="text-white text-4xl md:text-5xl font-bold mb-6"
              />
            </div>
            <div className="mb-8">
              <StreamingText
                prompt="$"
                command="cat projects/README.md"
                text="A showcase of innovative solutions spanning AI/ML systems, distributed computing, and full-stack development. Each project demonstrates technical excellence and real-world impact."
                speed={20}
                className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleProjects.map((project, index) => (
              <div key={project.id} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-green-500 transition-colors">
                {/* Terminal Header */}
                <div className="mb-6">
                  <div className="text-green-400 font-mono text-lg mb-2">
                    <span className="text-gray-400">$</span> cat project-{String(index + 1).padStart(2, '0')}.md
                  </div>
                  <h3 className="text-white font-mono text-xl font-bold mb-3">{project.title}</h3>
                </div>

                {/* Project Content */}
                <div className="font-mono">
                  <div className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-green-400 mb-3">
                      <span className="text-gray-400">$</span> ls technologies/
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-green-300 text-sm border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                        >
                          [{tech}]
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-500 transition-colors text-sm"
                      >
                        git clone
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-500 hover:text-black transition-colors text-sm"
                      >
                        ./run-demo.sh
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black border border-gray-700 rounded-lg p-8">
            <div className="mb-6">
              <div className="text-green-400 font-mono text-xl mb-4">
                <span className="text-gray-400">$</span> find . -name &quot;collaboration&quot; -type f
              </div>
              <div className="text-white font-mono text-2xl md:text-3xl font-bold mb-4">
                Interested in My Work?
              </div>
              <div className="text-gray-300 font-mono text-lg mb-8">
                Explore my complete portfolio on GitHub or reach out to discuss potential collaborations.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 font-mono">
              <a
                href="https://github.com/YuYuan-Chang"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-black px-6 py-3 rounded hover:bg-green-500 transition-colors"
              >
                git remote -v
              </a>
              <a
                href="mailto:lawani321@g.ucla.edu"
                className="border border-blue-500 text-blue-400 px-6 py-3 rounded hover:bg-blue-500 hover:text-black transition-colors"
              >
                mail contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}