import React, { useState } from "react";
import dataset from "../datasetvideo";
import Menu from "./MenuVideo";


const Theory = props => {
  const [topic, changeTopic] = useState(0);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
        <Menu topic={topic} maketopic={changeTopic} active={menuActive} setActive={setMenuActive} />
        <button className="ml-3 btn bg-light" onClick={() => props.setScreen(0)}>Bosh menyu</button>
      </nav>

      <div className="text">
        {/* <Tables /> */}
        <h1>{dataset[topic].heading}</h1>
        <p dangerouslySetInnerHTML={{ __html: dataset[topic].text }}></p>
      </div>
    </div>

  );
};

export default Theory;
