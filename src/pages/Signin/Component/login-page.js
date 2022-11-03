import classes from "./login-page.module.scss"
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import { NavLink } from "react-router-dom";


const LoginPage = (props) => {
    return (
       <div className = {classes["container-fluid"]}>
          <div className={classes.form}>
             <div className={classes["sign-in"]}>Sign In</div>
 
             <div className= {classes["account"]}>
                <div className={classes["input-box"]}>
                   <div className={classes["userAnswer"]}>
                      <input type="text" style={{ fontFamily: 'FontAwesome'}} placeholder=" &#xF007; Username" required />
                   </div>
 
                   <div className={classes["password"]}>
                      <input type="text" style={{ fontFamily: 'FontAwesome'}} placeholder=" &#xf023; Password" required />
                   </div>
                </div>
 
                <div className={`row form-group`}>
                   {/* <div class="col-sm-2"></div> */}
                   <div className={`col-sm-5`}>
                      <div className={classes["form-check"]}>
                         <input className={classes["form-check-input"]} type="checkbox" id="gridCheck1" />
                         <label className={classes["form-check-label"]} for="gridCheck1">
                            Remember me
                         </label>
                      </div>
                   </div>
                   <div className={`col-sm-7 ${classes["forgot-password"]}`}><NavLink to='/forgot'>Forgot your Password?</NavLink></div>
                   {/* <div class="col-sm-2"></div> */}
                </div>
             </div>
 
             <div className={classes["submit-button"]}>
                <button><NavLink to='/home'>Sign In</NavLink></button>
                <div className={classes["sign-up"]}>
                   Don't have an account? <NavLink to='/signup'>Sign Up Now</NavLink>
                </div>
             </div>
          </div>
       </div>
    );
 };
 
 export default LoginPage;