import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit incidunt ab quibusdam. Nulla fugit, sint libero in a minima cum veniam ad dignissimos explicabo adipisci labore, suscipit sunt? Placeat voluptates nulla nihil sit quae.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About;