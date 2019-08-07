import React, { Component } from "react";
import "../component-styles/header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="innerHeader">
          <div className="logoContainer">
            <h1>
              Yelp<span>Serbia</span>
            </h1>
          </div>
          <ul className="navigation">
            <Link to="/">
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to="/news">
              <li>
                <span>News</span>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <span>Contact</span>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <span>About</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
