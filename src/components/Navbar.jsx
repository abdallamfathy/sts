import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex  justify-between items-center font-medium  pt-8 mb-8 '>
        <div className="flex flex-row items-center">
          {/* <span className="font-extrabold text-3xl items-start inline ">A+</span> */}
          <h1 className='font-bold sm:text-4xl'>Studio</h1>
        </div>
        <div>
                  
        <ul className='flex flex-row gap-20'>
          <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/">Service</a>
            </li><li>
            <a href="/">Projects</a>
            </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar