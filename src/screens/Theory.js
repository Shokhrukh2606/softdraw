import React, { useState } from "react";
import dataset from "../dataset";
import Menu from "./Menu";
import Tables from "./Tables";

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
        <button className="ml-3 btn bg-light" onClick={()=>props.setScreen(0)}>Bosh menyu</button>
      </nav>

      <div className="text">
        {/* <Tables /> */}
        <h1>{dataset[topic].heading}</h1>
        <p dangerouslySetInnerHTML={{__html: dataset[topic].text}}></p>
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
