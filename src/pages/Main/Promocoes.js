import React from 'react';

// import { Container } from './styles';

export default function Promocoes() {
  return (
    <div className="row grey lighten-5">
      <div className="container">
        <h4 style={{fontWeight: 900, padding: 15}} className="center-align grey-text">Promoções</h4>
        
        <div style={{boxShadow: '0 2px 15px rgba(54, 13, 8, 0.2)', marginBottom: 25, background: 'rgba(230,230,230,0.1)'}} className="carousel">
          <div className="carousel-item center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsB22sz2CssHhS0MYCmW3HoTM-ijbc-v5yRdLVPZwOPOXcgQa&s"/>
            <button style={{borderRadius: 7}} className="btn waves-effect waves-light red" type="submit" name="action">
              Ver Mais
            </button>
          </div>
          <div className="carousel-item center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsB22sz2CssHhS0MYCmW3HoTM-ijbc-v5yRdLVPZwOPOXcgQa&s"/>
            <button style={{borderRadius: 7}} className="btn waves-effect waves-light red" type="submit" name="action">
              Ver Mais
            </button>
          </div>
          <div className="carousel-item center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsB22sz2CssHhS0MYCmW3HoTM-ijbc-v5yRdLVPZwOPOXcgQa&s"/>
            <button style={{borderRadius: 7}} className="btn waves-effect waves-light red" type="submit" name="action">
              Ver Mais
            </button>
          </div>
          <ul className="indicators"><li className="indicator-item red"></li><li className="indicator-item red"></li><li className="indicator-item red"></li></ul>
        </div>
      

      </div>
    </div>
  );
}
