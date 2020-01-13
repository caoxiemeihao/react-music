import React from "react";

import "./Title.styl";

interface ITitleProps {
  name?: string;
  singer?: string;
}

const titleStyle = {
  backgroundImage: `url(${require("@src/assets/icon/back.svg")})`
};

function Title({ name = "", singer = "" }: ITitleProps) {
  return (
    <div className="player-song-name">
      <div className="icon back" style={titleStyle}></div>
      <div className="name">{name}</div>
      <div className="singer">{singer}</div>
    </div>
  );
}

export default Title;
