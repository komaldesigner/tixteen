
// import React, { useState } from "react";
// import "../../../styles/brand/InfluencerList/mainInfluencerList.css";
// import Sidebar from './Sidebar.jsx';
// import InfluencerCard from "../../../utils/influncer/influncerCart.jsx";
// import Pagination from "./pagination.jsx";

// const InfluancerList = () => {


  


  // const dummyData = {
  //   influencerlevels: [
  //     { id: 1, level: "1" },
  //     { id: 2, level: "2" },
  //     { id: 3, level: "3" },
  //     { id: 4, level: "4" },
  //     { id: 5, level: "5" },
  //     { id: 6, level: "6" },
  //     { id: 7, level: "7" },
  //   ],
  //   industries: [
  //     { id: 1, name: "Fashion" },
  //     { id: 2, name: "Tech" },
  //     { id: 3, name: "Lifestyle" },
  //     { id: 4, name: "Travel" },
  //     { id: 5, name: "Food" },
  //     { id: 6, name: "Sports" },
  //     { id: 7, name: "Art" },
  //     { id: 8, name: "Music" },
  //     { id: 9, name: "Jewellery" },
  //     { id: 10, name: "Beauty" },
  //     { id: 11, name: "Other" },
  //   ],
  //   platformlist: [
  //     { id: 1, name: "YouTube" },
  //     { id: 2, name: "Instagram" },
  //     { id: 3, name: "TikTok" },
  //   ],
  //   influencerlanguage: [
  //     { id: 1, language: "English" },
  //     { id: 2, language: "Spanish" },
  //     { id: 3, language: "French" },
  //   ],
  //   country: [{ id: 99, name: "USA" }],
  //   states: [
  //     { id: 101, name: "California" },
  //     { id: 102, name: "New York" },
  //     { id: 103, name: "Texas" },
  //   ],
  // };

//   const dummyInfluencers = [
//     {
//       id: 1,
//       level: "1",
//       contentname: "Image",
//       platform: "Instagram",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       gender: "Male",
//       profileimg: "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
//       fname: "John Doe",
//     },
//     {
//       id: 2,
//       level: "2",
//       contentname: "Video",
//       industry: "Appliances , Baby Products , Entertainment, Pets & Products , Travel & Lifestyle",
//       platform: "YouTube",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Jane Smith",
//     },
//     {
//       id: 3,
//       level: "3",
//       contentname: "Image",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "TikTok",
//       gender: "Other",
//       profileimg: "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
//       fname: "Alex Johnson",
//     },
//     {
//       id: 4,
//       level: "1",
//       contentname: "Video",
//         industry: "Artists, Bloggers, Fashion & Beauty, Food, Sports & fitness",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Emily Davis",
//     },
//     {
//       id: 5,
//       level: "2",
//       contentname: "Image",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "TikTok",
//       gender: "Male",
//       profileimg: "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
//       fname: "Michael Wilson",
//     },
//     {
//       id: 6,
//       level: "3",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "TikTok",
//       gender: "Other",
//       profileimg: "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
//       fname: "Sarah Thompson",
//     },
//     {
//       id: 7,
//       level: "1",
//       contentname: "Image",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "TikTok",
//       gender: "Male",
//       profileimg: "https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
//       fname: "David Anderson",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },
//     {
//       id: 8,
//       level: "2",
//       contentname: "Video",
//       industry: "Fashion & Beauty, Motivational, Kitchen, Jewellery, Othe",
//       platform: "Instagram",
//       gender: "Female",
//       profileimg: "https://www.shutterstock.com/image-photo/smiling-face-man-indian-origin-260nw-1862370829.jpg",
//       fname: "Olivia Taylor",
//     },

//   ];

//   const [formData, setFormData] = useState({
//     Level: [],
//     Industry: [],
//     content: [],
//     gender: [],
//     Platform: [],
//     language: [],
//     State: [],
//     County: [],
//   });

//   const [influencers, setInfluencers] = useState(dummyInfluencers);
//   const [cart, setCart] = useState([]);
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(50);
//   const [itemsPerPage] = useState(10000);

//   // pagination
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


//   const handleChange = (event) => {
//     const { name, value, checked } = event.target;
//     setFormData((prevData) => {
//       const updatedArray = checked
//         ? [...prevData[name], value]
//         : prevData[name].filter((item) => item !== value);
//       return { ...prevData, [name]: updatedArray };
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const filteredInfluencers = dummyInfluencers.filter((influencer) => {
//       return (
//         (formData.Level.length === 0 || formData.Level.includes(influencer.level)) &&
//         (formData.Industry.length === 0 || formData.Industry.some(industry => influencer.industry.includes(industry))) &&
//         (formData.content.length === 0 || formData.content.includes(influencer.contentname)) &&
//         (formData.gender.length === 0 || formData.gender.includes(influencer.gender)) &&
//         (formData.Platform.length === 0 || formData.Platform.includes(influencer.platform))
//       );
//     });
//     setInfluencers(filteredInfluencers);
//   };

//   const addToCart = (influencer) => {
//     setCart((prevCart) => [...prevCart, influencer]);
//   };

//   return (
//     <>
//     <div className="main_influencer_list_parent_container">
//       <div className="influncer_list_container">
//         <Sidebar
//           formData={formData}
//           handleChange={handleChange}
//           handleSubmit={handleSubmit}
//           dummyData={dummyData}
//         />
//         <div className="influncer_list_cart_list_container">
//           <div className="influlist">
//             <div className="row main_influencer_list_cart_div ">
//               {influencers.map((influencer) => (
//                 <InfluencerCard key={influencer.id} influencer={influencer} />
//               ))}
//             </div>
//           </div>
//           {/* <div className="cart">
//             <h3>Cart</h3>
//             {cart.map((item) => (
//               <div key={item.id}>
//                 {item.fname} <span>L{item.level}</span>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </div>
//     <div>
//            <Pagination
//         itemsPerPage={10}
//         totalItems={100}
//         paginate={2}
//         currentPage={2}
//       />

//     </div>
//     </>
//   );
// };

// export default InfluancerList;

import React, { useState, useEffect } from "react";
import "../../../styles/brand/InfluencerList/mainInfluencerList.css";
import Sidebar from './Sidebar.jsx';
import InfluencerCard from "../../../utils/influncer/influncerCart.jsx";
import Pagination from "./pagination.jsx";
import { makeApi } from "../../../api/callApi.tsx"; 

const InfluancerList = () => {
  const [formData, setFormData] = useState({
    Level: [],
    Industry: [],
    content: [],
    gender: [],
    Platform: [],
    language: [],
    State: [],
    County: [],
  });


  const dummyData = {
    influencerlevels: [
      { id: 1, level: "1" },
      { id: 2, level: "2" },
      { id: 3, level: "3" },
      { id: 4, level: "4" },
      { id: 5, level: "5" },
      { id: 6, level: "6" },
      { id: 7, level: "7" },
    ],
    industries: [
      { id: 1, name: "Fashion" },
      { id: 2, name: "Tech" },
      { id: 3, name: "Lifestyle" },
      { id: 4, name: "Travel" },
      { id: 5, name: "Food" },
      { id: 6, name: "Sports" },
      { id: 7, name: "Art" },
      { id: 8, name: "Music" },
      { id: 9, name: "Jewellery" },
      { id: 10, name: "Beauty" },
      { id: 11, name: "Other" },
    ],
    platformlist: [
      { id: 1, name: "YouTube" },
      { id: 2, name: "Instagram" },
      { id: 3, name: "TikTok" },
    ],
    influencerlanguage: [
      { id: 1, language: "English" },
      { id: 2, language: "Spanish" },
      { id: 3, language: "French" },
    ],
    country: [{ id: 99, name: "USA" }],
    states: [
      { id: 101, name: "California" },
      { id: 102, name: "New York" },
      { id: 103, name: "Texas" },
    ],
  };


  const [influencers, setInfluencers] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await makeApi('/v1/influencers', 'GET');
        setInfluencers(response.data.data); // Adjust this line based on the actual structure of the API response
      } catch (error) {
        console.error('Error fetching influencers:', error);
      }
    };

    fetchInfluencers();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => {
      const updatedArray = checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value);
      return { ...prevData, [name]: updatedArray };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredInfluencers = influencers.filter((influencer) => {
      return (
        (formData.Level.length === 0 || formData.Level.includes(influencer.level)) &&
        (formData.Industry.length === 0 || formData.Industry.some(industry => influencer.industry.includes(industry))) &&
        (formData.content.length === 0 || formData.content.includes(influencer.contentname)) &&
        (formData.gender.length === 0 || formData.gender.includes(influencer.gender)) &&
        (formData.Platform.length === 0 || formData.Platform.includes(influencer.platform))
      );
    });
    setInfluencers(filteredInfluencers);
  };

  const addToCart = (influencer) => {
    setCart((prevCart) => [...prevCart, influencer]);
  };

  const currentItems = influencers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div className="main_influencer_list_parent_container">
        <div className="influncer_list_container">
          <Sidebar
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            dummyData={dummyData}
          />
          <div className="influncer_list_cart_list_container">
            <div className="influlist">
              <div className="row main_influencer_list_cart_div">
                {currentItems.map((influencer) => (
                  <InfluencerCard key={influencer.id} influencer={influencer} addToCart={() => addToCart(influencer)} />
                ))}
              </div>
            </div>
            {/* <div className="cart">
              <h3>Cart</h3>
              {cart.map((item) => (
                <div key={item.id}>
                  {item.fname} <span>L{item.level}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={influencers.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default InfluancerList;
