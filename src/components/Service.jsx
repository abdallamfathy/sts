import React from 'react'
import BoxSearch from '../assets/imgs/box-search.png'
import code from '../assets/imgs/code.png'
import wallet from "../assets/imgs/wallet.png";
import chart from "../assets/imgs/chart.png"
const Service = () => {
  return (
<>

    <div className='flex lg:flex-row flex-col  flex-1 justify-betwee   mb-80 items-center relative mt-36  '>
        <div className=' lg:mr-28 flex flex-col  items-center'>
          <span className='bg-[#FFF5DB] rounded-tl-[80px] w-40 h-40 relative top-32 -left-40  block'></span>
            <h1 className='text-4xl lg:w-[350px]  relative lg:-left-7 font-bold mb-6 mt-6'>How can we help your Business ?</h1>
            <p className=' lg:w-[420px] break-words text-lg leading-8 text-gray-400 z-10'>We build readymade websites, mobile applications, and elaborate online business services.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-x-10 items-center  relative bottom-3 mt-20 '>


        <div className='flex flex-col '>
        <div className='bg-white  border border-gray-100 shadow-lg rounded-[40px] w-72 h-96 relative flex flex-col flex1 justify-center translate items-center  '>
            <div className='w-28 h-28 h- bg-[#F1F7FF] rounded-2xl absolute left-[94px] top-[39px] flex justify-center items-center'>
              <img src={BoxSearch} alt="asd" className='w-[74px] h-[74px]'  />
            </div>
            <h1 className='text-2xl font-semibold break-words w-52 text-center mt-32'>Business Idea Planning</h1>
            <p className='text-center mt-6 text-gray-400 px-10'>We present you a proposal and discuss niffty-gritty like</p>
        </div>


        <div className=' mt-6 border border-gray-100 bg-white shadow-lg rounded-[40px] w-72 h-96 relative flex flex-col flex1 justify-center translate items-center  '>
            <div className='w-28 h-28 h- bg-[#FFF2F8] rounded-2xl absolute left-[94px] top-[39px] flex justify-center items-center'>
              <img src={code} alt="asd" className='w-[74px] h-[74px]'  />
            </div>
            <h1 className='text-2xl font-semibold break-words w-52 text-center mt-32'>Development Website and App</h1>
            <p className='text-center mt-6 text-gray-400 px-10'>Communication protocols apart from engagement models</p>
        </div>
        </div>

        <div className='flex flex-col relative lg:bottom-16 max-lg:mt-6'>
        <div className='bg-white border border-gray-100 shadow-lg rounded-[40px] w-72 h-96 relative flex flex-col flex1 justify-center translate items-center  '>
            <div className='w-28 h-28 h- bg-[#FFF5DB] rounded-2xl absolute left-[94px] top-[39px] flex justify-center items-center'>
              <img src={wallet} alt="asd" className='w-[74px] h-[74px]'  />
            </div>
            <h1 className='text-2xl font-semibold break-words w-52 text-center mt-32'>Financial Planning System</h1>
            <p className='text-center mt-6 text-gray-400 px-10'>Protocols apart from aengage models, pricing billing</p>
        </div>

        <div className='bg-white mt-6 border border-gray-100 shadow-lg rounded-[40px] w-72 h-96 relative flex flex-col flex1 justify-center translate items-center  '>
            <div className='w-28 h-28 h- bg-[#DEFFEE] rounded-2xl absolute left-[94px] top-[39px] flex justify-center items-center'>
              <img src={chart} alt="asd" className='w-[74px] h-[74px]'  />
            </div>
            <h1 className='text-2xl font-semibold break-words w-52 text-center mt-32'>Market Analysis Project</h1>
            <p className='text-center mt-6 text-gray-400 px-10'>Protocols apart from aengage models, pricing billing</p>
        </div>
        </div>

<span className='bg-[#F4F9FF] rounded-tl-[200px] w-screen h-[600px] relative right-[950px] top-16 block -z-10 '></span>
        </div>
    </div>
</>
  )
}

export default Service