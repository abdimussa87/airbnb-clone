import React from 'react'
import './Card.css';
function Card({ src, title, description, price }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{price && `${price}/night`}</h4>
            </div>
        </div>
    )
}

export default Card
