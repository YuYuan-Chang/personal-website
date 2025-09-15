interface FileIconProps {
  className?: string;
}

export default function FileIcon({ className = '' }: FileIconProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Terminal Window */}
      <div className="relative w-80 h-96 bg-black rounded-lg shadow-2xl border border-gray-700">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-gray-800 rounded-t-lg px-4 py-3 border-b border-gray-600">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-300 text-sm font-mono">terminal</div>
          <div className="w-12"></div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          <div className="text-green-400 mb-2">
            <span className="text-gray-400">$</span> whoami
          </div>
          <div className="text-white mb-4">yu-yuan-chang</div>

          <div className="text-green-400 mb-2">
            <span className="text-gray-400">$</span> cat skills.txt
          </div>
          <div className="text-white mb-4">
            <div>• Software Engineer</div>
            <div>• AI/ML Practitioner</div>
            <div>• Full-Stack Developer</div>
          </div>

          <div className="text-green-400 mb-2">
            <span className="text-gray-400">$</span> ls projects/
          </div>
          <div className="text-blue-300 mb-4">
            <div>distributed-systems/</div>
            <div>machine-learning/</div>
            <div>web-applications/</div>
          </div>

          <div className="text-green-400">
            <span className="text-gray-400">$</span> <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}