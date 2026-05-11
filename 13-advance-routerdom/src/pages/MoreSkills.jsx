import React from 'react'
import { useParams, Link } from 'react-router-dom'

const skillData = {
    react: {
        title: "React",
        icon: "⚛️",
        color: "text-blue-400",
        bg: "bg-blue-900/30",
        border: "border-blue-500",
        description: "A JavaScript library for building user interfaces. I use React to build dynamic, single-page applications with reusable components and efficient state management.",
        projects: ["E-Commerce Platform", "Social Dashboard", "Task Manager"]
    },
    javascript: {
        title: "JavaScript",
        icon: "🟨",
        color: "text-yellow-400",
        bg: "bg-yellow-900/30",
        border: "border-yellow-500",
        description: "The core programming language of the web. I use modern ES6+ features to build robust logic, interact with APIs, and create engaging interactive web experiences.",
        projects: ["Interactive Canvas", "Browser Extension", "API Wrapper"]
    },
    tailwindcss: {
        title: "Tailwind CSS",
        icon: "🌊",
        color: "text-sky-400",
        bg: "bg-sky-900/30",
        border: "border-sky-500",
        description: "A utility-first CSS framework. I leverage Tailwind to rapidly build custom user interfaces directly in my markup without ever leaving the HTML file.",
        projects: ["Landing Page", "Admin Dashboard", "Component Library"]
    },
    nodejs: {
        title: "Node.js",
        icon: "🟩",
        color: "text-green-400",
        bg: "bg-green-900/30",
        border: "border-green-500",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine. I build scalable backend services, RESTful APIs, and handle database integrations with Node.",
        projects: ["REST API", "WebSocket Server", "CLI Automation Tool"]
    }
}

const MoreSkills = () => {
    const { value } = useParams()
    const skillKey = value ? value.toLowerCase().replace(" ", "") : ""
    const data = skillData[skillKey]

    if (!data) {
        return (
            <div className='flex flex-col items-center justify-center h-[70vh]'>
                <h2 className='text-3xl font-bold text-white mb-4'>Skill not found :{value}</h2>
                <Link to='/Skill' className='text-blue-400 hover:text-blue-300 font-medium hover:underline'>← Back to Skills</Link>
            </div>
        )
    }

    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <Link to='/Skill' className="text-slate-400 hover:text-white flex items-center gap-2 mb-8 transition-colors font-medium w-fit">
                <span>← Back to Skills</span>
            </Link>

            <div className={`bg-slate-900 rounded-2xl border-t-4 ${data.border} p-8 shadow-xl animate-fadeIn`}>
                <div className="flex items-center gap-6 mb-8">
                    <div className={`w-20 h-20 ${data.bg} rounded-2xl flex items-center justify-center ${data.color} text-4xl shadow-inner`}>
                        {data.icon}
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white">{data.title}</h1>
                        <p className="text-slate-400 mt-2 font-medium">Detailed Skill Overview</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                            <span className={data.color}>✦</span> Description
                        </h2>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {data.description}
                        </p>
                    </div>

                    <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                        <h2 className="text-xl font-bold text-white mb-4">Related Projects</h2>
                        <div className="flex flex-wrap gap-3">
                            {data.projects.map((project, index) => (
                                <span key={index} className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 hover:border-slate-500 transition-colors cursor-default">
                                    {project}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreSkills