import React from "react";
import dataset from "../dataset";
import { useState } from "react";

const Menu = ({ header, items, active, setActive }) => {
  const [topic, changeTopic] = useState(0);
  return (
    <div>
      <div
        className={active ? "menu active" : "menu"}
        onClick={() => setActive(false)}
      >
        <div className="blur" />
        <div />
        <div className="menu__content" onClick={e => e.stopPropagation()}>
          <div className="menu__header">
            <h1>Mavzular</h1>
          </div>
          <ul className="menu__list">
            {dataset.map((item, index) => (
              <li className={topic === index ? "active" : ""}>
                <button onClick={() => changeTopic(index)}>
                  {index + 1}. {item.heading}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
