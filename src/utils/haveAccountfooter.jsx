import React from 'react'
import { Link } from 'react-router-dom'

function HaveAccountfooter() {
    return (
        <div>
            <div style={{ marginTop: "10px" }} >
                <div className="AlreadyHaveAnAccountSignIn">
                    <span>Already have an account? </span>
                    <Link to={"/auth/login"} >
                        <a>Sign-in</a>
                    </Link>
                </div>

                {/* Terms and Conditions */}
                <div className="TermsAndConditionsPolicy">Terms and conditions Policy.</div>
            </div>
        </div>
    )
}

export default HaveAccountfooter