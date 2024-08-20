import React from 'react'
import { Route, Routes } from "react-router"
import CreatorSingup from '../../components/Auth/creator/singup'
import Verification from '../../components/Auth/creator/otpVerifi'

function CreatorAuth() {
  return (
    <div>
       <Routes>
                <Route
                    path="/register"
                    element={<CreatorSingup />}
                />
               
        </Routes>
    </div>
  )
}

export default CreatorAuth