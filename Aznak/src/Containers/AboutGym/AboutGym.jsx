import React, { useEffect, useState } from 'react'
import './AboutGym.css'
import Image1 from './Images/Image1.jfif'
import Image2 from './Images/Image2.jpg'
import Image3 from './Images/Image3.jpg'
import Image4 from './Images/Image4.jpg'

export default function AboutGym() {

  const [scrollY , setscrollY] =useState(0);
  const [Scrolled , setscrolled] =useState(false);

  window.addEventListener("scroll" , ()=>{
     setscrollY(window.scrollY);
  }) 


  useEffect(()=>{
      if(scrollY >= 350){
        setscrolled(true)
      }
      else{
         setscrolled(false)
      }
  } ,  [scrollY])



  return (
    <div>
       <div className='WelcomeToAznak' id='WelcomeToAznak'>
          <div className='WelcomeText'>
             <div className={Scrolled ? 'WelcomeTextDiv active' : 'WelcomeTextDiv'}> 
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

       
       <div className='MemberShip'>

         <div className='MembreTitle'>
            <p>Pricing Table</p>
           <h1>Membre Ship Plans </h1>  
         </div> 

         <div className='Cards'>
             <div>
                  <div className='Price'>
                      <h1>250 Mad</h1>
                  </div>
                  <div className='Time'> 
                     <p>One month membrechip</p>
                  </div>
                  <div className='Types'>
                     <ul>
                        <li>Fitness</li>
                        <li>Spinning</li>
                        <li>cardio</li>
                        <li>Crossfit</li>
                     </ul>
                  </div>

             </div>

             <div>
             <div className='Price'>
                      <h1>1200 Mad</h1>
                  </div>
                  <div className='Time'> 
                     <p>6 monthes membrechip</p>
                  </div>
                  <div className='Types'>
                     <ul>
                        <li>Fitness</li>
                        <li>Spinning</li>
                        <li>cardio</li>
                        <li>Crossfit</li>
                     </ul>
                  </div>
             </div>
             <div>
             <div className='Price'>
                      <h1>1999 Mad</h1>
                  </div>
                  <div className='Time'> 
                     <p>1 year membrechip</p>
                  </div>
                  <div className='Types'>
                     <ul>
                        <li>Fitness</li>
                        <li>Spinning</li>
                        <li>cardio</li>
                        <li>Crossfit</li>
                     </ul>
                  </div>
             </div>
         </div>
          
       </div> 

    </div>
  )
}
