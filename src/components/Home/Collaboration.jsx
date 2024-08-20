
import React, { useEffect, useState } from 'react';
import { motion, } from "framer-motion";
import "../../styles/home/Collaboration.css";
import { useInView } from "react-intersection-observer";

import inful1 from "../../assets/img/home/inful1.png";
import inful2 from "../../assets/img/home/inful2.png";
import inful3 from "../../assets/img/home/inful3.png";
import Right from "../../assets/img/home/Right.png";
import Homeinflencerdance from "../../assets/videos/Homeinflencerdance.mp4";

function Collaboration() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    
    const [showContent, setShowContent] = useState(false);

    const textVariants = {
        hidden: { x: 0 },
        visible: { x: "400px" }
    };

 
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1400) { // You can adjust this value as needed
                setShowContent(false);
            } else {
                setShowContent(true);
            }
        }
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    ]
    return (
        <>
            {/* {showContent ? ( */}
            <div>
                {/* top */}
                <motion.div className="brand_and_influencers_main_parent_div "

                    variants={textVariants}
                    transition={{ duration: 2, delay: 1 }}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div className="Discover_Your_Next_Brand_Ambassador" >Influencers Open to Collaboration</motion.div>
                    <motion.div className="connect_with_influencers" >Forming Impactful Partnerships with Influential Voices</motion.div>
                </motion.div>

                {/* bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 2 }}
                    ref={ref}
                    className='d-flex flex-wrap justify-content-center'>
                    {users.map((user, index) => (
                        <motion.div key={index} className="profile-card"
                            initial={{ opacity: 0, x: -200, }}
                            whileInView={{ opacity: 1, x: 0 }}
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

                    <motion.div className="profile-card video-card"
                        initial={{ opacity: 0, x: 200, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className='show_all_text' >
                            <div className='show_text' >SHOW</div>
                            <div className='all_text' >ALL</div>
                        </div>
                        <video src={Homeinflencerdance} autoPlay loop muted className='profile-card-video' />
                        <div className='right_image_video_div' >
                            <img src={Right} className='right_image_video' />
                        </div>
                    </motion.div>

                    {secondUser.map((user, index) => (
                        <motion.div key={index} className="profile-card"
                            initial={{ opacity: 0, x: 200, }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.3, delay: 0.8 }}
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

        </>
    );
}

export default Collaboration;
