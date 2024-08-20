

import React, { useEffect } from 'react';
import { TweenMax, TimelineLite, Power0 } from 'gsap';
import './drag-slider.css';
import img1 from "../../../assets/img/brand/1.png";
import img2 from "../../../assets/img/brand/2.png";
import { Link } from 'react-router-dom';
import BrandFooter from '../../footer/brandFooter';
import BrandHeader from '../../headers/brandHeader';

const LandingPage = () => {
  useEffect(() => {
    const fbq = (...args) => {
      if (!window.fbq) {
        window.fbq = (...args) => {
          if (!window.fbq.callMethod) {
            window.fbq.callMethod.apply(window.fbq, args);
          } else {
            window.fbq.queue.push(args);
          }
        };
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = '2.0';
        window.fbq.queue = [];
        const t = document.createElement('script');
        t.async = true;
        t.src = 'https://connect.facebook.net/en_US/fbevents.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(t, s);
      }
      window.fbq(...args);
    };

    fbq('init', '168512315079649');
    fbq('track', 'PageView');

    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v16.0'
      });
    };

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    document.head.appendChild(script);

    let soyaTl;

    const dragScaler = () => {
      soyaTl = new TimelineLite();
      const pieceArr = document.querySelectorAll('.piece');
      pieceArr.forEach((piece) => {
        soyaTl.from(piece, 2, { scale: 0.5, opacity: 0, ease: Power0.easeNone });
      });
      soyaTl.from('#viewport', pieceArr.length * 2, { opacity: 0, ease: Power0.easeNone }, 0);
      soyaTl.pause();
    };

    dragScaler();

    const compSlider = document.querySelector('.comparison-slider');
    const resizeImg = () => {
      if (compSlider) {
        const compSliderWidth = compSlider.offsetWidth + 'px';
        const resizeImgElement = document.querySelector('.resize img');
        if (resizeImgElement) {
          resizeImgElement.style.width = compSliderWidth;
        }
      }
    };

    resizeImg();
    window.addEventListener('resize', resizeImg);

    if (compSlider) {
      const dragElement = document.querySelector('.divider');
      const resizeElement = document.querySelector('.resize');
      const container = document.querySelector('.comparison-slider');

      const drags = (dragElement, resizeElement, container) => {
        let touched = false;

        window.addEventListener('touchstart', () => {
          touched = true;
        });

        window.addEventListener('touchend', () => {
          touched = false;
        });

        const onDrag = (e) => {
          if (!touched) e.preventDefault();

          const moveX = e.pageX || e.touches[0].pageX;
          const containerOffset = container.offsetLeft;
          const containerWidth = container.offsetWidth;
          let leftValue = moveX + posX - dragWidth;

          if (leftValue < containerOffset) leftValue = containerOffset;
          else if (leftValue > containerOffset + containerWidth - dragWidth)
            leftValue = containerOffset + containerWidth - dragWidth;

          const widthValue = ((leftValue + dragWidth / 2 - containerOffset) * 100) / containerWidth + '%';
          dragElement.style.left = widthValue;
          resizeElement.style.width = widthValue;
        };

        let startX;
        let dragWidth;
        let posX;
        dragElement.addEventListener('mousedown', (e) => {
          dragElement.classList.add('draggable');
          resizeElement.classList.add('resizable');
          startX = e.pageX;
          dragWidth = dragElement.offsetWidth;
          posX = dragElement.offsetLeft + dragWidth - startX;
          document.addEventListener('mousemove', onDrag);
          document.addEventListener('mouseup', () => {
            dragElement.classList.remove('draggable');
            resizeElement.classList.remove('resizable');
            document.removeEventListener('mousemove', onDrag);
          });
        });

        dragElement.addEventListener('touchstart', (e) => {
          dragElement.classList.add('draggable');
          resizeElement.classList.add('resizable');
          startX = e.touches[0].pageX;
          dragWidth = dragElement.offsetWidth;
          posX = dragElement.offsetLeft + dragWidth - startX;
          document.addEventListener('touchmove', onDrag);
          document.addEventListener('touchend', () => {
            dragElement.classList.remove('draggable');
            resizeElement.classList.remove('resizable');
            document.removeEventListener('touchmove', onDrag);
          });
        });
      };

      drags(dragElement, resizeElement, container);
    }

    return () => {
      window.removeEventListener('resize', resizeImg);
    };
  }, []);

  return (
    <>
      <BrandHeader />
      <div className="landing-page">
        <link rel="canonical" href="https://tixteen.com" />
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat" page_id="105610608706205" attribution="biz_inbox"></div>
        <div className="landinghmbnr1">
          <div className="main_langin_page_contant_div">
            <div className="langin_page_contant_div">
              <div className="landinghmbnr1txtcnt">
                <h5 style={{ marginBottom: 0 }}>UNLEASH THE POWER OF</h5>
                <h3>INFLUENCER MARKETING</h3>
                <h5>To Make Your BUSINESS Look ALIVE!</h5>
                <div className="landingsplitsection">
                  <p>INDIA'S LARGEST STAGE FOR BRANDS & TRENDSETTERS</p>
                  <div className="row">
                    <div className="col-6">
                      <Link to={"/index"} >
                        <div className="landingbrand">
                          <h5>Enter as a</h5>
                          <h4>
                            AGENCY<b>/</b>BRAND
                            <div className="landingtxtbrdr"></div>
                          </h4>
                        </div>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link to={"/auth/login"}>
                        <div className="landinginflu">
                          <h5>Enter as a</h5>
                          <h4>
                            INFLUENCER
                            <div className="landingtxtbrdr"></div>
                          </h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="langin_page_image_div">
              <div className="landinghmbnr1img">
                <div className="plate">
                  <div className="inner">
                    <div className="comparison-slider-wrapper">
                      <div className="comparison-slider">
                        <div id="viewport"></div>
                        <img src={img1} alt="Tixteen" />
                        <div className="resize">
                          <img src={img2} alt="Tixteen" />
                        </div>
                        <div className="divider">
                          <div className="dragger_shadow"></div>
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
      <BrandFooter />
    </>
  );
};

export default LandingPage;
