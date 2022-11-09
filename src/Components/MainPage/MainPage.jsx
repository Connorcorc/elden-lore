import React from 'react'
import InfoCard from '../InfoCard/InfoCard.jsx'
import './MainPage.css'
import audio from '../../Assets/souls-of-fire.mp3'


const playAudio = () => {
  new Audio(audio).play()
}

const MainPage = ({eldenRingData}) => {
  const data = eldenRingData[Math.floor(Math.random() * eldenRingData.length)]
  const infoCard = eldenRingData.map(data => {
    return (
      <InfoCard
        name={data.name}
        image={data.image}
        description={data.description}
        location={data.location}
        id={data.id}
        key={data.id}
      />
    )
  })

  return (
    <div className='infoContainer' onLoad={playAudio} muted="muted">
      <button className='audio' onClick={playAudio}>🔈</button>
      {infoCard}
    </div>
  )
}

export default MainPage
