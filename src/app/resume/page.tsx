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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">Yu-Yuan Chang</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">Software Engineer & AI/ML Research Scientist</p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              MS Computer Science @ NYU • BS Data Theory @ UCLA • 3+ Years Industry Experience
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contactInfo.email}
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
            
            <a
              href="https://drive.google.com/file/d/1RyF80CU_3avrMGrAU1p51xL2YoM8lTwy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg mb-2">{edu.institution}</p>
                    {edu.gpa && (
                      <div className="flex items-center">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v12a1 1 0 01-1 1H9a1 1 0 01-1-1V6m8 0H8" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                )}
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                          <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                        </div>
                        <div className="mt-2 lg:mt-0">
                          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
                            {exp.startDate} - {exp.endDate || 'Present'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-18">
                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                    index === 0 ? 'bg-blue-100' : 
                    index === 1 ? 'bg-green-100' : 
                    index === 2 ? 'bg-yellow-100' :
                    index === 3 ? 'bg-red-100' : 'bg-purple-100'
                  }`}>
                    {index === 0 && (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {index >= 4 && (
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                        index === 0 ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                        index === 1 ? 'bg-green-50 text-green-700 hover:bg-green-100' :
                        index === 2 ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100' :
                        index === 3 ? 'bg-red-50 text-red-700 hover:bg-red-100' :
                        'bg-purple-50 text-purple-700 hover:bg-purple-100'
                      }`}
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