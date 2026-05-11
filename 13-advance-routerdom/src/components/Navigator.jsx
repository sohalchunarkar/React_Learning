import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigator = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-slate-900/50 border-b border-slate-800 px-8 py-3 flex justify-between items-center backdrop-blur-sm">
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-all font-medium text-sm border border-transparent hover:border-slate-700"
            >
                <span className="text-lg leading-none">←</span> Previous
            </button>
            
            <button 
                onClick={() => navigate(1)} 
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-all font-medium text-sm border border-transparent hover:border-slate-700"
            >
                Next <span className="text-lg leading-none">→</span>
            </button>
        </div>
    )
}

export default Navigator