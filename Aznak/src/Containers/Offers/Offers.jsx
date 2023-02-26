import React from 'react'
import './Offers.css'
import img1 from './Images/img1.jpeg'
import img2 from './Images/img2.jpeg'
import spinnig from './Images/spinning.png'
import tradmill from './Images/weightlifting.png'
import weightlifting from './Images/treadmill.png'
export default function Offers() {
  return (
    <div className='OffersContainer'>
       <div className='OfferSection'>
           
           <div style={{backgroundImage : ` linear-gradient(to bottom, rgba(3, 3, 3, 0.10), rgba(0, 0, 0, 0.3)), url(${img1})`}} ></div>
           <div className='OfferDescription'> 
              <div>
                  <p>Introduce</p>
                  <h2>All Our Offers</h2>
              </div>
              <div>
                 <ul>
                    <li>
                        <img src={spinnig} />
                        <div>
                            <h3>Spinnig sessions</h3>
                            <p>Azank gym offers you a Spenning sessions for more fat burrning</p>
                        </div>
                    </li>
                    <li>
                    <img src={tradmill} />
                        <div>
                            <h3>Body building</h3>
                            <p>Body bulding programs that will help you gain more weight</p>
                        </div>
                    </li>
                    <li>
                    <img src={weightlifting} />
                        <div>
                            <h3>Cardio</h3>
                            <p>Cardio session to get a shape body</p>
                        </div>
                    </li>
                 </ul>
              </div>
           </div>

       </div>


       <div className='OfferSection'>
           <div className='OfferDescription'>
           <div>
                  <p>Introduce</p>
                  <h2>Pricing Promotions</h2>
              </div>
              <div>
                 <ul>
                    <li>
                        <img src={spinnig} />
                        <div>
                            <h3>Spinnig sessions</h3>
                            <p>Azank gym offers you a Spenning sessions for more fat burrning</p>
                        </div>
                    </li>
                    <li>
                    <img src={tradmill} />
                        <div>
                            <h3>Body building</h3>
                            <p>Body bulding programs that will help you gain more weight</p>
                        </div>
                    </li>
                    <li>
                    <img src={weightlifting} />
                        <div>
                            <h3>Cardio</h3>
                            <p>Cardio session to get a shape body</p>
                        </div>
                    </li>
                 </ul>
              </div>
           </div>
           <div  style={{backgroundImage : ` linear-gradient(to bottom, rgba(3, 3, 3, 0.20), rgba(0, 0, 0, 0.73)), url(${img2})`}}></div>
       </div>

    </div>
  )
}
