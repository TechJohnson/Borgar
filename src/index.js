import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/theme.css";
import "./styles/main-style.css";
import discord from './images/discord-icon-small.png';
import twitter from './images/twitter-icon-small.png';
import opensea from './images/opensea-icon-small.png';

ReactDOM.render(
  <Provider store={store}>


    <header className="header">
      <div className="container">

        <nav className="nav">
          <a href="/" className="site-name">Borgar</a>
          <div className="nav-copy">
            <a href="/" className="links">Meet the Team</a>
            <a href="/" className="links">FAQs</a>
            <App />
          </div>
        </nav>

        <div className="showcase">
          <h1> Where Everyone Eats</h1>
          <a href="/" className="white-btn-2">I Want A Borgar!</a>
          <div className="social">
            <a href="/">
              <img src={opensea} alt="Logo" />
            </a>
            <a href="/">
              <img src={discord} alt="Logo" />
            </a>
            <a href="/">
              <img src={twitter} alt="Logo" />
            </a>
          </div>
        </div>

      </div>
    </header>


  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// THIS IS THE WORKING APP PAGE FOR LATER     {/* <App /> */}