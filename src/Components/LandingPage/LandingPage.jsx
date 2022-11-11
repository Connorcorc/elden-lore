import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import './LandingPage.css'
import audio from '../../Assets/sword-blade-slash-metallic.wav'

const playAudio = () => {
  new Audio(audio).play()
}

const LandingPage = ({getData}) => {
  return (
    <div className='mainContainer'>
      <div>
        <img className='logoImage' src={logo} / >
      </div>
      <Link to="/main">
        <button className='exploreButton' onClick={playAudio}>Explore Lore</button>
      </Link>
    </div>

  )
}

export default LandingPage
