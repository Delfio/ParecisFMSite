import React from 'react';

// import { Container } from './styles';

export default function RadioMobile() {
  return (
    <div className="row hide-on-large-only">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="col s12 center">
        <audio 
          style={{
            boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
            borderRadius: 17,
            marginTop: 15
          }} controls id="player" src="http://live.hunter.fm/live"></audio>
      </div>
    </div>
  );
}
