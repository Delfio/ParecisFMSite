import React, {useState, useEffect, memo} from 'react';

import banner from '../../assets/Topo.png'
import bannerMobile from '../../assets/TopMobile.png'

import { DivBanner } from './styles';

function BannerTop(props) {

  const [banner1, setBanner1] = useState({})
  const [banner2, setBanner2] = useState({})

  useEffect(() => {
    const baner1 = props.banner1[0];
    const baner2 = props.banner2[0];
    setBanner1(baner1)
    setBanner2(baner2)
  }, [props])

  return (
    
    <DivBanner bg ={banner2 ? banner2.url : bannerMobile} className="col s12" className="center">
      <div style={{maxHeight: '389px'}} className="col s12 hide-on-small-only">
        <img style={{width: '100%', height: '100%'}} src={banner1? banner1.url: banner} alt=""/>
      </div>
    </DivBanner>
  );
}

export default memo(BannerTop);