import React from "react";
import ReactDOM from "react-dom";
import Player from "@src/Player";
import { songs } from "@src/common/songs";

import "./App.styl";

ReactDOM.render(<Player playList={songs} />, document.getElementById("root"));
