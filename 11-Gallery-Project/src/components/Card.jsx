import React from 'react'

const Card = ({ elem }) => {
    return (
        <a 
            href={elem.url} 
            target='_blank' 
            rel='noreferrer'
            className="group relative block overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/20"
        >
            <div className="h-64 w-60 overflow-hidden">
                <img 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={elem.download_url} 
                    alt={elem.author} 
                    loading="lazy"
                />
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
            
            {/* Content Box */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h2 className="text-xl font-bold text-slate-100 drop-shadow-md truncate">{elem.author}</h2>
                <div className="mt-1 flex items-center text-sm font-medium text-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>View Original</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </a>
    )
}

export default Card