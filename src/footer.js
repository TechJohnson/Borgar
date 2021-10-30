import React from "react";
import logo from './images/borgar-logo.png';
import discord from './images/discord-icon-small.png';
import twitter from './images/twitter-icon-small.png';
// import opensea from './images/opensea-icon-small.png';


const Footer = () => {

    return (

        <div className="footer">
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3P803WJ2FG"></script>
                <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-3P803WJ2FG');
                </script>

            <div className="container">
                <div className="footer-section">
                    <img src={logo} alt="" style={{margin: '0 auto'}} />
                    <div className="social">
                    {/* <a href="https://twitter.com/BorgarNFT" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={opensea} alt="Logo" />
                    </a> */}
                    <a href="https://discord.gg/borgar" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={discord} alt="Logo" />
                    </a>
                    <a href="https://twitter.com/BorgarNFT" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={twitter} alt="Logo" />
                    </a>
                </div>
                <p>©2021 CryptoKitchenLabs, LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
        
    )

}

export default Footer