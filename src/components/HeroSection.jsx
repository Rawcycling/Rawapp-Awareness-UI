// import React from 'react'
import '../styles/HeroSection.css'
import hero_flag from '../assets/hero_flag.png'
import app_stores from '../assets/app_stores.png'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className='flag-container'>
            <img src={hero_flag} alt="Recycle. Reward. Repeat." />
        </div>

        <div className='download-app-container'>
            <img src={app_stores} alt="App stores" />
        </div>
    </div>
  )
}

export default HeroSection