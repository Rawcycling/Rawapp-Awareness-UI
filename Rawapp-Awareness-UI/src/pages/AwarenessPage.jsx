// import React from 'react'
import '../styles/AwarenessPage.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import RawApp from '../components/RawApp'
import Testimonials from '../components/Testimonials'
import DownloadAppPoster from '../components/DownloadAppPoster'
import Faq from '../components/Faq'
import Clients from '../components/Clients'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const AwarenessPage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <RawApp/>
    <Testimonials/>
    <DownloadAppPoster/>
    <Faq/>
    <Clients/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default AwarenessPage