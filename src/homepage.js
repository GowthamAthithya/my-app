import React from "react";
import {Link} from "react-router-dom";

function homePage(){
    return(
        <div>
            <div className="nav">
                <div className="logo">
                <Link to="/">Company Logo</Link>
                </div>
                <div className="signin-links">
                    <Link to="/AdminLogin" className="signin-link">Admin</Link>
                    <Link to="/login-Page" className="signin-link">SignIn</Link>
                    <Link to="" className="signin-link">SignUp</Link>
                </div>
            </div>

            <h1>Welcome to Company <br/> HomePage</h1>
        </div>
    )
}

export default homePage