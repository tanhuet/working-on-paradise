import classes from "./SetUpAccJobSeeker.module.scss";
import settingImage from "../../../../asses/setting.png";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import config from "../../../../config";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const SetUpAccEmployer = (props) => {
  const [size, setSize] = useState("");
  const [address, setAddress] = useState("");
  const [wallpaper, setWallpaper] = useState("");
  const [selectedWallpaper, setSelectWallpaper] = useState("");
  const [avatar, setAvatar] = useState("");
  const [selectedAvatar, setSelectAvatar] = useState("");
  const [about, setAbout] = useState("");

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeWallpaper = (event) => {
    setWallpaper(event.target.value);

    setSelectWallpaper(event.target.files[0]);
  };
  const handleChangeAvatar = (event) => {
    setAvatar(event.target.value);

    setSelectAvatar(event.target.files[0]);
  };
  const handleChangeAbout = (event) => {
    setAbout(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  let navigate = useNavigate();
  const handleSubmitButton = async (event) => {
    event.preventDefault();

    if (wallpaper === "" || avatar === "") {
      swal("Error!", "Please upload wallpaper and avatar", "error");
    }

    const formDataWallpaper = new FormData();
    const formDataAvatar = new FormData();

    formDataWallpaper.append(`file`, selectedWallpaper);
    formDataAvatar.append(`file`, selectedAvatar);

    const wallpaperLink = await axios.post(`${config.api.url}/helper/upload`, formDataWallpaper);
    const avatarLink = await axios.post(`${config.api.url}/helper/upload`, formDataAvatar);

    const DUMMYJOBSEEKER = {
      username: props.account.username,
      name: props.account.name,
      email: props.account.email,
      phone: props.account.phone,
      avatar: avatarLink.data,
      address: address,
      password: props.account.password,
      about: about,
      wallpaper: wallpaperLink.data,
      size: size,
    };

    const newJobseeker = await axios
      .post(`${config.api.url}/employer`, DUMMYJOBSEEKER)
      .then((res) => {
        swal("Success!", "Your account has been created!", "success").then(() => {
          navigate("/login");
        });
      })
      .catch((err) =>
        swal("Error!", err.response.data, "error").then(() => {
          navigate("/signup");
        })
      );
  };

  return (
    <div className={`container-fluid ${classes["set-up-acc"]}`} style={{ fontWeight: "bold" }}>
      <div className={`row`}>
        <div className={`col-lg-5 col-sm-12 ${classes["img-setting"]}`}>
          <img src={settingImage}></img>
        </div>
        {/* colum content */}
        <div className={`col-lg-6 col-sm-12`}>
          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={classes["title"]}>Set Up Account</div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Size:</div>
            <div className={`col-sm-9`}>
              <input type="number" value={size} min="0" style={{ width: "100px" }} onChange={handleChangeSize} required></input>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Address:</div>
            <div className={`col-sm-9`}>
              <input type="text" value={address} style={{ width: "100%" }} onChange={handleChangeAddress} required></input>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>About:</div>
            <div className={`col-sm-9`}>
              <textarea rows={"10"} columns={"40"} style={{ width: "100%" }} value={about} onChange={handleChangeAbout}></textarea>
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Wallpaper:</div>
            <div className={`col-sm-9`}>
              <input type="file" value={wallpaper} onChange={handleChangeWallpaper} />
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Avatar:</div>
            <div className={`col-sm-9`}>
              <input type="file" value={avatar} onChange={handleChangeAvatar} />
            </div>
          </div>

          {/* row-content in colum content */}
          <div className={`row ${classes["row-in-column"]}`}>
            <div className={`col-sm-3`}></div>
            <div className={`col-sm-9 ${classes["button-save"]}`}>
              <button onClick={handleSubmitButton}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SetUpAccEmployer;
