import React from 'react'
import { Link } from 'react-router-dom'
import InfoCard from '../InfoCard/InfoCard.jsx'
import './MainPage.css'
import audio from '../../Assets/souls-of-fire.mp3'


const playAudio = () => {
  new Audio(audio).play()
}

const pauseAudio = () => {
  new Audio(audio).pause()
}
const MainPage = ({eldenRingData}) => {
  const data = eldenRingData[Math.floor(Math.random() * eldenRingData.length)]
  const infoCard =
    <InfoCard
        name={data.name}
        image={data.image}
        description={data.description}
        location={data.location}
        id={data.id}
        key={data.id}
    />

  console.log(data)

  return (
    <div className='infoContainer' onLoad={playAudio} muted="muted">
      <Link className='home' to='/' onClick={pauseAudio}> Home </Link>
      {infoCard}
    </div>
  )
}

export default MainPage
