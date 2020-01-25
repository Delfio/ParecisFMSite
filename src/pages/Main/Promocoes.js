import React from 'react';

// import { Container } from './styles';

export default function Promocoes() {
  return (
    <div className="row grey lighten-3">
      <div className="container center">
        <h4 style={{fontWeight: 900, padding: 15}} className="center-align grey-text">Promoções</h4>
        
        <div className="carousel">
          <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
          <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
          <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
          <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
          <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
        </div>
      

      </div>
    </div>
  );
}
