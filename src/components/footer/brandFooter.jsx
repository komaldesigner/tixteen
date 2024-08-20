import React, { useState, useEffect } from 'react';
import "../../styles/utils/Brandfooter.css"
import { Link } from 'react-router-dom';
// import cart from "../../assets/img/cart.png"
// import home from "../../assets/img/home-page.png"
// import influ from "../../assets/img/influ.png"
// import noti from "../../assets/img/noti.png"

const BrandFooter = () => {
    const [currentTab, setCurrentTab] = useState(0);

    useEffect(() => {
        // Run on component mount
        document.documentElement.style.overflowX = 'hidden'; // Disable horizontal scrolling

        // Your jQuery scripts


        // Your other jQuery scripts...

        // Clean up on component unmount
        return () => {
            // Remove any event listeners or timers if necessary
        };
    }, []);

    const showTab = (n) => {
        // Function to display the specified tab of the form
        const x = document.getElementsByClassName("regtab");
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[n].style.display = "block";
    };

    const nextPrev = (n) => {
        // Function to determine which tab to display
        const x = document.getElementsByClassName("regtab");
        if (n === 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        setCurrentTab(currentTab + n);
        if (currentTab >= x.length) {
            document.getElementById("regForm").submit();
            return false;
        }
        showTab(currentTab);
    };

    const validateForm = () => {
        // Function to validate the form fields
        const x = document.getElementsByClassName("regtab");
        const y = x[currentTab].getElementsByTagName("input");
        let valid = true;
        for (let i = 0; i < y.length; i++) {
            if (y[i].value === "") {
                if (!y[i].disabled) {
                    y[i].className += " invalid";
                    document.getElementById("reqfielderror").style.display = "block";
                    valid = false;
                }
            }
        }
        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid;
    };

    const fixStepIndicator = (n) => {
        // Function to update the step indicators
        const x = document.getElementsByClassName("step");
        for (let i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        x[n].className += " active";
    };

    return (
        <footer>
            {/* <div className="mobilbrnd">
                <div className="mobilbrndimg">
                    <div className="mobilimg">
                        <a href="index.php">
                            <div className="moblimg1"><img src={"../assets/img/home-page.png"} alt="Home" /></div>
                            <span>Home</span>
                        </a>
                    </div>
                    <div className="mobilimg">
                        <a href="influencersbalance.php">
                            <div className="moblimg1"><img src="../assets/img/influ.png" alt="Influencer" /></div>
                            <span>Influencer</span>
                        </a>
                    </div>
                    <div className="mobilimg">
                        <a href="">
                            <div className="moblimg1"><img src="../assets/img/noti.png" alt="Notification" /></div>
                            <span>Notification</span>
                        </a>
                    </div>
                    <div className="mobilimg">

                        <a href="purchase.php">
                            <div className="moblimg1"><img src="../assets/img/cart.png" alt="Cart" />
                                <sup>12121</sup>
                            </div>
                            <span>Cart</span>
                        </a>
                    </div>
                </div>
            </div> */}

            <div className="footer">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="ftrlink">
                            <img src="https://tixteen.com/assets/img/footer-logo.png" width="18%" alt="Footer Logo" />
                            <br /><br />
                            <div className="ftrsocial">
                                {/* open link tag in new tab */}
                                
                                <Link to={"https://www.facebook.com/tixteen"}    target="_blank" rel="noopener noreferrer"><img className='w-100' src="https://tixteen.com/assets/img/facebook.png" alt="Facebook" /></Link>
                                <Link to={"https://twitter.com/tixteen_"} target="_blank" rel="noopener noreferrer"><img className='w-100' src="https://tixteen.com/assets/img/twitter.png" alt="Twitter" /></Link>
                                <Link to={"https://www.instagram.com/tixteen/"} target="_blank" rel="noopener noreferrer"><img className='w-100' src="https://tixteen.com/assets/img/instagram.png" alt="Instagram" /></Link>
                                <Link to={"https://www.snapchat.com/add/tixteen22?share_id=ySJ0VajzcLk&locale=en-US"} target="_blank" rel="noopener noreferrer"><img className='w-100' src="https://tixteen.com/assets/img/snapchat.png" alt="Snapchat" /></Link>
                                <Link to={"https://www.linkedin.com/company/80903701/admin/"} target="_blank" rel="noopener noreferrer"><img className='w-100' src="https://tixteen.com/assets/img/linkedin.png" alt="LinkedIn" /></Link>
                                <Link to={"https://www.youtube.com/channel/UCe80mP_r-wbPzGdiTQDiBrg"} target="_blank" rel="noopener noreferrer"><img className='w-100' src="https://tixteen.com/assets/img/youtube.png" alt="YouTube" /></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-5">
                        <div className="row">
                            <div className="col-5">
                             
                            </div>

                            <div className="col-4">
                                <div className="ftrlink">
                                    <Link to={"/index"}><p>Home</p></Link>
                                    <Link to={"/brand/about-us"}><p>About Us</p></Link>
                                    <Link to={"/brand/contact-us"}><p>Contact Us</p></Link>
                                    <Link to={"http://www.blogs.tixteen.com/"} target="_blank"><p>Blogs</p></Link>
                                    <Link to={"/brand/term-and-conditions"}><p>Terms and Conditions</p></Link>
                                    <Link to={"/brand/privacy-policy"}><p>Privacy Policy</p></Link>
                                    <Link to={"/brand/refund-and-cancelation"}><p>Refund & Cancellation Policy</p></Link>
                                </div>
                            </div>
                            {/* <div className="col-3">
                                <div className="ftrlink">
                                    <img src="../assets/img/Google-Play.png" width="100%" alt="Google Play Store" />
                                    <img src="../assets/img/app-store-png-logo-33123.png" width="100%" alt="Apple App Store" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="footr">
                <div className="footriner">
                    <div className="row">
                        <div className="col-sm-12 text-center text-white">
                            {/* Footer text */}
                            © 2021-23 Tixteen, All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>

            <div className="topbtn">
                {/* Scroll to top button */}
                <a id="topbutton"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a>
            </div>

            <div className="whatsapp">
                {/* WhatsApp chat button */}
                <Link to={"https://wa.me/+918968435512?text=I'm%20interested%20in%20your%20Service"} target="blank">
                    <img src="https://tixteen.com/assets/img/WhatsApp.png" alt="tixteen Whatsapp" />
                </Link>
            </div>
        </footer>
    );

};

export default BrandFooter;
