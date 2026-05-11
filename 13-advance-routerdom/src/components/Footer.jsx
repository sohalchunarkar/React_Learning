import React from 'react'

const Footer = () => {

    return (
        <footer className="bg-slate-900 text-slate-400 py-12 px-8 mt-auto border-t border-slate-800 absolute bottom-0 w-full">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-center md:text-left">
                    <div className="text-white font-bold text-lg mb-2">Router Learning</div>
                    <p className="text-sm">© 2026 All rights reserved.</p>
                </div>

                <div className="flex gap-8 text-sm font-medium">
                    <a href="#" className="hover:text-white transition-colors" target='_blank'>Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer