import classes from "./signup-page.module.scss"
import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import { NavLink } from "react-router-dom";


const Register = (props) => {
   return (
      <div className={classes["container-fluid"]}>
         <div className={classes["form"]}>
            <div className={classes["sign-up-register"]}>Sign Up</div>

            <div className={classes["account-register"]}>
               <div className={classes["input-box"]}>
                  <div className={classes["userAnswer"]}>
                     <input
                        type="text"
                        style={{ fontFamily: 'FontAwesome' }}
                        placeholder=" &#xF007; Username"
                        required
                     />
                  </div>
                  <div className={classes["email"]}>
                     <input type="email" style={{ fontFamily: 'FontAwesome' }} placeholder=" &#xf0e0; Email" required />
                  </div>
                  <div className={classes["phone-number"]}>
                     <input
                        type="text"
                        style={{ fontFamily: 'FontAwesome' }}
                        placeholder=" &#xf2a0; Phone Number"
                        required
                     />
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
                  <div className={classes["user-type"]}>
                  <input
                        type="text"
                        style={{ fontFamily: 'FontAwesome' }}
                        placeholder=" &#xf002; Select User Type"
                        required
                     /> 
                  </div>
               </div>

               <div className={`form-group row`}>
                  {/* <div class="col-sm-2"></div> */}
                  <div className={`col-sm-`}>
                     <div className={classes["form-check"]}>
                        <input className={classes["form-check-input"]} type="checkbox" id="gridCheck1" />
                        <label className={classes["form-check-label"]} for="gridCheck1">
                           I read and agree to <b>Terms & Conditions</b>
                        </label>
                     </div>
                  </div>
                
                  {/* <div class="col-sm-2"></div> */}
               </div>
            </div>

            <div className={classes["submit-button"]}>
               <button><NavLink to='/signin'>Create Account</NavLink></button>
               <div className={classes["sign-in-register"]}>
                  Already a member? <NavLink to='/signin'>Sign In</NavLink>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;