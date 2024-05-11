// import React from 'react'
import '../styles/Footer.css'
import rawcycling_logo_v2 from '../assets/rawcycling_logo_v2.png'
import insta_icon from '../assets/insta_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import youtube_icon from '../assets/youtube_icon.png'
import send_icon from '../assets/send_icon.png'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-header'><h1>Waste to Wealth</h1></div>

        <footer>
            <div className='copyright-container'>
                <img src={rawcycling_logo_v2} alt="" />
                <p>Copyright © 2024 Rawcycling</p>
                <p>All rights reserved</p>
                <div className='socials'>
                    <img src={insta_icon} alt="instagram" />
                    <img src={twitter_icon} alt="twitter" />
                    <img src={youtube_icon} alt="youtube" />
                </div>
            </div>

            <div className='company-container'>
                <p className='extra-large'>Company</p>
                <p>About us</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
            </div>

            <div className='support-container'>
            <p className='extra-large'>Support</p>
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
            </div>

            <div className='update-container'>
            <p className='extra-large'>Stay up to date</p>
            <div className="email-field">
                <input type="email" placeholder="Your email address"/>
                <img src={send_icon} alt="" />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer