import classes from "./ForgotPassword-page.module.scss";
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import { NavLink } from "react-router-dom";

const ForgotPassWordPage = (props) => {
    return (
        <div className={classes["container-fluid"]}>
           <div className={classes["form"]}>
              <div className={classes["header-forgot"]}>
                <div className={classes["forgot-pass"]}>Forgot Password?</div>
                <div className={classes["describe"]}>To reset your password, you need your email or mobile number that can be authenticated</div>
              </div>
  
              <div className={classes["account-forgot-pass"]}>
                 <div className={classes["input-box"]}>
                    
                    <div className={classes["email"]}>
                       <input type="email" style={{ fontFamily: 'FontAwesome' }} placeholder=" &#xf0e0; Email" required />
                    </div>
                    
                    <div className={classes["password"]}>
                       <input
                          type="text"
                          style={{ fontFamily: 'FontAwesome' }}
                          placeholder=" &#xf023; Password"
                          required
                       />
                       <input
                          type="text"
                          style={{ fontFamily: 'FontAwesome' }}
                          placeholder=" &#xf023; Confirm Password"
                          required
                       />
                    </div>
                    
                 </div>
  
                {/* <div className={`form-group row`}>
                    <div className={`col-sm-`}>
                       <div className={classes["form-check"]}>
                          <input className={classes["form-check-input"]} type="checkbox" id="gridCheck1" />
                          <label className={classes["form-check-label"]} for="gridCheck1">
                             I read and agree to <b>Terms & Conditions</b>
                          </label>
                       </div>
                    </div>
                 </div> */}
              </div>
  
              <div className={classes["submit-button"]}>
                 <button className={classes["reset-button"]}>Reset PassWord</button>
                 <br/>
                 <button className={classes["login-button"]}><NavLink to='/signin'>Back to Login</NavLink></button>
                 {/* <div className={classes["sign-in-register"]}>
                    Already a member? <b>Sign In</b>
                 </div> */}
              </div>
           </div>
        </div>
     );
}
export default ForgotPassWordPage;