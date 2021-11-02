import React from "react";
import ReactDOM from "react-dom";
import Roadmap from "./roadmap";
import Discord from "./discord";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/theme.css";
import "./styles/main-style.css";
import discord from './images/discord-icon-small.png';
import twitter from './images/twitter-icon-small.png';
// import opensea from './images/opensea-icon-small.png';
import thong from './images/borgar-thong.png';
import borgarBlack from './images/borgar-black.png';
import AboutSection from "./about-us";
import Footer from "./footer";
import MeetUs from "./meet-us";
import Nav from "./nav";
import Home from "./home";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>

  <Router>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>

  </Provider>,
  document.getElementById("root")
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();