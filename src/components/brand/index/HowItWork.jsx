import React, { useEffect, useState } from 'react';
import ATa from "../../../assets/img/brand/152810.png";
import Layer from "../../../assets/img/brand/Layer-4.png";


const HowItWork = () => {
    const [clientBroadcastPrice, setClientBroadcastPrice] = useState(null);

    useEffect(() => {
        // Fetch data from the backend
        fetch('https://your-backend-api.com/influencerlevels')
            .then(response => response.json())
            .then(data => {
                setClientBroadcastPrice(data.ClientVideo);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="app">
            <link rel="canonical" href="https://tixteen.com/client" />

            <div className="hmsecthrd">
                <div className="row">
                    <div className="col-6">
                        <div className="issimg">
                            <iframe 
                                width="100%" 
                                src="https://www.youtube.com/embed/UCK0jFT2pIM" 
                                title="How to Register as a Brand/Client on Tixteen || Process || Tixteen Influencer Marketing" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                            <img src={ATa} alt="Issimg" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="tittxt">
                            <h2>HOW IT</h2>
                            <h3>WORKS?</h3>
                            <p>You just have to select the plan and the influencers will create the content as per the plan and will upload the same on the social media sites.</p>
                        </div>
                    </div>
                </div>
                <div className="hmsecfrth">
                    {/* Steps */}
                    {['SIGN UP', 'SELECT INFLUENCER', 'MAKE PAYMENT', 'CREATE CAMPAIGN', 'CAMPAIGN APPROVAL', 'YOUR CAMPAIGNS LIVE ON SOCIAL MEDIA'].map((step, index) => (
                        <div className="lin" key={index}>
                            <h4>{index + 1}</h4>
                            <h4>{step}</h4>
                            {index < 5 && <div className="scrllimg"><img src={Layer} alt={`Step ${index + 1}`} /></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* More sections as per original HTML */}
            {/* ... */}
            <div className="hmsecffth">
           <div className="row">
              <div className="col-md-3"><div className="thrdconft"><h2>WHY  US ?</h2></div></div>
                    <div className="col-md-6">
            
                       <div className="row">
                            <div className="col-4"><div className="crlbgimg"><div className="fstxt"><h2>TOP SELECTED INFLUENCERS</h2></div> </div></div>
                            <div className="col-4"><div className="crlbgimg"><div className="fstxt"> <h2>BUDGET FRIENDLY PLANS</h2></div> </div></div>
                           <div className="col-4"><div className="crlbgimg"><div className="fstxt"> <h2>FRIENDLY SUPPORT TEAM</h2></div> </div></div>
                       </div>
          
                    </div>
              <div className="col-md-3"><div className="lftcont"><button type="button" className="btn btn-dark">EXPLORE OUR</button></div></div>

            </div>
            </div>
            
        </div>
    );
}

export default HowItWork;
