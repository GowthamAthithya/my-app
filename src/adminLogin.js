import React from 'react';
import {Link} from 'react-router-dom';

function adminLogin(){
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

             <div id="loginBox">
                 <h2>Admin Login</h2>
            <form action="">
                <div className="label">
                    <label for="userName" >User Name</label>
                </div>
                <br/> <hr/>
                <input type="text" id="userName" ></input>
                <br/> <hr/>
                <div className="label">
                    <lable for="password" >Password</lable>
                </div>
                <br/> <hr/>
                <input type="password" id="password"></input>
                <br/> <hr/>
                {/* <input type="submit" to="/listNavigation"></input> */}
                <div className="submit-btn">
                <Link to="/nameList1">submit</Link> 
                </div>

            </form>
        </div>
        </div>
    )
}

export default adminLogin