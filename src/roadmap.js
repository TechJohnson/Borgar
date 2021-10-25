import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import step1 from './images/step-1.png';
import step0 from './images/step-0.png';
import step1time from './images/step-1-time.png';


const Roadmap = () => {

    return (

        <div className="roadmap-section">
            <div className="container">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{color: '#0FF289', textShadow: '0 10px 75px rgba(15, 242, 137, 1.0)', textAlign: 'center'}}>Our Roadmap</h2>
                    <h3 style={{textAlign: 'center'}}>Launching on the ETH Blockchain</h3>
                    <p style={{maxWidth: '695px', textAlign: 'center'}}>Our Roadmap is a hybrid mint/time-based roadmap – We did this to ensure that the team and community continue to push towards goals even after sell out.</p>
                </div>
            </div>

            <div className="container">
                <Tabs>
                    <TabList>
                        <Tab>Mint</Tab>
                        <Tab>Time</Tab>
                    </TabList>

                    {/* Mint Roadmap */}
                    <TabPanel>
                        <div className="box">
                            <img src={step1} alt="" />
                            <p className="step-mint">.01</p>
                            <div className="content">
                                <h2>Borgar Giveaway</h2>
                                <p>We’re giving away 1 Borgar every 10% Minted/1 ETH every 25% Minted.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-mint">.02</p>
                            <div className="content">
                                <h2>Charity Wallet</h2>
                                <p>0.01%: Charity wallet begins drawing 10% of royalties to be given to a community-chosen charity every month.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-mint">.03</p>
                            <div className="content">
                                <h2>Rare Borgar Giveaway</h2>
                                <p>25%: 3 rare Borgars will be given away to random holders.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-mint">.04</p>
                            <div className="content">
                                <h2>Merch Sneak Peek</h2>
                                <p>50%: Holder exclusive merch sneak peek.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-mint">.05</p>
                            <div className="content">
                                <h2>Exclusive Reveal</h2>
                                <p>75%: Monthly benefits and perks revealed.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-mint">.06</p>
                            <div className="content">
                                <h2>Charity</h2>
                                <p>100%: 10% of mint revenue delivered to a hunger charity.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-mint">.07</p>
                            <div className="content">
                                <h2>Light It Up</h2>
                                <p>100%: The Borgar oven is fired up. (weekly 1/1 charity auction for one month)</p>
                            </div>
                        </div>
                    </TabPanel>

                    {/* Time Roadmap */}
                    <TabPanel>
                        <div className="box">
                            <img src={step1time} alt="" />
                            <p className="step-time">.01</p>
                            <div className="content">
                                <h2>October ‘21│ Build Borgar</h2>
                                <p>- Refine Discord server</p>
                                <p>- Finish Artwork</p>
                                <p>- Build The Community</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-time">.02</p>
                            <div className="content">
                                <h2>November ‘21│Give back</h2>
                                <p>- Launch Borgar Nov. 5</p>
                                <p>- Deliver 10% of mint to chosen charity</p>
                                <p>- Implement community voting for charity wallet</p>
                                <p>- Launch Merch Store</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={step0} alt="" />
                            <p className="step-time">.03</p>
                            <div className="content">
                                <h2>December ‘21│Establish Borgar</h2>
                                <p>- Build partnerships with charity organizations</p>
                                <p>- Build partnerships with food-related brands</p>
                                <p>- Send holder exclusive airdrops perks</p>
                            </div>
                        </div>
                    </TabPanel>
                        <p style={{textAlign: 'center'}}>Lots of other dope plans TBA. This roadmap is only a fraction of the vision we have for this project!</p>
                </Tabs>
            </div>
        </div>
        

    )

}

export default Roadmap