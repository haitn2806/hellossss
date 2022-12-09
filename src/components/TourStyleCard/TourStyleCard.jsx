import React from 'react';
import './style.css'

const TourStyleCard = ({data}) => {
  return (
    <div className='tour-style-container'>
      <div className="tour-style-title">
    <h1 className="tour-style-h1">{data.title}</h1>
    <hr className="tour-style-hr" />
  </div>
  <div className="tour-style-content">
    <p className='white'>{data.content}</p>
  </div>
  </div>
  )
}

export default TourStyleCard