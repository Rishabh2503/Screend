import React, { Component } from 'react'
import "../card/card.css"
export default class card extends Component {
  render() {
    return (
        <>        
        <div className="card">
            
        <div className="card-img"> </div>
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
