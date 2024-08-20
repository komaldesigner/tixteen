import React, { useEffect, useState } from 'react'
import MaincreatorDetails from '../../components/user/creator/maincreatorDetails'
import { Route, Routes,useNavigate } from 'react-router-dom'
import Accountlist from '../../components/creator/profile/Accountlist'
import PersonalInfo from '../../components/creator/profile/PersonalInfo'
import Acdetails from '../../components/creator/profile/Acdetails'
import UserAddress from '../../components/creator/profile/UserAddress'
import Addaddress from '../../components/creator/profile/Addadress'
import { makeApi } from '../../api/callApi.tsx'
import Bankinginfo from '../../components/creator/profile/Bankinginfo.jsx'

function User() { 
    const navigate = useNavigate();
 
    const [userDatas, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token ) {
          navigate('/auth/login');
        }
      }, []);
    const fetchUser = async () => {
        try {
            const res = await makeApi('/api/my-profile', 'GET');
            setUserData(res.data.user);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/my-account" element={<MaincreatorDetails />} />
                <Route path="/my-details" element={<Accountlist />} />
                <Route path="/personal-Information" element={<PersonalInfo userDatas={userDatas} />} />
                <Route path="/account-details" element={<Acdetails userDatas={userDatas} />} />
                <Route path="/my-address" element={<UserAddress />} />
                <Route path="/add-address" element={<Addaddress />} />
                <Route path="/Bank-details" element={<Bankinginfo />} />
                

            </Routes>
        </div>
    )
}

export default User