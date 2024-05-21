import { useState } from 'react';
import waitlist_hero from '../assets/waitlist_hero.png';
import arrow_right from '../assets/ArrowRight.png';
import success_icon from '../assets/success_icon.png';

const WaitlistHero = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='waitlist-container'>
      <div className="waitlist-img">
        <img src={waitlist_hero} alt="Rawcycling App Coming Soon" />
      </div>

      <div className={`waitlist-form ${submitted ? 'flip' : ''}`}>
        {!submitted ? (
          <>
            <h2>Join The Waitlist For <br />The <span>Rawcycling Mobile App</span></h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Fullname" required />
              <input type="email" placeholder="Email" required />
              <button type="submit">Join the waitlist <img src={arrow_right} alt="arrow right" /></button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <img src={success_icon} alt="Success" />
            <h2>Success!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default WaitlistHero;
