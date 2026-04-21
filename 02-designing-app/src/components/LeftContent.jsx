import React from 'react'
import HeroTest from './HeroTest'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 px-10 py-10'>
        <HeroTest />
        <Arrow />
        

    </div>
  )
}

export default LeftContent