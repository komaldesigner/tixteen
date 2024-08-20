import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../styles/headers/BrandHeader.css";
import Logo from "../../assets/img/tixteen_icon.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartArrowDown, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import BrandFooter from '../footer/brandFooter';

const BrandHeader = () => {
  const history = useNavigate();
  const [clientName, setClientName] = useState('John Doe');
  const [clientProfileImg, setClientProfileImg] = useState('default_profile.png');
  const [cartCount, setCartCount] = useState(3);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);



  useEffect(() => {
    const checkSession = async () => {
      try {
        // const response = await axios.get('/api/session'); 
        // if (!response.data.sessionValid) {
        //   // history('/brand/index');
        // } else {
        //   setClientName(response.data.clientName);
        //   setClientProfileImg(response.data.clientProfileImg);
        //   setCartCount(response.data.cartCount);
        // }
      } catch (error) {
        console.error('Error checking session', error);
        // history('/brand/index');
      }
    };
    checkSession();
  }, [history]);

  useEffect(() => {
    const loadScripts = () => {
      const script1 = document.createElement('script');
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-B8RS9G8QPB';
      script1.async = true;
      document.body.appendChild(script1);
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-B8RS9G8QPB');
      `;
      document.body.appendChild(script2);
    };
    loadScripts();
  }, []);

  return (
    <div>
      <header className="headerbar">
        <div className="row">
          <div className="col-2 px-4">
            <div className="hdrlogo">
              <Link to={"/"}>
                <img src={Logo} alt="tixteen" />
              </Link>
            </div>
          </div>
          <div className="col-8">
            <div className="influhdrlinks ">
              <div className="influhdrlinkitem">
                <span className="influhdrbtn">
                  <Link to={"/brand/influencer-list"}>Influencers</Link>
                </span>
                <span className="influhdrbtn">
                  <Link to={"/brand/create-campaign"} >
                  Create Campaign
                  </Link>
                </span>
                <span className="influhdrbtn">
                  <Link to={"/brand/check-timeline"}>Campaign Timeline</Link>
                </span>
                <span className="influhdrbtn">
                  <a href="/influleveldesc">Price</a>
                </span>
                <span>
                  <a href="/TicketDetails">Support</a>
                </span>
                <span style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
                  <div id="influsrchbtn" onClick={() => setIsSearchBoxVisible(!isSearchBoxVisible)}>
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                  {isSearchBoxVisible && (
                    <div id="influsrchbox">
                      <form method="GET" id="influsrchfrm" action="/profiledetail">
                        <div className="influsrchbarcont">
                          <input type="text" name="id" placeholder="Search Influencer" required />
                          <span id="influsrchsbmtbtn" onClick={() => document.getElementById('influsrchfrm').submit()}>
                            <FontAwesomeIcon icon={faSearch} />
                          </span>
                        </div>
                      </form>
                    </div>
                  )}
                </span>
                <span>
                  <a href="tel:8360057380">83600-57380</a>
                </span>
                <span style={{ float: 'right' }}>
                  <a href="/purchase">
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    <sub>{cartCount}</sub>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-1" style={{ alignItems: 'center', display: 'grid' }}>
            <div className={`influhdrproflbtn ${isProfileDropdownOpen ? 'open' : ''}`} onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}>
              <div className="influhdrproflimg">
                <img src={`/assets/img/profileimg/${clientProfileImg}`} width="100%" alt="Profile" />
              </div>
              <div className="influhdrprofltxt">
                {clientName}
                <br />
              </div>
              <div style={{ padding: '0% 2%' }}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
              {isProfileDropdownOpen && (
                <div className="influhdrprofldd">
                  <div>
                    <a href="/index">Dashboard</a>
                  </div>
                  <hr />
                  <div>
                    <Link to={"/brand/user-account"}>My Account</Link>
                  </div>
                  <hr />
                  <div>
                    <a href="/purchase">My Cart</a>
                  </div>
                  <hr />
                  <div>
                    <Link to={"brand/order-list"}>My Orders</Link>
                  </div>
                  <hr />
                  <div>
                    <a href="/influencersbalance">My Influencers</a>
                  </div>
                  <hr />
                  <div>
                    <a href="/clientlogout?logout">Logout</a>
                  </div>
                </div>
              )} 
            </div>
          </div>
        </div>
      </header>

      <div className="hdrmobile">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-sm-2 col-3">
            <div data-aos="zoom-out" className="hdrmoblogo">
              <a href="/creator">
                <img src={Logo} alt="Tixteen" />
              </a>
            </div>
          </div>
          <div className="col-sm-5 col-4"></div>
          <div className="col-3" style={{ display: 'grid', alignItems: 'center', textAlign: 'right' }}>
            <div className="hdrmobmenuicon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        {isMobileMenuOpen === true && (
          <div className="hdrmobilemenudd">
            <div className="influhdrprofltxt" style={{ fontSize: '16px', fontWeight: 'bold', textDecoration: 'underline' }}>
              {clientName}&nbsp;
            </div>
            <hr />
            <div>
              <a href="/invoice">My Orders</a>
            </div>
            <hr />
            <div>
              <a href="/selectinfluencer">Select Influencers</a>
            </div>
            <hr />
            <div>
              <a href="/makecampaign">Create Campaign</a>
            </div>
            <hr />
            <div>
              <a href="/clienttimeline">Campaign Timeline</a>
            </div>
            <hr />
            <div>
              <a href="/influleveldesc">Price</a>
            </div>
            <hr />
            <div>
              <a href="/TicketDetails">Support</a>
            </div>
            <hr />
            <div>
              <a href="/clientlogout?logout">Logout</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandHeader;
