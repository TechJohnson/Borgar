import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
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
import opensea from './images/opensea-icon-small.png';
import logo from './images/borgar-logo.png';
import thong from './images/borgar-thong.png';
import borgarBlack from './images/borgar-black.png';
import AboutSection from "./about-us";
import Footer from "./footer";

ReactDOM.render(
  <Provider store={store}>
    
    <header className="header">
      <div className="container">

        <nav className="nav">
          <img src={logo} alt="" style={{width: '150px'}} />
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
            <a href="https://twitter.com/BorgarNFT" target="_blank" rel="noopener noreferrer nofollow">
              <img src={opensea} alt="Logo" />
            </a>
            <a href="https://discord.gg/borgar" target="_blank" rel="noopener noreferrer nofollow">
              <img src={discord} alt="Logo" />
            </a>
            <a href="https://twitter.com/BorgarNFT" target="_blank" rel="noopener noreferrer nofollow">
              <img src={twitter} alt="Logo" />
            </a>
          </div>
        </div>

      </div>
    </header>



    <main className="main-content">

      <div className="ntf-section">
        <div className="container">
          <div className="twoSplit">
            <div>
              <h2 style={{color: '#7836FF', textShadow: '0 10px 75px rgba(120, 54, 255, 1.0)',}}>10,000 Unique NFTs</h2>
              <h3>Launching on the ETH Blockchaim</h3>
              <p>Borgar is a collection of 10,000 unique NFTs launching on the ETH Blockchain on 11/5. Our mission is to donate 10% of Mint and 10% of Monthly Royalties to charities that provide meals to those in need.</p>
            </div>
            <div>
            <img src={thong} alt="Logo" />
            </div>
          </div>
        </div>
      </div>

      <Roadmap />

      <Discord />

      <div className="about-section">
        <div className="container">
          <div className="twoSplit">
            <div>
              <img src={borgarBlack} alt="Logo" />
            </div>
            <div style={{paddingLeft: '20px'}}>
              <h2 style={{color: '#0FF289', textShadow: '0 10px 75px rgba(15, 242, 137, 1.0)',}}>CryptoKitchenLabs </h2>
              <h3>Who are we?</h3>
              <p style={{paddingBottom: '40px'}}>CryptoKitchenLabs (CKL) We are a collective of creatives who are hell-bent on making positive impact through digital art. We’re musicians, graphic artists, content creators, crypto investors, NFT enthusiasts, and most importantly, BORGAR.</p>
              <a href="/" style={{
                background: "#0FF289",
                color: '#ffffff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '700',
                boxShadow: '0 5px 25px rgba(15, 242, 137, .65)',
                padding: '10px 40px',
                margin: '0' 
              }}>About Us</a>
              <a href="https://discord.gg/borgar"  target="_blank" rel="noopener noreferrer nofollow" style={{
                fontSize: '1.125rem',
                color: '#534868',
                padding: '0',
                marginLeft: '50px'
              }}>Join the Discord Community</a>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />

      <Footer />

    </main>


  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();