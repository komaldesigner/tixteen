import React from 'react'
import Layerfirst from "../../../assets/img/brand/Layer-1-copy.jpg"
import Layersecond from "../../../assets/img/brand/Layer-1-copy-2.jpg"
import Rectangle from "../../../assets/img/brand/Rectangle-4.jpg"
function OURSUCCESS() {
    return (
        <div>

            <div className="hmsecsixth">
                <h2>OUR SUCCESS STORES</h2>
                <div className="maincont">
                    <div className="row">
                        <div className="col-4">
                            <div className="bigimg"> <img src={Rectangle} /><h2>GYM LOUNGE</h2>
                                <div className="instg">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>9+</h3><p>INFLUENCERS</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>60K+</h3><p>REACH</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>6.9K</h3><p>POST ENGAGMENT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            {/* <div className="bigimg"> <img src="../assets/img/Layer-1-copy.jpg"/><h2>SHAZIA RICE</h2> */}
                            <div className="bigimg"> <img src={Layerfirst} /><h2>SHAZIA RICE</h2>
                                <div className="instg">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>13+</h3><p>INFLUENCERS</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>80K+</h3><p>REACH</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>8.9K</h3><p>POST ENGAGMENT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bigimg"> <img src={Layersecond} /><h2>EDEN VALLEY</h2>
                                <div className="instg">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>11+</h3><p>INFLUENCERS</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>45K+</h3><p>REACH</p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="istamttr">
                                                <h3>7.5K</h3><p>POST ENGAGMENT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OURSUCCESS