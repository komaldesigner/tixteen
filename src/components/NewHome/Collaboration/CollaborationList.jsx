import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import "../../../styles/home/Collaboration.css";
import { useInView } from "react-intersection-observer";
import inful1 from "../../../assets/img/home/inful1.png";
import inful2 from "../../../assets/img/home/inful2.png";
import inful3 from "../../../assets/img/home/inful3.png";
import Right from "../../../assets/img/home/Right.png";
import Homeinflencerdance from "../../../assets/videos/Homeinflencerdance.mp4";
import CollaborationHeading from './CollaborationHeading';


const users = [
    {
        id: 'TXP1184',
        location: 'Chhindwara, India',
        followers: '6.9K Followers',
        image: inful1,
        price: '₹100/- Onwards',
        categories: [
            "Dance & Music",
            "Fashion & Beauty",
            "Jewelry"
        ]
    },
    {
        id: 'TXP2245',
        location: 'Bhopal, India',
        followers: '3.2K Followers',
        image: inful2,
        price: '₹150/- Onwards',
        categories: [
            "Gaming",
            "Technology",
            "Education"
        ]
    },
];

const secondUser = [
    {
        id: 'TXP3376',
        location: 'Indore, India',
        followers: '8.1K Followers',
        image: inful3,
        price: '₹200/- Onwards',
        categories: [
            "Cooking",
            "Health & Wellness",
            "Travel & Lifestyle"
        ]
    }
]; 

function CollaborationOptions() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const [showContent, setShowContent] = useState(false);
    const [animationwidht, setAnimationWidth] = useState("24%");
    const [xwidht, setXwidht] = useState("200");
    const [ywidth, setYwidth] = useState(0);
    console.log("xwidht", xwidht);
    console.log("ywidth", ywidth);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 426) {
                setAnimationWidth("0%");
                setXwidht("0")
                setYwidth(300)

            } else if (screenWidth <= 500) {
                setAnimationWidth("0%");
                setXwidht("0")
                setYwidth(300)

            } else if (screenWidth <= 769) {
                setAnimationWidth("8%");
                setXwidht(50)
                setYwidth(0)

            } else if (screenWidth <= 1025) {
                // console.log("1025");
                setAnimationWidth("22%");
                setXwidht(130)
                setYwidth(0)

            } else {
                // setAnimationWidth(5.3);
            }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const textVariants = {
        hidden: { x: 0 },
        // visible: { x: "400px" }
        visible: { x: animationwidht }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1400) { // You can adjust this value as needed
                setShowContent(false);
            } else {
                setShowContent(true);
            }
        };
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  
    return (
        <div className=''>
          <CollaborationHeading textVariants={textVariants} inView={inView} />
    
          {/* bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            ref={ref}
            className='main_influencer_cardes_div'
          >
            {users.map((user, index) => (
              <motion.div
                key={index}
                className="profile-card"
                initial={{ opacity: 0, x: -100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <img src={user.image} alt="Influencer" className="profile-image" />
                <div className="profile-details">
                  <h2>{user.id} <span className="verified-badge">✔</span></h2>
                  <p className="location">{user.location}</p>
                  <p className="followers">{user.followers}</p>
                  <div className="categories">
                    {user.categories.map((category, index) => (
                      <span key={index} className="category-tag">{category}</span>
                    ))}
                  </div>
                  <p className="advertising-price">Advertising Price: {user.price}</p>
                  <button className="send-message">Send Message</button>
                </div>
              </motion.div>
            ))}
    
            <motion.div
              className="profile-card video-card"
              initial={{ opacity: 0, x: 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              style={{ cursor: 'pointer' }}
            >
              <div className='show_all_text'>
                <div className='show_text'>SHOW</div>
                <div className='all_text'>ALL</div>
              </div>
              <video src={Homeinflencerdance} autoPlay loop muted className='profile-card-video' />
              <div className='right_image_video_div'>
                <img src={Right} className='right_image_video' />
              </div>
            </motion.div>
    
            {secondUser.map((user, index) => (
              <motion.div
                key={index}
                className="profile-card"
                initial={{ opacity: 0, x: 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <img src={user.image} alt="Influencer" className="profile-image" />
                <div className="profile-details">
                  <h2>{user.id} <span className="verified-badge">✔</span></h2>
                  <p className="location">{user.location}</p>
                  <p className="followers">{user.followers}</p>
                  <div className="categories">
                    {user.categories.map((category, index) => (
                      <span key={index} className="category-tag">{category}</span>
                    ))}
                  </div>
                  <p className="advertising-price">Advertising Price: {user.price}</p>
                  <button className="send-message">Send Message</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    
}

export default CollaborationOptions;
