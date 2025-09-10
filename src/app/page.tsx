import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m{" "}
              <span className="text-blue-600">Yu-Yuan(Lawrence) Chang</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Software Engineer & AI/ML Researcher passionate about building 
              intelligent systems and cutting-edge AI applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View My Projects
              </Link>
              <Link 
                href="/resume"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <p className="text-lg text-gray-600 mb-8">
              I&apos;m a Computer Science graduate student at NYU with a focus on AI/ML systems and full-stack development. 
              I specialize in building AI-powered applications, distributed systems, and data pipelines. 
              With experience in cloud infrastructure, machine learning, and modern web technologies, 
              I love creating intelligent solutions that solve real-world problems.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">Internships</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600">Degrees</div>
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
