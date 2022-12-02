import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import { useNavigate } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { logoutUser } from "../../store/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../store/auth-slice";

const MainNavigation = () => {
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
                <li className="nav-item">
                <NavLink className={`nav-link ${classes['btn-logout']}`} href="#" to="/account">{user.name}</NavLink>
                </li>
                <li className={`nav-item`}>
                  <NavLink className="nav-link" href="#" to="/signin" onClick={handleLogout}>Logout</NavLink>
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
