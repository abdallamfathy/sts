import React from 'react'
import HeroImg from '../assets/imgs/hero.png'
const Hero = () => {
  return (
    <div>


        <div className='flex flex-row  items-center'>
                    
       <div className='h-80'>
        <h1 className="text-5xl font-bold mb-5">        
            A Digital Product Agency
        </h1>
        <p className=' break-words w-96  text-gray-500'>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications.</p>
        <button className='bg-blue-600 text-white rounded-3xl w-36  p-2 mt-5 text-center items-end flex justify-center'>Contact Now</button>
       </div>

        <div className='flex flex-row '>
            <span className='bg-blue-100 rounded-full w-96 h-24  relative left-10 '></span>
            <img src={ HeroImg } alt="asd" className='z-10' />
        </div>

        </div>
    </div>
  )
}

export default Hero