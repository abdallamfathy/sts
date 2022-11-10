import React from 'react'
import BoxSearch from '../assets/imgs/box-search.png'

const Service = () => {
  return (
    <>
    <div className='flex flex-row flex-1 justify-between bg-gray-0  mt-24 mb-96'>
        <div className='w-[350p]'>
            <h1 className='text-4xl font-semibold mb-6'>How can we help your Business ?</h1>
            <p className='break-words text-lg leading-8 text-gray-500'>We build readymade websites, mobile applications, and elaborate online business services.</p>
        </div>
        <div className='flex align-bott  items-end  relative bottom-3 '>


        <div className='bg-white shadow-2xl rounded-[40px] w-[308px] h-[379px] relative flex flex-col justify-center translate items-center'>
            <div className='w-[121px] h-[121px] bg-blue-100 rounded-2xl absolute left-[94px] top-[39px] flex justify-center items-center'>
              <img src={BoxSearch} alt="asd" className='w-[74px] h-[74px]'  />
            </div>
            <h1 className='text-2xl font-semibold break-words w-52 text-center mt-32'>Business Idea Planning</h1>
            <p className='text-center mt-6 text-gray-400 px-10'>We present you a proposal and discuss niffty-gritty like</p>
        </div>


        </div>
    </div>
</>
  )
}

export default Service