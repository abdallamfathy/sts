import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex  justify-between  bg-gray-300   font-medium  p-4 '>
        <div className="">
          <span className="font-extrabold text-3xl ">A+</span>
          
        </div>
        <div>
                  
        <ul className='flex flex-row gap-20'>
          <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/">Home</a>
            </li><li>
            <a href="/">Home</a>
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