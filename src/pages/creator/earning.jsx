import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// import MainReport from '../../components/creator/Report/mainReport'
import Footerbar from '../../components/footer/footerbar'
import { Route, Routes } from 'react-router-dom'
import MainEarning from '../../components/creator/earning/mainEarning'

function Earning() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token ) {
          navigate('/auth/login');
        }
      }, []);
    return (
        <>
            <Routes>
                <Route path="/my-earnings" element={<MainEarning />} />
            </Routes>
            <Footerbar />
        </>
    )
}

export default Earning