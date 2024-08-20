import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { makeApi } from '../../../api/callApi.tsx';
import MainLoader from '../../../utils/loader.jsx';
import HaveAccountfooter from '../../../utils/haveAccountfooter.jsx';

const Verification = ({ email, onOtpVerified }) => {
    const [otp, setOtp] = useState(Array(4).fill(''));
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);

    const inputRefs = useRef([]);

    useEffect(() => {
        let countdown;
        if (timer > 0) {
            countdown = setInterval(() => setTimer(timer - 1), 1000);
        } else {
            setCanResend(true);
        }
        return () => clearInterval(countdown);
    }, [timer]);

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleResendOtp = async () => {
        try {
            setLoading(true);
            const response = await makeApi("/api/send-otp", "POST", { email });
            if (response.data.success) {
                toast.success("OTP resent successfully.");
                setTimer(60);
                setCanResend(false);
            }
        } catch (error) {
            console.error('Error resending OTP:', error.response.data);
            toast.error("Failed to resend OTP.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const enteredOtp = parseInt(otp.join(''), 10);

        if (!enteredOtp) {
            toast.error('Please fill otp');
            return;
        }
        try {
            setLoading(true);
            const response = await makeApi("/api/verify-otp", "POST", { email, otp: enteredOtp });
            if (response.data.success === true) {
                toast.success(response.data.message, {
                    onClose: () => {
                        onOtpVerified();
                    }
                });
            }
        } catch (error) {
            console.error('Error sending data:', error.response.data);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length === 4) {
            handleSubmit({ preventDefault: () => {} });
        }
    }, [otp]);

    return (
        <>
            {/* {loading && <MainLoader />} */}
            {loading && <div className='loaderbgcolor' > <MainLoader /></div>}

            <ToastContainer style={{ width: "300px" }} autoClose={1000} />
            <div className="verification">
                <div className="Arrow21hd">
                    <h3>Verification</h3>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <div className="group7855">
                        <img src="../assets/img/Group 7855.png" alt="" />
                    </div>

                    <div className="otptxt">
                        <h5 className="EnterTheOtp">Enter the OTP</h5>
                        <p className="SentCode">We have sent the verification code to {email}</p>
                        <p className="SentCode">Please wait at least 1 minute to receive OTP on your email (please check your Spam folder as well)</p>
                    </div>

                    <div className="input-field">
                        {otp.map((digit, index) => (
                            <input type="tel" key={index} ref={el => (inputRefs.current[index] = el)} className="otp-input" name="otp1" value={digit} maxLength="1" onChange={(e) => handleChange(index, e.target.value)} />
                        ))}
                    </div>

                    <div id="otpTimer" className='mt-2'>
                        {timer > 0 ? <p>Resend OTP in {timer} seconds</p> : null}
                    </div>
                  
                    <div className="verifybtn">
                        {!loading ?
                            <input type="submit" className="" name="influregistrbtn" value="Verify" style={{ cursor: "pointer" }} />
                            :
                            <input type="submit" className="" name="influregistrbtn" value="Verifying" disabled />
                        }

                    
                    </div>
                </form>
                <div className='mt-3 text-center' disabled={!canResend} onClick={handleResendOtp} >
                    <button className='btn btn-warning' disabled={!canResend}>
                        {canResend ? "Resend OTP" : "Resend OTP (wait)"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Verification;
