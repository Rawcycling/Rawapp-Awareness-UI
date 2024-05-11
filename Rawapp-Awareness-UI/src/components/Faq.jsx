import { useState } from 'react'
import '../styles/Faq.css'
import open_btn from '../assets/open-btn.png'
import close_btn from '../assets/close-btn.png'

const Faq = () => {
    const [answersVisibility, setAnswersVisibility] = useState(new Array(2).fill(false)); // Initialize states for two FAQ items

    const toggleAnswer = (index) => {
      setAnswersVisibility((prevVisibility) => {
        const newVisibility = [...prevVisibility];
        newVisibility[index] = !newVisibility[index];
        return newVisibility;
      });
    };

  return (
    <div className='faq-container'>
        <div className='faq-container__header'>
            <h1>Frequently Asked Questions (FAQ)</h1>
            <p>Answers to Your Common Queries: Empowering You with Knowledge</p>
        </div>

        <div className='faq-contents__container'>

            <div className='faq-contents'>

                <div className='faq-question'>
                    <div className='faq-question__container'>
                    <p className='faq-question__number'>01</p>
                    <p className='actual-faq-question'>How can I start recycling with RawApp?</p>
                    </div>
                    <div className='activation-btn' onClick={() => toggleAnswer(0)}>
                        <img src={answersVisibility[0] ? close_btn : open_btn} alt="" />
                    </div>
                </div>

                {answersVisibility[0] && (
            <div className={`faq-answer ${answersVisibility[0] ? 'show' : ''}`}>
              <p>To begin recycling with RawApp, simply download the app from the App Store or Google Play Store, create an account, and start collecting your recyclables. Drop them off at one of our designated locations, and start earning RawCoins for every item you recycle!</p>
            </div>
          )}
            </div>

            <div className='faq-contents'>

                <div className='faq-question'>
                <div className='faq-question__container'>
                    <p className='faq-question__number'>02</p>
                    <p className='actual-faq-question'> What can I do with my RawCoins?</p>
                    </div>
                    <div className='activation-btn' onClick={() => toggleAnswer(1)}>
                        <img src={answersVisibility[1] ? close_btn : open_btn} alt="" />
                    </div>
                </div>

                {answersVisibility[1] && (
            <div className={`faq-answer ${answersVisibility[1] ? 'show' : ''}`}>
              <p>Download the RawApp from the App Store or Google Play and join the recycling revolution! Set up your account to track your recyclables, then collect them and drop them off at a designated RawApp location. With every item you recycle, you&apos;ll earn RawCoins -  rewards for doing your part for the planet!</p>
            </div>
          )}
            </div>

            <div className='faq-contents'>

                <div className='faq-question'>
                <div className='faq-question__container'>
                    <p className='faq-question__number'>03</p>
                    <p className='actual-faq-question'> What can I do with my RawCoins?</p>
                    </div>
                    <div className='activation-btn' onClick={() => toggleAnswer(2)}>
                        <img src={answersVisibility[2] ? close_btn : open_btn} alt="" />
                    </div>
                </div>

                {answersVisibility[2] && (
            <div className={`faq-answer ${answersVisibility[2] ? 'show' : ''}`}>
              <p>Download the RawApp from the App Store or Google Play and join the recycling revolution! Set up your account to track your recyclables, then collect them and drop them off at a designated RawApp location. With every item you recycle, you&apos;ll earn RawCoins -  rewards for doing your part for the planet!</p>
            </div>
          )}
            </div>

            <div className='faq-contents'>

                <div className='faq-question'>
                <div className='faq-question__container'>
                    <p className='faq-question__number'>04</p>
                    <p className='actual-faq-question'> What can I do with my RawCoins?</p>
                    </div>
                    <div className='activation-btn' onClick={() => toggleAnswer(3)}>
                        <img src={answersVisibility[3] ? close_btn : open_btn} alt="" />
                    </div>
                </div>

                {answersVisibility[3] && (
            <div className={`faq-answer ${answersVisibility[3] ? 'show' : ''}`}>
              <p>Download the RawApp from the App Store or Google Play and join the recycling revolution! Set up your account to track your recyclables, then collect them and drop them off at a designated RawApp location. With every item you recycle, you&apos;ll earn RawCoins -  rewards for doing your part for the planet!</p>
            </div>
          )}
            </div>

        </div>
    </div>
  )
}

export default Faq