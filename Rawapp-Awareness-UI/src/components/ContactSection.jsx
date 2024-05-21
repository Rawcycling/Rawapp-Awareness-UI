// import React from 'react'
import '../styles/ContactSection.css'
import map_img from '../assets/map_img.png'
import phone_icon from '../assets/phone_icon.png'
import mail_icon from '../assets/mail_icon.png'

const ContactSection = () => {
  return (
    <div className='contact-container'>
        <div className='map-container'><img src={map_img} alt="location" /></div>

        <div className='form-container'>
            <h1 className='form-container__header'>Get in <span>Touch</span></h1>
            <p className='form-container__sub-header'>Questions or feedback? Reach out for prompt assistance. We&apos;re here to help!</p>

            <div className='contact-details'>
                <div className='phone-number-container'>
                    <div className='phone-img__container'><img src={phone_icon} alt="+234 904 240 1678" /></div>
                    <div className='contact-details__actual'>
                        <p>PHONE</p>
                        <p className='colored-text'>+234 904 240 1678</p>
                    </div>
                </div>

                <div className='mail-container'>
                    <div className='mail-img__container'><img src={mail_icon} alt="rawcyclinginfo@gmail.com" /></div>
                    <div className='contact-details__actual'>
                        <p>EMAIL</p>
                        <p className='colored-text'>rawcycling@help.com</p>
                    </div>
                </div>
            </div>

            <div className='actual-form'>
                <form action="" method="post">
                <div className="form-header">

                <div className="text-form-field">
                <input type="text" placeholder="Name *" required/>
                </div>

                <div className="text-form-field">
                <input type="email" placeholder="Email" />
                </div>

                <div className="text-form-field">
                <input type="tel" placeholder="Phone number *" />
                </div>

                <div className="form-field">
                <textarea placeholder="Message *"></textarea>
                </div>

                <div className="form-btn">
                <button type="submit">SEND</button>
                </div>
            </div>
                </form>
            </div>


        </div>
    </div>
  )
}

export default ContactSection