import React from 'react'
import { Link } from 'react-router-dom'
import { Clients, Hero, Navbar, Service } from '../components'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Clients/>
      <Service/>
    </>
  )
}

export default Home