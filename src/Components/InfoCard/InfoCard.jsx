import React from 'react'
import './InfoCard.css'

const InfoCard = ({eldenRingData}) => {


    const data = eldenRingData[Math.floor(Math.random() * eldenRingData.length)]
  console.log(eldenRingData);
  return (
    <div className='infoCard'>
    <h2>{data.name}</h2>
    <img className='image' src={data.image} />
    <p>{data.description}</p>
    </div>
  )


}

export default InfoCard
