import Link from "next/link";
import StreamingText from "@/components/StreamingText";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start">
            {/* Terminal Commands */}
            <div className="max-w-4xl text-left">
              <div className="mb-6">
                <StreamingText
                  prompt="$"
                  command="whoami"
                  text="Yu-Yuan(Lawrence) Chang"
                  speed={30}
                  className="text-white text-2xl md:text-3xl mb-4"
                />
              </div>

              <div className="mb-6">
                <StreamingText
                  prompt="$"
                  command="cat role.txt"
                  text="Software Engineer & AI/ML Practitioner"
                  speed={25}
                  className="text-white text-lg md:text-xl"
                />
              </div>

              <div className="mb-8">
                <StreamingText
                  prompt="$"
                  command="cat about.md"
                  text="Specializing in distributed systems, machine learning infrastructure, and intelligent applications. Currently pursuing MS in Computer Science at NYU with industry experience at leading tech companies."
                  speed={20}
                  className="text-gray-300 text-base md:text-lg leading-relaxed"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-start mb-6 font-mono text-sm">
                <Link
                  href="/projects"
                  className="bg-green-600 text-black px-4 py-2 rounded hover:bg-green-500 transition-colors border border-green-500"
                >
                  ./view-projects.sh
                </Link>
                <Link
                  href="/resume"
                  className="border border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
                >
                  cat resume.pdf
                </Link>
                <a
                  href="mailto:lawani321@g.ucla.edu"
                  className="border border-blue-500 text-blue-400 px-4 py-2 rounded hover:bg-blue-500 hover:text-black transition-colors"
                >
                  mail contact
                </a>
              </div>

              {/* Quick Links */}
              <div className="flex justify-start space-x-4 text-gray-500 font-mono text-sm">
                <a href="https://github.com/YuYuan-Chang" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  github.com/YuYuan-Chang
                </a>
                <span className="text-gray-600">|</span>
                <a href="https://linkedin.com/in/yuan-lawrence-chang-157a27171" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  linkedin/in/yuan-lawrence-chang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-black border border-gray-700 rounded-lg p-8">
            <div className="mb-8">
              <div className="text-green-400 font-mono text-xl mb-4">
                <span className="text-gray-400">$</span> cat about.txt
              </div>
            </div>

            <div className="font-mono text-gray-300 space-y-4">
              <p className="leading-relaxed">
                I&apos;m a Computer Science graduate student at <span className="text-blue-400">New York University</span> with expertise in AI/ML systems,
                distributed computing, and full-stack development. With a Bachelor&apos;s degree in Data Theory from <span className="text-blue-400">UCLA </span>
                 and hands-on industry experience, I bridge the gap between cutting-edge research and practical applications.
              </p>
              <p className="leading-relaxed">
                My work focuses on building scalable AI-powered applications, optimizing distributed systems, and creating
                intelligent solutions for complex real-world problems. I have experience working with cloud infrastructure,
                machine learning pipelines, and modern development frameworks.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-green-800 text-green-300 rounded font-mono text-sm">[AI/ML Research]</span>
                <span className="px-3 py-1 bg-blue-800 text-blue-300 rounded font-mono text-sm">[Cloud Architecture]</span>
                <span className="px-3 py-1 bg-purple-800 text-purple-300 rounded font-mono text-sm">[Full-Stack Development]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-black border border-gray-700 rounded-lg p-8">
            <div className="mb-8">
              <div className="text-green-400 font-mono text-xl">
                <span className="text-gray-400">$</span> ls -la skills/
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['Python', 'TypeScript', 'React', 'AWS', 'Neo4j', 'PyTorch'].map((skill) => (
                <div key={skill} className="bg-gray-900 border border-gray-600 p-3 rounded font-mono text-center">
                  <div className="text-green-400 text-sm">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
