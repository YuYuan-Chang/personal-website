import { Experience, Education, Skill, Contact } from '@/types';

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
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Yu-Yuan Chang</h1>
          <p className="text-xl text-gray-600 mb-6">Software Engineer & AI/ML Researcher</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
              {contactInfo.email}
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{contactInfo.phone}</span>
            <span className="text-gray-400">•</span>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </a>
            <span className="text-gray-400">•</span>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              GitHub
            </a>
          </div>
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1RyF80CU_3avrMGrAU1p51xL2YoM8lTwy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                </div>
                <p className="text-gray-500 text-sm">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}