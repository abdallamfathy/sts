import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex  justify-between items-center     font-medium  p-4 '>
        <div className="flex flex-row items-center">
          <span className="font-extrabold text-3xl items-start inline ">A+</span>
          <h1>Studio</h1>
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
      </nav>
    </>
  )
}

export default Navbar