import React from "react";
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

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.left}>
          <div className={classes.img}></div>
          <ul>
            <li>
              <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/category">
                Category
              </NavLink>
            </li>
            <li>
              <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/favourite">
                Favourite
              </NavLink>
            </li>
            <li>
              <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/cv">
                CV
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.center}>
          <form>
            <input type="text" placeholder="Search" />
            {/* <button></button> */}
          </form>
        </div>
        <div className={classes.right}>
          {user ? (
            //write code here if user login
            <ul>
              <li className={classes.signup}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/account">
                  {user.name}
                </NavLink>
              </li>
              <li className={classes.signin}>
                <NavLink onClick={handleLogout} className={(navData) => (navData.isActive ? classes.active : "")}>
                  Logout
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul>
              <li className={classes.signin}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/signin">
                  Sign in
                </NavLink>
              </li>
              <li className={classes.signup}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : "")} to="/signup">
                  Sign up
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
