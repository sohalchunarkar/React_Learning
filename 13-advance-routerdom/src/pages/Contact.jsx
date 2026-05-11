import React from 'react'

const Contact = () => {
  return (
    <div className="py-10 max-w-xl mx-auto">
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Send a Message</h2>
        <form className="space-y-4">
            <div>
                <label className="block text-sm text-slate-400 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="you@example.com" />
            </div>
            <div>
                <label className="block text-sm text-slate-400 mb-1">Message</label>
                <textarea className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 h-32"></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors">Send Now</button>
        </form>
    </div>
</div>
  )
}

export default Contact