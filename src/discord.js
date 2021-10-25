import React from "react";
import discord from './images/discord.png';


const Discord = () => {

    return (

        <div className="discord-section">
            <div className="container">
                <div className="discord-content">
                    <h2>Join the Community</h2>
                    <p>Borgar Discord already has over 500 members! If you want to join the #BorgarArmy it’s here. Join us to get the news as soon as possible and follow our latest announcements.</p>
                    <a href="https://discord.gg/borgar" target="_blank" rel="noopener noreferrer nofollow" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        background: '#6665D2',
                        borderRadius: '5px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontWeight: '700',
                        padding: '18px 50px',
                        margin: '0'
                    }}><span style={{paddingRight: '10px'}}><img src={discord} alt="" style={{width: '24px'}} /></span> Join Our Discord</a>
                </div>
            </div>
        </div>
        
    )
}

export default Discord