import React from 'react';

import { Link } from "react-router-dom";

const NAVIGATION_LINKS = [{
  name: "Search",
  link: "/",
}, {
  name: "My Content",
  link: "/my-content",
}];

const NavigationBar = () => {
  return (
    <div id="navigation-bar">
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">MovieList App</li>
            { NAVIGATION_LINKS.map( item => {
              return (
                <li key={`${item.name}/${item.link}`}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;