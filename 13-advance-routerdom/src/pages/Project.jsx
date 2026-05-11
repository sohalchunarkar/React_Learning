import React from 'react'

const Project = () => {
  return (
   <div className="py-10">
    <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center text-blue-400">🚀</div>
            <h3 className="text-xl font-bold text-white">E-Commerce Platform</h3>
            <p className="text-slate-400 mt-2">A full-stack shop with stripe integration.</p>
        </div>
        </div>
</div>
  )
}

export default Project