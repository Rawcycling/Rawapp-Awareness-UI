// import React from 'react'
import waitlist_hero from '../assets/waitlist_hero.png'
import arrow_right from '../assets/ArrowRight.png'

const WaitlistHero = () => {
  return (
    <div className='waitlist-container'>
    <div className="waitlist-img">
        <img src={waitlist_hero} alt="RawCycling App Coming Soon" />
      </div>

      <div className="waitlist-form">
      <h2>Join The Waitlist For  <br />The <span>RawCycling Mobile App</span></h2>
      <form>
        <input type="text" placeholder="Fullname" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Join the waitlist <img src={arrow_right} alt="" /></button>
      </form>
    </div>
      </div>
  )
}

export default WaitlistHero