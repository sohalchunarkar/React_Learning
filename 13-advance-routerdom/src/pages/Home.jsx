import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">Building the Future <span className="text-blue-500">Together.</span></h1>
            <p className="text-slate-400 max-w-2xl text-lg">Welcome to my space. I create digital experiences that combine clean code with modern design.</p>
            <button className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all active:scale-50">Get Started</button>
        </div>
    )
}

export default Home