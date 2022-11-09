import React from 'react'
import logo from '../../Assets/logo.png'
import './LandingPage.css'
import audio from '../../Assets/sword-blade-slash-metallic.wav'

const playAudio = () => {
  new Audio(audio).play()
}

const LandingPage = () => {
  return (
    <div className='mainContainer'>
    <img className='logoImage' src={logo} / >
    <button className='exploreButton' onClick={playAudio}>Explore Lore</button>
    </div>

  )
}

export default LandingPage
