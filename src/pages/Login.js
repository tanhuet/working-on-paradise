import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './login.module.scss';
import './login.scss';

// icon.
// import { FaBeer } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = (props) => {
   return (
      <div class="container-fluid">
         <div class="form">
            <div className="sign-in">Sign In</div>

            <div className="account">
               <div className="input-box">
                  <div className="userAnswer">
                     <input type="text" style={{ fontFamily: 'FontAwesome'}} placeholder=" &#xF007; Username" required />
                  </div>

                  <div className="password">
                     <input type="text" style={{ fontFamily: 'FontAwesome'}} placeholder=" &#xf023; Password" required />
                  </div>
               </div>

               <div class="form-group row">
                  {/* <div class="col-sm-2"></div> */}
                  <div class="col-sm-5">
                     <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1">
                           Remember me
                        </label>
                     </div>
                  </div>
                  <div className="forgot-password col-sm-7">Forgot your Password?</div>
                  {/* <div class="col-sm-2"></div> */}
               </div>
            </div>

            <div className="submit-button">
               <button>Sign In</button>
               <div className="sign-up">
                  Don't have an account? <b>Sign Up Now</b>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;