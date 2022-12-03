import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { logoutUser } from "../../store/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store/auth-slice";

const MainNavigation = () => {
  const [isDisplayAccount, setIsDisplayAccount] = useState(false)

  const user = useSelector((state) => state.auth.login?.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let axiosJWT = createAxios(user, dispatch, logoutSuccess);

  const handleLogout = () => {
    logoutUser(dispatch, navigate, axiosJWT);
  };

  const suggestion = useRef('')

  const searchHander = (e) => {
    e.preventDefault()
    navigate(`/category?filter=${suggestion.current.value}`)
  }

  const displayHandler = () => {
    setIsDisplayAccount(pre => {
      return !pre
    })
  }

  return (
    <header className={classes.header}>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${classes.nav}`}>
        <div className={`container-fluid ${classes.container}`}>
          <div className={classes.img}></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${classes.link}`} id="navbarSupportedContent">
           {user?.role ==="JobSeeker" || !user ? 
            (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" href="#" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#" to="/category">Category</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#" to="/favourite">Favourite</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#" to="/CV">CV</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#" to="/application">Application</NavLink>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" href="#" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#" to="/post/management">Post</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#" to="/Cv">CV</NavLink>
                </li>
              </ul>
            )}
            <form className="d-flex" onSubmit={searchHander}>
              <input className={`form-control me-2 ${classes['input']}`} type="search" placeholder="Search" aria-label="Search" ref={suggestion}/>
              {/* <button type="submit"></button> */}
            </form>
            {user ? (
              <ul className={`navbar-nav ${classes.auth}`}>
                <li className={classes['messager-icon']}>
                  <NavLink to="/message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-messenger" viewBox="0 0 16 16">
                    <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                  </svg>
                  </NavLink>
                </li>
                <li className={`nav-item ${classes.messager}`}>
                  <NavLink className="nav-link" href="#" to="/message">Chat</NavLink>
                </li>
                <li className={classes['messager-icon']}> {/* notification icon not mesanger icon*/}
                  <NavLink>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                  </svg>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={`nav-link ${classes['btn-logout']}`} href="#" onClick={displayHandler}>{user.name}</NavLink>
                {isDisplayAccount && 
                  <div className={classes.test}>
                    <NavLink to="/account">
                      <div className={classes.logout}>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        </div>
                        <div>
                          <NavLink className="nav-link" href="#" to="/account">Account</NavLink>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink to="/signin" onClick={handleLogout}>
                      <div className={classes.logout}>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-door-closed-fill" viewBox="0 0 16 16">
                            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                          </svg>
                        </div>
                        <div>
                          <NavLink className="nav-link" href="#" to="/signin" onClick={handleLogout}>Logout</NavLink>
                        </div>
                      </div>
                    </NavLink>
                  </div>}
                </li>
              </ul>
            ) : (
              <ul className={`navbar-nav ${classes.auth}`}>
                <li className="nav-item">
                  <NavLink className="nav-link" href="#" to="/signin">Sign In</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${classes['btn-logout']}`} href="#" to="/signup">Sign Up</NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
