import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/theme.css";
import "./styles/main-style.css";

ReactDOM.render(
  <Provider store={store}>


    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="site-name">Borgar</a>
          <div className="nav-copy">
            <a href="#" className="links">Meet the Team</a>
            <a href="#" className="links">FAQs</a>
            <a href="#" className="white-btn">Mint Me!</a>
          </div>
        </nav>
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