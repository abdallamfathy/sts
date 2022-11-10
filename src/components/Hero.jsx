import React, { useEffect } from 'react'
import HeroImg from '../assets/imgs/hero.png'
import WebFont from 'webfontloader';
import '../index.css';

const Hero = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Plus Jakarta Sans', 'Chilanka']
      }
    });
   }, []);

   return (
     <div>
         <div className='grid grid-flow-row grid-rows-2
         lg:grid-flow-col lg:grid-cols-4  items-center'>
                     
        <div className=' col-span-2'>
         <h3 className="text-xl font-semibold mb-8 font-loader lg:text-4xl mt-20">        
             A Digital Product Agency
         </h3>
         <p className='text-gray-500 w-1/1 block  lg:pl-24 lg:pr-22 
          lg:relative lg:right-24 leading-8'>Leading digital agency with solid design and development expertise.<wbr></wbr> We build readymade websites,<wbr/> mobile applications, and elaborate online business services.</p>
         <button className='bg-blue-600 text-white rounded-3xl w-36 pl-4 pr-4 mt-8 pt-3 pb-3  text-md '>Contact Now</button>
        </div>
   
         <div className='lg:col-span-2 lg:col-start-3 lg:ml-14 '>
             <span className='bg-blue-100 rounded-full h-24 w-24 lg:block hidden relative top-24 -left-10 -z-10'></span>
             <img src={ HeroImg } alt="asd" className='z-10 lg:mr-[-134px] hidden lg:block ' />
         </div>
   
         </div>
     </div>
   )
}

export default Hero

