    // import React, { useEffect, useState } from 'react'
    // import "../../styles/utils/footerbar.css"
    // import { Link, useNavigate } from 'react-router-dom'
    // import campane from "../../assets/footer/campane.png"
    // import earning from "../../assets/footer/earning.png"
    // import home from "../../assets/footer/home.png"
    // import report from "../../assets/footer/report.png"

    // function Footerbar() {
    //     const navigation = useNavigate()

    //     const [IsLogin, setIsLogin] = useState(false)
    //     const [showPopup, setShowPopup] = useState(false);
    //     const closePopup = () => {
    //         setShowPopup(false);
    //     };
    //     useEffect(() => {
    //         const token = localStorage.getItem("token")
    
    //         if (token) {
    //             setIsLogin(true)
    //         } else {
    //             setIsLogin(false)
    //         }

    //     }, [localStorage.getItem("token")])

    //     // action
    //     const handelclick = (PageName) => {
    //         if (PageName == "campanes-list") {
    //             navigation('/verified/creator/campanes/list')
    //         } else if ( PageName == "home") {
    //             navigation('/verified/creator/home')
    //         } else if ( PageName == "report") {
    //             navigation('/verified/report')
    //         } else if ( PageName == "earning") {
    //             navigation('/verified/creator/earning/my-earnings')
    //         }
    //         else {
    //             setShowPopup(true);
    //         }
    //     }
    //     return (
    //         <div >
    //             <div>
    //                 <div className='main_ecombar_parent_div' >
    //                     <div className='ecom_bar_main_div' >
    //                         <div className='ecom_bar_items_div' onClick={() => handelclick("home")}  >
    //                             <div>
    //                                 <img src={home} alt="" />
    //                             </div>
    //                             <div>Home</div>
    //                         </div>
    //                         <div className='ecom_bar_items_div' onClick={() => handelclick("campanes-list")} >

    //                             <div>

    //                                 <img src={campane} alt="" />
    //                             </div>
    //                             <div>
    //                                 Campaign
    //                             </div>
    //                         </div>
    //                         <div className='ecom_bar_items_div' onClick={() => handelclick("report")} >
    //                             {/* <Link to={"/order/my-cart"} className='css-for-link-tag-color'   > */}
    //                             <div>
    //                                 <div>
    //                                     <img src={report} alt="" />

    //                                 </div>
    //                             </div>
    //                             <div>
    //                                 Report
    //                             </div>
    //                             {/* </Link> */}
    //                         </div>
    //                         <div className='ecom_bar_items_div' onClick={() => handelclick("earning")} >
    //                             {/* <Link to={"/user/profile"} className='css-for-link-tag-color'  > */}
    //                             <div>
    //                                 <img src={earning} alt="" />

    //                             </div>
    //                             <div>Earning</div>

    //                             {/* </Link> */}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // export default Footerbar



    import React, { useEffect, useState } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faHome, faBullhorn, faChartBar, faDollarSign } from '@fortawesome/free-solid-svg-icons'; // Import faDollarSign
    import "../../styles/utils/footerbar.css";
    import { useNavigate, useLocation } from 'react-router-dom';
    
    function Footerbar() {
        const navigation = useNavigate();
        const location = useLocation();
        const [isLogin, setIsLogin] = useState(false);
        const [selected, setSelected] = useState("home");
        const [showPopup, setShowPopup] = useState(false);
    
        const closePopup = () => {
            setShowPopup(false);
        };
    
        useEffect(() => {
            const token = localStorage.getItem("token");
            setIsLogin(!!token);
        }, []);
    
        useEffect(() => {
            const path = location.pathname;
            if (path.includes('campanes-list')) setSelected('campanes-list');
            else if (path.includes('home')) setSelected('home');
            else if (path.includes('report')) setSelected('report');
            else if (path.includes('earning')) setSelected('earning');
        }, [location.pathname]);
    
        const handleClick = (pageName) => {
            if (pageName === "campanes-list") {
                navigation('/verified/creator/campanes/list');
            } else if (pageName === "home") {
                navigation('/verified/creator/home');
            } else if (pageName === "report") {
                navigation('/verified/report');
            } else if (pageName === "earning") {
                navigation('/verified/creator/earning/my-earnings');
            } else {
                setShowPopup(true);
            }
        };
    
        const iconColor = (pageName) => selected === pageName ? '#FFD700' : 'white'; 
    
        return (
            <div>
                <div className='main_ecombar_parent_div'>
                    <div className='ecom_bar_main_div'>
                        <div className='ecom_bar_items_div' onClick={() => handleClick("home")}>
                            <FontAwesomeIcon icon={faHome} style={{ color: iconColor("home"), fontSize: '20px' }} />
                            <div>Home</div>
                        </div>
                        <div className='ecom_bar_items_div' onClick={() => handleClick("campanes-list")}>
                            <FontAwesomeIcon icon={faBullhorn} style={{ color: iconColor("campanes-list"), fontSize: '20px' }} />
                            <div>Campaign</div>
                        </div>
                        <div className='ecom_bar_items_div' onClick={() => handleClick("report")}>
                            <FontAwesomeIcon icon={faChartBar} style={{ color: iconColor("report"), fontSize: '20px' }} />
                            <div>Report</div>
                        </div>
                        <div className='ecom_bar_items_div' onClick={() => handleClick("earning")}>
                            <FontAwesomeIcon icon={faDollarSign} style={{ color: iconColor("earning"), fontSize: '20px' }} />
                            <div>Earning</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    export default Footerbar;
    