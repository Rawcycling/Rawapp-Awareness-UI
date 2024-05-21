// import React from 'react'
import '../styles/Testimonials.css'
import user_person from '../assets/user_person.png'
import squiggle_2 from '../assets/squiggle_2.png'

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
                <div className='more-squiggles'>
            <div className='another-squiggle_2-container'><img src={squiggle_2} alt="" className='another-squiggle_2'/></div>
        </div>

        <div className='testimonial-container__header'>
        <h1>Testimonial</h1>
        <p>Discover What Our Users Are Saying</p>
        </div>

        <div className='testimonial-container__main'>
            <div className='testimonial-row'>
                <div className='testimonial-row__child'>
                    <p>RawApp has completely changed my perspective on recycling. Not only am I reducing waste, but I&apos;m also earning rewards while doing it. It&apos;s a win-win!</p>
                    <div><img src={user_person} alt="user" /></div>
                </div>

                <div className='testimonial-row__child'>
                    <p>I never thought recycling could be so rewarding until I started using RawApp. Now, I look forward to collecting my recyclables and seeing my RawCoins grow with each drop-off.</p>
                    <div><img src={user_person} alt="user" /></div>
                </div>

            </div>

            <div className='testimonial-row'>
                <div className='testimonial-row__child'>
                    <p>RawApp has made recycling fun and convenient. I love being able to track my progress and redeem rewards for my efforts. It&apos;s a great motivator to keep recycling</p>
                    <div><img src={user_person} alt="user" /></div>
                </div>

                <div className='testimonial-row__child'>
                    <p>As someone who&apos;s passionate about sustainability, RawApp aligns perfectly with my values. It&apos;s easy to use, and I feel good knowing that my recycling efforts are making a positive impact on the environment.</p>
                    <div><img src={user_person} alt="user" /></div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonials