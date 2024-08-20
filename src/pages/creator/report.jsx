import React, { useEffect } from 'react'
import MainReport from '../../components/creator/Report/mainReport'
import Footerbar from '../../components/footer/footerbar'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Report() {
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
                <Route path="/" element={<MainReport />} />
            </Routes>
            <Footerbar />
        </>
    )
}

export default Report