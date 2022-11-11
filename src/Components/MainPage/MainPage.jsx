import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfoCard from '../InfoCard/InfoCard.jsx'
import './MainPage.css'
import audio from '../../Assets/souls-of-fire.mp3'
import logo from '../../Assets/elden-ring.png'
import getData from '../../api-calls.js'


const MainPage = () => {
  const [eldenRingData, setEldenRingData] = useState([])

  const playAudio = () => {
    new Audio(audio).play()
  }

  const pauseAudio = () => {
    audio.pause()
  }

  const fetchData = (clickData) => {
    getData(clickData)
    .then(data => setEldenRingData(data.data))

  }


  console.log(eldenRingData)
  return (

    <div  onLoad={playAudio} muted="muted">
      <div className='header'>
        <Link className='home' to='/' onClick={pauseAudio}><img className="logo" src={logo} /></Link>
      <h1 className='headerText'>Elden Lore</h1>

      </div>

      <div className='mainBox'>
        <sidebar className='sidebar'>
          <h2 className='creatures' onClick={() => fetchData('creatures')}>Creatures</h2>
          <h2 className='zones' onClick={() => fetchData('locations')}>Zones</h2>
        </sidebar>
        <div className='infoContainer'>
          {eldenRingData.length > 0 && <InfoCard eldenRingData={eldenRingData}/>}
        </div>
      </div>
    </div>
  )
}

export default MainPage
