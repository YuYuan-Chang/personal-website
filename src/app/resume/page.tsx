import { Experience, Education, Skill, Contact } from '@/types';
import StreamingText from '@/components/StreamingText';

const contactInfo: Contact = {
  email: 'lawani321@g.ucla.edu',
  phone: '+1 628-224-4336',
  linkedin: 'https://linkedin.com/in/yuan-lawrence-chang-157a27171',
  github: 'https://github.com/YuYuan-Chang',
  website: 'https://yourwebsite.com',
};

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Prosal, Inc.',
    position: 'Software Engineer Intern',
    startDate: 'Jun. 2024',
    endDate: 'Sep 2024, Jan. 2025 - May. 2025 (2 Terms)',
    description: [
      'Built a real‑time ingestion pipeline on Supabase syncing 50k+ procurement records/day, cutting data latency from 24h to less than 5 min',
      'Automated vector embedding generation via PostgreSQL RPCs & Edge Functions; implemented HNSW indexes, boosting semantic search recall by 25%',
      'Orchestrated 25+ Dockerized Python scrapers on AWS Auto Scaling, transforming raw HTML/PDF sources into normalized records',
      'Developed a search engine using Amazon Kendra for 20TB of raw web scraper data, enhancing web application with search and real-time chat functionality',
      'Designed a collaboration AI-agent workflow that eliminates manual government data collection, automating aggregation across 40+ government APIs'
    ],
    technologies: ['AWS EC2', 'S3', 'DynamoDB', 'Textract', 'Kendra', 'Supabase', 'PostgreSQL', 'Python', 'Docker', 'AutoGen', 'LLM', 'FAISS']
  },
  {
    id: '2',
    company: 'Multimedia and Visual Computing Lab, New York University',
    position: 'Research Assistant',
    startDate: 'Jan. 2024',
    endDate: 'Jun. 2024',
    description: [
      'Utilized k-means clustering for continuous action binning in computer vision to discretize actions, enabling the model to handle multi-modal action',
      'Integrated the Mamba language model to enhance robotic reasoning and action prediction, achieving 20-minute faster fine-tuning time for new manipulation skills',
      'Conducted experiments using diverse environments and datasets, including robotic manipulation and self-driving behavior datasets',
      'Evaluated the effectiveness of Transformers, State Space Model and Mamba for robotic manipulation tasks'
    ],
    technologies: ['Python', 'PyTorch', 'Mamba', 'Computer Vision', 'Machine Learning', 'Robotics']
  },
  {
    id: '3',
    company: 'Hillstone Networks, Inc.',
    position: 'Software Engineer Intern',
    startDate: 'Jun. 2023',
    endDate: 'Sep 2023',
    description: [
      'Developed a full-stack, type-safe dashboard with Next.js, TypeScript, Tailwind, and shadcn/ui, featuring reusable components and advanced filtering system',
      'Implemented client-side caching and request deduplication to minimize redundant API calls, delivering smoother user experience',
      'Built scalable modules for large database by implementing dynamic routing and API endpoints with server-side processing',
      'Normalized 1.2B Sysmon events into attack graphs, visualized process trees that improved Advanced Persistent Threat (APT) threat triage accuracy by 15%'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'REST APIs', 'HTML/CSS', 'Machine Learning', 'Regex']
  }
];

const education: Education[] = [
  {
    id: '1',
    institution: 'New York University (NYU)',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: 'Sep. 2023',
    endDate: 'Jun. 2025',
    gpa: '3.6'
  },
  {
    id: '2',
    institution: 'University of California, Los Angeles (UCLA)',
    degree: 'Bachelor of Science',
    field: 'Data Theory (Minor in Data Science Engineering)',
    startDate: 'Jun. 2019',
    endDate: 'June. 2023',
    gpa: '3.622'
  }
];

const skills: Skill[] = [
  {
    category: 'AI & MLOps',
    items: ['LangChain', 'Microsoft AutoGen', 'RAG patterns', 'AI-Agent pattern', 'PyTorch', 'Machine Learning', 'Computer Vision']
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices Architecture', 'Linux']
  },
  {
    category: 'Databases & Data',
    items: ['SQL/NoSQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Supabase', 'Airtable', 'FAISS']
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'TypeScript/JavaScript', 'C++', 'C', 'SQL', 'R']
  },
  {
    category: 'Frameworks & Tools',
    items: ['React', 'Next.js', 'Express', 'Git', 'REST APIs', 'Tailwind CSS', 'Node.js']
  }
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <div className="mb-6">
              <StreamingText
                prompt="$"
                command="whoami"
                text="Yu-Yuan Chang"
                speed={25}
                className="text-white text-4xl md:text-5xl font-bold mb-4"
              />
            </div>

            <div className="mb-6">
              <StreamingText
                prompt="$"
                command="cat role.txt"
                text="Software Engineer & AI/ML Research Scientist"
                speed={20}
                className="text-white text-xl md:text-2xl mb-4"
              />
            </div>

            <div className="mb-8">
              <StreamingText
                prompt="$"
                command="cat summary.txt"
                text="MS Computer Science @ NYU • BS Data Theory @ UCLA • 3+ Years Industry Experience"
                speed={15}
                className="text-gray-300 text-lg mb-8"
              />
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <div className="text-green-400 font-mono text-lg mb-4">
                <span className="text-gray-400">$</span> cat contact.json
              </div>
              <div className="flex flex-wrap gap-4 text-gray-300 font-mono text-sm">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-green-400 transition-colors">
                  {contactInfo.email}
                </a>
                <span className="text-gray-600">|</span>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  linkedin/in/yuan-lawrence-chang
                </a>
                <span className="text-gray-600">|</span>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  github.com/YuYuan-Chang
                </a>
              </div>
            </div>

            <div className="font-mono">
              <a
                href="https://drive.google.com/file/d/1RyF80CU_3avrMGrAU1p51xL2YoM8lTwy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-black px-6 py-3 rounded hover:bg-green-500 transition-colors"
              >
                wget resume.pdf
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Education Section */}
        <section className="mb-16">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="mb-8">
              <div className="text-green-400 font-mono text-xl mb-4">
                <span className="text-gray-400">$</span> cat education.log
              </div>
            </div>
            <div className="space-y-6 font-mono">
              {education.map((edu) => (
                <div key={edu.id} className="bg-black border border-gray-600 rounded p-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div className="flex-1">
                      <div className="text-white text-lg font-bold mb-2">
                        {edu.degree} in {edu.field}
                      </div>
                      <div className="text-blue-400 text-base mb-2">{edu.institution}</div>
                      {edu.gpa && (
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-green-800 text-green-300 text-sm rounded">
                            [GPA: {edu.gpa}]
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <div className="px-4 py-2 bg-gray-800 text-gray-300 rounded">
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="mb-8">
              <div className="text-green-400 font-mono text-xl mb-4">
                <span className="text-gray-400">$</span> git log --author=&quot;Yu-Yuan Chang&quot; --oneline
              </div>
            </div>
            <div className="space-y-6 font-mono">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="bg-black border border-gray-600 rounded p-6">
                  <div className="flex items-start mb-6">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-black font-bold text-sm mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <div className="text-white text-lg font-bold mb-1">{exp.position}</div>
                          <div className="text-blue-400 text-base">{exp.company}</div>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <div className="px-4 py-2 bg-gray-800 text-gray-300 rounded text-sm">
                            {exp.startDate} - {exp.endDate || 'Present'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-12">
                    <div className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="text-green-400 mr-3 flex-shrink-0">+</div>
                          <div className="text-gray-300 leading-relaxed text-sm">{item}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <div className="text-green-400 mb-3 text-sm">
                        <span className="text-gray-400">$</span> ls tech_stack/
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-green-300 text-sm border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                          >
                            [{tech}]
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="mb-8">
              <div className="text-green-400 font-mono text-xl mb-4">
                <span className="text-gray-400">$</span> ls -la skills/
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category} className="bg-black border border-gray-600 rounded p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-black font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <div className="text-white text-lg font-bold">{skillGroup.category}/</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800 text-green-300 text-sm border border-gray-600 rounded hover:bg-gray-700 transition-colors"
                      >
                        [{skill}]
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}