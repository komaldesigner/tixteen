import React from 'react'
import Vector from "../../../assets/img/brand/Vector-Smart-Object1.png";
import { Link } from 'react-router-dom';


function Letyourbrnad({isLoggedIn, handleLoginClick, clientBroadcastPrice}) {
  return (
    <div>
        <div className="hmsecfst">
        <div className="row">
          <div className="col-6">
            <div className="fntmin">
              LET YOUR BRAND <h2>SHINE</h2> THROUGH <h2>INFLUENCERS</h2>
              <div className="row">
                <div className="col-12">
                  <div className="lfttxt">
                    <h3>PRICE STARTING FROM <span className="grbpln"><b>₹</b>{clientBroadcastPrice}/-</span></h3>
                  </div>
                </div>
                <div className="col-4"></div>
              </div>
              {!isLoggedIn ? (
                <div className="rgstxt2 ">
                  <a href="/clientregister"><h2 style={{ float: 'left' }}>REGISTER NOW</h2></a>
                  <a onClick={handleLoginClick} style={{ cursor: 'pointer' }}><h2 style={{ float: 'left' , marginLeft: '15px' }} className="ms-5" >LOGIN</h2></a>
                </div>
              ) : (
                <div className="rgstxt">
                  <Link to={"/brand/register-brand"}><h2 style={{ float: 'left' }}>REGISTER NOW</h2></Link>
                  {/* <div style={{ float: 'left' }}> &nbsp </div> */}
                  <a onClick={handleLoginClick} style={{ cursor: 'pointer' }}><h2 style={{ float: 'left' , marginLeft: '15px' }} >LOGIN</h2></a>
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="spkrantimg">
              <img src={Vector} alt="Speaker" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Letyourbrnad