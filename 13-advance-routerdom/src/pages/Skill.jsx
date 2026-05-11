import React from 'react'
import { Link } from 'react-router-dom'

const Skill = () => {
    return (
        <div className="py-10">
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
                <p className="text-slate-400 mt-2">Technologies and tools I work with to build applications.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
                <Link to="/Skill/React" className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 hover:-translate-y-1 transition-all flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-16 h-16 bg-blue-900/30 rounded-full mb-4 flex items-center justify-center text-blue-400 text-3xl">⚛️</div>
                    <h3 className="text-lg font-bold text-white">React</h3>
                </Link>

                <Link to="/Skill/JavaScript" className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-yellow-500 hover:-translate-y-1 transition-all flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-16 h-16 bg-yellow-900/30 rounded-full mb-4 flex items-center justify-center text-yellow-400 text-3xl">🟨</div>
                    <h3 className="text-lg font-bold text-white">JavaScript</h3>
                </Link>

                <Link to="/Skill/TailwindCSS" className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-sky-500 hover:-translate-y-1 transition-all flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-16 h-16 bg-sky-900/30 rounded-full mb-4 flex items-center justify-center text-sky-400 text-3xl">🌊</div>
                    <h3 className="text-lg font-bold text-white">Tailwind CSS</h3>
                </Link>

                <Link to="/Skill/Nodejs" className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-green-500 hover:-translate-y-1 transition-all flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-16 h-16 bg-green-900/30 rounded-full mb-4 flex items-center justify-center text-green-400 text-3xl">🟩</div>
                    <h3 className="text-lg font-bold text-white">Node.js</h3>
                </Link>
            </div>
        </div>
    )
}

export default Skill