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
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={suggestion}/>
              {/* <button type="submit"></button> */}
            </form>
            {user ? (
              <ul className={`navbar-nav ${classes.auth}`}>
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
