import React, { Component } from 'react'
import "../card/card.css"
import ShowDetails from '../../Pages/ShowDetails'
import { Link } from 'react-router-dom';
const Card = ({ name, image }) => {
  
    
    return (
        <>        
        <div className="card">
            
        <div className="card-img"><img src={image} alt={name}/></div>
        <ul className="social-media">
        <li><button className='button-5' ><Link to="/show-details">Read More</Link></button></li>
         </ul>
         <div className="card-info">
        <p className="title">{name}</p>
      <p className="subtitle">⭐⭐⭐⭐⭐</p>
        </div>
          </div>
</>

    )

}
export default Card