import React from 'react'
import './InfoCard.css'

const InfoCard = ({name, location, image, id, description }) => {
  return (
    <div className='infoCard'>
    <h2>{name}</h2>
    <img src={image} />
    <p>{description}</p>
    </div>
  )


}

export default InfoCard
