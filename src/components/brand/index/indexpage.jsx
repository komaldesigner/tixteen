
import React, { useEffect, useState } from 'react';
import './indexPage.css';
import { Link } from 'react-router-dom';
import InfluencerCard from '../../../utils/influncer/influncerCart';
import Letyourbrnad from './letyourbrnad';
import HowItWork from './HowItWork';
// import CarouselComponent from './CarouselComponent';
import CarouselComponent from './companyslider';
import WHATISTIXTEEN from './WHATISTIXTEEN';
import BrandFooter from '../../footer/brandFooter';
import OURSUCCESS from './OURSUCCESS';
import BrandHeader from '../../headers/brandHeader';
import { makeApi } from '../../../api/callApi.tsx';

function App() {
  const [clientBroadcastPrice, setClientBroadcastPrice] = useState(1000);
  const [influencers, setInfluencers] = useState([]);
  console.log(influencers);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetachData = async () => {
    const response = await makeApi('/V1/influencers',"GET");
    setInfluencers(response.data.data);
  };
  useEffect(() => {
    fetachData();
  }, []);


  useEffect(() => {

    // Simulate fetching client broadcast price
    setClientBroadcastPrice(1000);

    // Simulate fetching influencers data
    // setInfluencers([
    //   {
    //     id: 1,
    //     fname: "John",
    //     level: 3,
    //     currentFollower: 15000,
    //     ClientVideo: 500,
    //     industry: "Sports & fitness",
    //     profileimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    //   },
    //   {
    //     id: 5,
    //     fname: "David",
    //     level: 5,
    //     currentFollower: 50000,
    //     ClientVideo: 900,
    //     industry: "Appliances , Baby Products , Entertainment, Pets & Products , Travel & Lifestyle",
    //     profileimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"

    //   },
    //   {
    //     id: 6,
    //     fname: "Emily",
    //     level: 2,
    //     currentFollower: 60000,
    //     ClientVideo: 1000,
    //     industry: "Food",
    //     profileimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"

    //   },
    //   {
    //     id: 7,
    //     fname: "Michael",
    //     level: 3,
    //     currentFollower: 70000,
    //     ClientVideo: 1100,
    //     industry: "Travel",
    //     profileimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"

    //   },
    //   {
    //     id: 8,
    //     fname: "Olivia",
    //     level: 1,
    //     currentFollower: 80000,
    //     ClientVideo: 1200,
    //     industry: "Bloggers, Entertainment, Fashion & Beauty, Jewellery, Photography",
    //     profileimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"

    //   },
    //   {
    //     id: 9,
    //     fname: "James",
    //     level: 5,
    //     currentFollower: 90000,
    //     ClientVideo: 1300,
    //     industry: "Fashion & Beauty, Health, Motivational, Sports & fitness, Travel & Lifestyle",
    //     profileimg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"

    //   },
    // ]);

    // Simulate checking if user is logged in
    setIsLoggedIn(true);
  }, []);

  const handleLoginClick = () => {
    // Dummy login function
    alert('Login clicked');
  };

  return (
    <div>
      <header>
        <BrandHeader/>
      </header>

      {/* 1 */}
      <Letyourbrnad isLoggedIn={isLoggedIn} clientBroadcastPrice={clientBroadcastPrice} handleLoginClick={handleLoginClick} />

      {/* 2 */}
      <div className="hmsecthrd">
        <div className="influgllry">
          <h3 style={{ paddingBottom: '2%', textAlign: 'center' }}>Featured Influencers</h3>
          <div className=" user_profile_card_main_parent_div ">
            {influencers.map(influencer => (
              <InfluencerCard influencer={influencer} key={influencer.id} />
            ))}
          </div>
          <div className="text-center">
            <Link to={"/brand/influencer-list"}><button type="button" className="btn btn-dark">EXPLORE MORE</button></Link>
          </div>
        </div>
      </div>

      {/* 3 */}
      <WHATISTIXTEEN />

      {/* 4 */}
      {/* <HowItWork /> */}

      {/* 5 */}
      <OURSUCCESS/>

      {/* 5 */}

      <CarouselComponent />

{/* 6 */}
    <BrandFooter/>
    </div>
  );
}

export default App;
