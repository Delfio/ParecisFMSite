import React, { useEffect } from 'react';

import Logo from '../../assets/logoParecis.svg'
import M from 'materialize-css/dist/js/materialize.min.js';

import { Container } from './styles';
import { Link } from 'react-router-dom';


export default function MenuDefault({id}) {
  

  useEffect(()=>{
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }, [])

  // const [play, setPlay] = useState(false);

  // function playAudio(){
  //   var x = document.getElementById("player");
  //   if(!play){
  //     x.play()
  //     setPlay(true)
  //   }else{
  //     x.pause()
  //     setPlay(false)
  //   }

  // }

  return (
    <>
    <Container>
      <div className="nav-wrapper">
        {/* <audio id="player" src="http://live.hunter.fm/live"></audio> */}
        <div className="container">
          <Link style={{zIndex: 5}} to={id? `/radio/${id}` : '/'} className="brand-logo center">
            <div className="col s12">
              <img className="responsive-img" style={{width: '100%', height: '100%', maxWidth: '80px', maxHeight: '150px', marginTop: 6}} src={Logo} alt=""/>
            </div>
          </Link>
        </div>
        <ul style={{marginRight: '4.5em'}} id="nav-mobile" className="right hide-on-med-and-down">

        </ul>
        {/* <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
      </div>
    </Container>
    </>
  );
}
