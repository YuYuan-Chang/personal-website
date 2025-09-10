import { Experience, Education, Skill, Contact } from '@/types';

const contactInfo: Contact = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  website: 'https://yourwebsite.com',
};

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    startDate: '2022-03',
    description: [
      'Led development of enterprise web applications using React, Node.js, and PostgreSQL',
      'Architected and implemented microservices reducing system response time by 40%',
      'Mentored junior developers and conducted code reviews for a team of 8 engineers',
      'Collaborated with product managers and designers to deliver user-centric solutions'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript']
  },
  {
    id: '2',
    company: 'Digital Innovation Labs',
    position: 'Full Stack Developer',
    startDate: '2020-06',
    endDate: '2022-02',
    description: [
      'Developed and maintained multiple client projects using modern web technologies',
      'Built RESTful APIs and integrated third-party services including payment gateways',
      'Implemented responsive designs and optimized applications for performance',
      'Participated in agile development processes and sprint planning'
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'MySQL', 'Redis', 'JavaScript']
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    startDate: '2019-01',
    endDate: '2020-05',
    description: [
      'Created user interfaces for web applications using React and modern CSS',
      'Collaborated with UX/UI designers to implement pixel-perfect designs',
      'Optimized application performance and implemented lazy loading strategies',
      'Contributed to establishing frontend development best practices'
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Webpack']
  }
];

const education: Education[] = [
  {
    id: '1',
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2015-09',
    endDate: '2019-05',
    gpa: '3.8'
  }
];

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Django', 'FastAPI', 'Express.js', 'RESTful APIs', 'GraphQL']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'Linux', 'CI/CD', 'Jest']
  }
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Name</h1>
          <p className="text-xl text-gray-600 mb-6">Software Developer</p>
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
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Download PDF
            </button>
          </div>
        </div>

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

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id}>
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
      </div>
    </div>
  );
}