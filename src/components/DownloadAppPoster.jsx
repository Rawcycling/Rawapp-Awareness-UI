// import React from 'react'
import '../styles/DownloadAppPoster.css'
import store_btn_img from '../assets/store_btn_img.png'
import iphone_img from '../assets/iphone_img.png'
import squiggle_5 from '../assets/squiggle_5.png'

const DownloadAppPoster = () => {
  return (
    <div className='poster-container'>

                <div className='more-more-squiggles'>
            <div className='squiggle_5-container'><img src={squiggle_5} alt="" className='squiggle_5'/></div>
        </div>
        <div className='poster-container__text'>
            <h1>Download App</h1>
            <p>Ready to make a difference? Join Rawcycling today and become a part of the recycling revolution! Whether you&apos;re passionate about protecting the environment, earning rewards for your efforts, or simply want to contribute to a cleaner, greener future, Rawcycling welcomes you with open arms.</p>
            <img src={store_btn_img} alt="download app" />
        </div>

        <div className='poster-container__img'>
            <img src={iphone_img} alt="" />
        </div>
    </div>
  )
}

export default DownloadAppPoster