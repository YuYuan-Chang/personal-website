import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                <span className="block">Yu-Yuan(Lawrence) Chang</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto font-medium">
              Software Engineer & AI/ML Practitioner
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Specializing in distributed systems, machine learning infrastructure, and intelligent applications. 
              Currently pursuing MS in Computer Science at NYU with industry experience at leading tech companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/projects"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <Link 
                href="/resume"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                View Resume
              </Link>
              <a
                href="mailto:lawani321@g.ucla.edu"
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Quick Links */}
            <div className="flex justify-center space-x-6 text-gray-600">
              <a href="https://github.com/YuYuan-Chang" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/yuan-lawrence-chang-157a27171" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I&apos;m a Computer Science graduate student at <strong>New York University</strong> with expertise in AI/ML systems, 
                distributed computing, and full-stack development. With a Bachelor&apos;s degree in Data Theory from <strong>UCLA</strong> 
                and hands-on industry experience, I bridge the gap between cutting-edge research and practical applications.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My work focuses on building scalable AI-powered applications, optimizing distributed systems, and creating 
                intelligent solutions for complex real-world problems. I have experience working with cloud infrastructure, 
                machine learning pipelines, and modern development frameworks.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AI/ML Research</span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Cloud Architecture</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Full-Stack Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600">Technologies I work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {['Python', 'TypeScript', 'React', 'AWS', 'Neo4j', 'PyTorch'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <div className="font-medium text-gray-900">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
