import React from 'react'
import About from '../components/About/About'
import AboutMore from '../components/AboutMore/AboutMore'
import Experience from '../components/Experience/Experience'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <AboutMore/>
        <Experience/>
        <Footer/>
    </>
  )
}

export default Home