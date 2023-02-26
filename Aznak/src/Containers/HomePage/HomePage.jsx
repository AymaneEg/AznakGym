import React from 'react'
import './HomePage.css'
import HomePageButton from '../../StyledComponents/buttons'
// import 'boxicons'        

export default function HomePage() {

function scrolltoElement(){
  var elemet = document.getElementById("WelcomeToAznak");
  elemet.scrollIntoView()
}

  return (
    <div className='HomePage'>
        <h1>Let's get in shape <br /> with <span>Aznak</span> </h1>
        <div>
          <HomePageButton onClick={ ()=> scrolltoElement()}>See More 
             {/* <i class='bx bx-down-arrow-alt' style='color:#f3f30a'  ></i>   */}
          </HomePageButton>
        </div>
    </div>
  )
}
