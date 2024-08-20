
import React, { useEffect, useState } from 'react';
import { Route, Routes,useNavigate } from 'react-router-dom';
import MainAllcampain from '../../components/creator/AllCampain/mainAllcampain';
import Footerbar from '../../components/footer/footerbar';
import Maincampens from '../../components/creator/campensdetail/maincampens';
import CampainList from '../../components/creator/campain/campainList';
import VerifyPOP from '../../utils/Auth/VerifiPopup';
import { makeApi } from '../../api/callApi.tsx';
import { useUser } from '../../context/UserContext.js';
import MainLoader from '../../utils/loader.jsx';
import StatusPage from '../../components/creator/campain/capainsttus.jsx';

function Createpages() {
  const navigate = useNavigate();

    const [isverify, setIsverify] = useState(false);
    const [isloading, setIsloading] = useState(true);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token ) {
          navigate('/auth/login');
        }
      }, []);

    const FetachData  = async () => {
        try {
            const res = await makeApi('/api/my-profile', 'GET');
            if (res.data.user.verification === 'Social Media Verification Pending') {
                setIsverify(true);
            }
            setIsloading(false);
        } catch (error) {
            console.error(error);
            setIsloading(false);
        }
    };
    useEffect(() => {
        FetachData();
    }, []);

  

    const closePopup = () => {
        setIsverify(false);
    };

 

    return (
        <div>
            {isloading && <MainLoader />}
            {isverify && (
                <div
                    style={{
                        position: 'fixed',
                        zIndex: '10001',
                        top: '-20px',
                        left: '0',
                        right: '0',
                        bottom: '0',
                    }}
                >
                    <VerifyPOP onClose={closePopup} />
                </div>
            )}
            <Routes>
                <Route path="/home" element={<MainAllcampain />} />
                <Route path="/campaign/details/:id" element={<Maincampens />} />
                <Route path="/campanes/list" element={<CampainList />} />
                <Route path="/status/:campaignId" element={<StatusPage/>} />
            </Routes>
            <Footerbar />
        </div>
    );
}

export default Createpages;
