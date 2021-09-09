import React, { useState } from "react";
import dataset from "../dataset";
import Menu from "./Menu";

const Theory = props => {
  const [topic, changeTopic] = useState(0);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
        <Menu active={menuActive} setActive={setMenuActive} />
      </nav>
      <div className="text">
        <h1>{dataset[topic].heading}</h1>
        <p>{dataset[topic].text}</p>
      </div>
    </div>

    // <div className="container-fluid theory">
    //   <div className="row">
    //   	<div className="col-md-3 sidebar">
    // <ul>
    // 	{
    // 		dataset.map((item, index)=>(
    // 				<li className={topic===index?"active":""}>
    // 					<button onClick={()=>changeTopic(index)}>
    // 						{index+1}. {item.heading}
    // 					</button>
    // 				</li>
    // 			))
    // 	}
    // </ul>
    //   	</div>
    //   	<div className="col-md-9 text">
    //   		<h1>
    //   			{dataset[topic].heading}
    //   		</h1>
    //   		<p>
    //   			{dataset[topic].text}
    //   		</p>

    //   	</div>
    //   </div>
    //  </div>
  );
};

export default Theory;
