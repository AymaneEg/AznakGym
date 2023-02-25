import React from 'react'
import './AboutGym.css'
import Image1 from './Images/Image1.jfif'
import Image2 from './Images/Image2.jpg'
import Image3 from './Images/Image3.jpg'
import Image4 from './Images/Image4.jpg'

export default function AboutGym() {
  return (
    <div>
       <div className='WelcomeToAznak'>
          <div className='WelcomeText'>
             <div className='WelcomeTextDiv'> 
                <ul>
                    <li>About us</li>
                    <li>Welcome to <span>Aznak</span> </li>
                </ul>
             </div>
             <div className='Paraghrapghs'>
                <p>Welcome to aznak gym and let's get in shape together , We are one team </p>
                <p>We will help help you achive your dream body with our personal trainnig and trainers  </p>
                <p className='ActiveP'>Let's get started</p>
             </div>
          </div>
          <div className='WelcomeImage'> 
                <div className='Image' style={{backgroundImage : `url(${Image1})`}} >

                </div>
                <div className='ImageSlide'>
                    <div className='Images' style={{backgroundImage : `url(${Image2})`}}></div>
                    <div className='Images' style={{backgroundImage : `url(${Image3})`}}></div>
                    <div className='Images' style={{backgroundImage : `url(${Image4})`}}></div>
                </div>
          </div>
       </div>  

       /*  */
    </div>
  )
}
