import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './register.scss';

import 'font-awesome/css/font-awesome.min.css';

const Register = (props) => {
   return (
      <div class="container-fluid">
         <div class="form">
            <div className="sign-up-register">Sign Up</div>

            <div className="account-register">
               <div className="input-box">
                  <div className="userAnswer">
                     <input
                        type="text"
                        style={{ fontFamily: 'FontAwesome' }}
                        placeholder=" &#xF007; Username"
                        required
                     />
                  </div>
                  <div className="email">
                     <input type="email" style={{ fontFamily: 'FontAwesome' }} placeholder=" &#xf0e0; Email" required />
                  </div>
                  <div className="phone-number">
                     <input
                        type="text"
                        style={{ fontFamily: 'FontAwesome' }}
                        placeholder=" &#xf2a0; Phone Number"
                        required
                     />
                  </div>
                  <div className="password">
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
                  <div className='user-type'>
                  <input
                        type="text"
                        style={{ fontFamily: 'FontAwesome' }}
                        placeholder=" &#xf002; Select User Type"
                        required
                     /> 
                  </div>
               </div>

               <div class="form-group row">
                  {/* <div class="col-sm-2"></div> */}
                  <div class="col-sm-">
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1">
                           I read and agree to <b>Terms & Conditions</b>
                        </label>
                     </div>
                  </div>
                
                  {/* <div class="col-sm-2"></div> */}
               </div>
            </div>

            <div className="submit-button">
               <button>Create Account</button>
               <div className="sign-in-register">
                  Already a member? <b>Sign In</b>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;