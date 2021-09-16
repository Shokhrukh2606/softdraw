import React from "react";
import dataset from "../dataset";
import { useState } from "react";

const Menu = ({ header, items, active, setActive, maketopic, topic }) => {
  const changeTopic = (e, index) => {
    e.preventDefault();
    maketopic(index);
    setActive(false);
  };
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
              <li
                key={`menu-${index}`}
                className={topic === index ? "active" : ""}
              >
                <div onClick={e => changeTopic(e, index)}>
                  <p>
                    {index + 1}. {item.heading}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
