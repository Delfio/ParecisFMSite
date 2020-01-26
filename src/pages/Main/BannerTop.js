import React from 'react';

import banner from '../../assets/Topo.png'
import bannerMobile from '../../assets/TopMobile.png'

import { DivBanner } from './styles';

export default function BannerTop() {
  return (
    <DivBanner bg ={bannerMobile} className="col s12" className="center">
      <div style={{maxHeight: '389px'}} className="col s12 hide-on-small-only">
        <img style={{width: '100%', height: '100%'}} src={banner} alt=""/>
      </div>
    </DivBanner>
  );
}
