import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [UserData, setUserData] = useState([])
  const [idx, setidx] = useState(1)

  const getData = async () => {
    try {
      let response = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=40`)
      setUserData(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [idx])

  let printUserData = (
    <div className="flex flex-col items-center justify-center py-40 w-full space-y-6">
      <div className="w-16 h-16 border-4 border-slate-800 border-t-amber-500 rounded-full animate-spin"></div>
      <h3 className="text-amber-500 text-lg font-medium tracking-widest animate-pulse uppercase">Discovering Art...</h3>
    </div>
  )

  if (UserData.length > 0) {
    printUserData = UserData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
    <div className='min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-900'>
      
      {/* Sticky Header */}
      <header className='sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/60 shadow-sm'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-center'>
          <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-500 to-orange-600 drop-shadow-sm'>
            Gallery Project
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className='flex-1 max-w-7xl mx-auto px-6 py-12 w-full'>
        <div className='flex flex-wrap gap-8 justify-center'>
          {printUserData}
        </div>
      </main>

      {/* Pagination Footer */}
      <footer className='border-t border-slate-800/50 bg-slate-950/90 backdrop-blur-sm py-8 mt-auto'>
        <div className='flex justify-center gap-8 items-center max-w-7xl mx-auto px-6'>
          <button
            disabled={idx === 1}
            className='flex items-center gap-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 disabled:cursor-not-allowed text-sm cursor-pointer transition-all active:scale-95 text-slate-200 rounded-full px-6 py-3 font-semibold shadow-md'
            onClick={() => {
              if (idx > 1) {
                setUserData([])
                setidx(idx - 1)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Prev
          </button>

          <div className='flex flex-col items-center'>
            <span className='text-[10px] text-slate-500 font-bold tracking-widest uppercase mb-1.5'>Page</span>
            <span className='w-12 h-12 flex items-center justify-center bg-linear-to-br from-amber-400 to-orange-500 text-slate-950 font-black text-xl rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]'>
              {idx}
            </span>
          </div>

          <button
            className='flex items-center gap-2 bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-sm cursor-pointer transition-all active:scale-95 text-slate-950 rounded-full px-6 py-3 font-bold shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)]'
            onClick={() => {
              setUserData([])
              setidx(idx + 1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </footer>

    </div>
  )
}

export default App