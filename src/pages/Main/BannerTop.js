import React from 'react';

import banner from '../../assets/Topo.png'

// import { Container } from './styles';

export default function BannerTop() {
  return (
    <div className="col s12" className="center">
      <div style={{maxHeight: '389px'}} className="col s12">
        <img style={{width: '100%', height: '100%'}} src={banner} alt=""/>
      </div>
    </div>
  );
}
