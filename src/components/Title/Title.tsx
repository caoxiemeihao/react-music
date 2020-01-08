import React from 'react';

import './Title.styl';

interface ITitleProps {
  name?: string;
  singer?: string;
}

function Title({ name = '', singer = '' }: ITitleProps) {
  return (
    <div className="player-song-name">
      <div className="name">{name}</div>
      <div className="singer">{singer}</div>
    </div>
  );
}

export default Title;
