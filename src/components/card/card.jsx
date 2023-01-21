import React, { Component } from 'react'
import "../card/card.css"
import cardimg from "..//../Image/bat.jpg"
export default class card extends Component {
  render() {
    return (
        <>        
        <div className="card">
            
        <div className="card-img"><img src={cardimg} alt="" /></div>
        <ul className="social-media">
        <li><button className='button-5'>Book Now</button></li>
        <li><button className='button-5'>Read More</button></li>
</ul>
<div className="card-info">
  <p className="title">Race1</p>
  <p className="subtitle">⭐⭐⭐⭐⭐</p>
</div>
</div>
</>

    )

  }
}
