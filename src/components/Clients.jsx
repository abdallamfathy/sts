import React from 'react'
import google from '../assets/imgs/google.png'
import airbnb from '../assets/imgs/airbnb.png'
import uber from '../assets/imgs/uber.png'
import amazon from '../assets/imgs/amazon.png'


const Clients = () => {
  return (
    <>
        <div className='flex flex-row flex-1 justify-between  mt-24 mb-52'>
            <div className='w-[300px]'>
                <h1 className='text-4xl font-semibold mb-6'>Our Clients</h1>
                <p className='break-words text-lg leading-8 text-gray-500'>Several selected clients, who already believe in our service.</p>
            </div>
            <div className='flex align-bott  items-end  relative bottom-3 text-en gap-x-12'>
            <img src={google} className="h" alt="client" />
            <img src={airbnb} className="h" alt="client" />
            <img src={uber} className="h- relative bottom-2" alt="client" />
            <img src={amazon} className="h relative top-2" alt="client" />
            </div>
        </div>
    </>
  )
}

export default Clients