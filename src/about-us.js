import React from "react";


const AboutSection = () => {

    return (

        <div className="roadmap-section" id="faq">
            <div className="container">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{color: '#7836FF', textShadow: '0 10px 75px rgba(120, 54, 255, 1.0)', textAlign: 'center'}}>Learn About Us</h2>
                    <h3 style={{textAlign: 'center'}}>Frequently Asked Questions about Borgar</h3>
                    <p style={{maxWidth: '695px', textAlign: 'center', paddingBottom: '50px'}}>Here are many questions we get asked on a daily basis regarding Borgar and CryptoKitchenLabs. If you have any other questions, please reach out and remember, Borgar is life. Go eat.</p>
                </div>
                <div className="box-about-section">
                    <div className="about-box">
                        <p className="step-time">.01</p>
                        <div className="content">
                            <h2>What is CryptoKitchenLabs (CKL)?</h2>
                            <p>CryptoKitchenLabs is a collective of creators who decided to band together to push positive change while making dope ass artwork.</p>
                        </div>
                    </div>
                    <div className="about-box">
                        <p className="step-time">.02</p>
                        <div className="content">
                            <h2>What is a Borgar?</h2>
                            <p>Borgar is a collection of 10,000 unique Burger themed NFTs grilled up and ready to be served on the Ethereum blockchain.</p>
                        </div>
                    </div>
                    <div className="about-box">
                        <p className="step-time">.03</p>
                        <div className="content">
                            <h2>How to mint a Borgar?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="about-box">
                        <p className="step-time">.04</p>
                        <div className="content">
                            <h2>What are the perks of owning a Borgar?</h2>
                            <p>You can find info on this in our discord, come say hi and ask any questions you may have!: <span><a href="https://discord.gg/borgar" target="_blank" rel="noopener noreferrer nofollow" style={{color: '#7836FF',}}>discord.gg/Borgar</a></span>.</p>
                        </div>
                    </div>
                    <div className="about-box">
                        <p className="step-time">.05</p>
                        <div className="content">
                            <h2>What is the Borgar Council?</h2>
                            <p>The Borgar Council will be a 9-member group of community members who will help make decisions regarding monthly funds and goals. This will serve as a way for us to concentrate the ideas and concerns from the community.</p>
                        </div>
                    </div>
                    <div className="about-box">
                        <p className="step-time">.06</p>
                        <div className="content">
                            <h2>How do I partner with Borgar?</h2>
                            <p>Please contact us directly at <span><a href="mailto:Cryptokitchenlabs@gmail.com" style={{color: '#7836FF',}}>Cryptokitchenlabs@gmail.com</a></span> for partnership inquiries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )

}

export default AboutSection