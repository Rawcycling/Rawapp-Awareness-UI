// import React from 'react'
import '../styles/RawApp.css'
import squiggle_1 from '../assets/squiggle_1.png'
import squiggle_2 from '../assets/squiggle_2.png'
import squiggle_3 from '../assets/squiggle_3.png'
import squiggle_4 from '../assets/squiggle_4.png'
import screen_1 from '../assets/screen_1.png'
import screen_2 from '../assets/screen_2.png'
import screen_3 from '../assets/screen_3.png'

const RawApp = () => {
  return (
    <div className='rawapp-container'>
        <div className='squiggles'>
            <div className='squiggle_1-container'><img src={squiggle_1} alt="" className='squiggle_1'/></div>
            <div className='squiggle_2-container'><img src={squiggle_2} alt="" className='squiggle_2'/></div>
            <div className='squiggle_3-container'><img src={squiggle_3} alt="" className='squiggle_3'/></div>
            <div><img src={squiggle_4} alt="" className='squiggle_4'/></div>
        </div>

        <div className='rawapp-container__header'>
            <h1>RawApp</h1>
            <p>Recycle. Reward. Repeat.</p>
        </div>

        <div className='features-container'>
                <div className='feature-one'>
                    <div className='feature-img'>
                        <img src={screen_1} alt="Experience the Heart of RawApp" />
                    </div>
                    <div className='feature-text'>
                        <h1>Experience the Heart of RawApp: Your Personalized Dashboard</h1>
                        <p>Step into a world of eco-friendly empowerment with the User Dashboard. Here, your recycling journey comes to life as you track your RawCoin balance, delve into your transaction history, and uncover exclusive rewards customized just for you. With a sleek design and intuitive interface, the User Dashboard is your ultimate tool for making a meaningful impact on the environment while earning rewards along the way.</p>
                    </div>
                </div>

                <div className='feature-two'>
                    <div className='feature-text'>
                        <h1>Turn Your Recycling Efforts into Rewards: Cash Out Your RawCoins</h1>
                        <p>Ready to turn your eco-conscious actions into tangible rewards? The Cashout Page is your gateway to unlocking the value of your recycling efforts. Whether you choose to exchange your RawCoins for cash or redeem them for essential amenities, this page offers a seamless and rewarding experience. With just a few taps, watch as your eco-friendly contributions translate into real-world benefits, making every recycling endeavor truly worthwhile.</p>
                    </div>
                    <div className='feature-img'>
                        <img src={screen_2} alt="Turn Your Recycling Efforts into Rewards" />
                    </div>
                </div>

                <div className='feature-three'>
                    <div className='feature-img'>
                        <img src={screen_3} alt="Track Your Eco-Footprint" />
                    </div>
                    <div className='feature-text'>
                        <h1>Track Your Eco-Footprint: Dive into Your Recyclable Top-Up History</h1>
                        <p>Take a journey through your eco-endeavors with the Recyclable Top-Up History feature. Here, you can explore a detailed record of your recycling contributions, including the weight of recyclables you&apos;ve deposited and the corresponding RawCoins earned. Dive deep into your eco-footprint, review your inputted data for accuracy, and celebrate your environmental impact with confidence. With transparency and clarity at its core, the Recyclable Top-Up History page empowers you to take ownership of your recycling journey and make every contribution count.</p>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default RawApp