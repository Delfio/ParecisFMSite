import React from 'react';

// import { Container } from './styles';

export default function RadioMobile() {
  return (
    <div className="row hide-on-med-and-up">
      <div className="col s12 center">
        <audio controls id="player" src="http://live.hunter.fm/live"></audio>
      </div>
    </div>
  );
}
