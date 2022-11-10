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
         <div className='grid grid-flow-col grid-cols-4  items-center'>
                     
        <div className='container col-span-2'>
         <h3 className="text-lg font-semibold mb-8 font-loader sm:text-4xl">        
             A Digital Product Agency
         </h3>
         <p className='text-gray-500 w-1/1 block  pl-24 pr-22 
          relative right-24 leading-8'>Leading digital agency with solid design and development expertise.<wbr></wbr> We build readymade websites,<wbr/> mobile applications, and elaborate online business services.</p>
         <button className='bg-blue-600 text-white rounded-3xl w-36 pl-4 pr-4 mt-8 pt-3 pb-3  text-md '>Contact Now</button>
        </div>
   
         <div className='col-span-2 col-start-3 ml-14'>
             {/* <span className='bg-blue-600 rounded-full h-24 w-24 inline-block z-10 relative left-4 '></span> */}
             <img src={ HeroImg } alt="asd" className='z-10 reltive object-ontain left- w-full mr-[-134px]' />
         </div>
   
         </div>
     </div>
   )
}

export default Hero

