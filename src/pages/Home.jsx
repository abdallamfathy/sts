import React from 'react'
import { Link } from 'react-router-dom'
import { Clients, Hero, Navbar } from '../components'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Clients/>
    </>
  )
}

export default Home