import { Fragment, useState, useEffect } from "react";
import Iframe from "react-iframe";
import classes from "./AccountEmployer.module.scss";
import { useSelector } from "react-redux";
import config from "../../../config";
import React from "react";
import axios from "axios";
import Comment from "./Comment";
import Backdrop from "../../../components/Backdrop/Backdrop";
import editButton from "../../../asses/editButton.png";
import saveButton from "../../../asses/saveButton.png";

const AccountEmployer = (props) => {
  const USER = props.user;
  const [editIntro, setEditIntro] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  const [introduction, setIntroduction] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [size, setSize] = useState();

  const userStore = useSelector((state) => state.auth.login?.currentUser);

  const [name, setName] = useState();
  const [editName, setEditName] = useState(false);

  const [avatar, setAvatar] = useState();
  const [selectedAvatar, setSelectAvatar] = useState("");

  const [wallpaper, setWallpaper] = useState();

  useEffect(() => {
    axios
      .get(`${config.api.url}/user`, {
        headers: { Authorization: `Bearer ${userStore.accessToken}` },
      })
      .then((res) => {
        setName(res.data.name);
        setAvatar(res.data.avatar);
        setAddress(res.data.address);
      });
    axios
      .get(`${config.api.url}/employer`, {
        headers: { Authorization: `Bearer ${userStore.accessToken}` },
      })
      .then((res) => {
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setIntroduction(res.data.about);
        setSize(res.data.size);
        setWallpaper(res.data.wallpaper);
      });
  }, [userStore]);

  const handleSubmit = (event) => {
    axios.put(
      `${config.api.url}/employer`,
      {
        about: introduction,
        wallpaper: wallpaper,
        size: size,
      },
      { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
    );
    axios.put(
      `${config.api.url}/user`,
      {
        name: name,
        avatar: avatar,
        address: address,
      },
      { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
    );
  };
  // };

  const handleChangeAvatar = (event) => {
    setSelectAvatar(event.target.files[0]);
  };
  const handleSubmitSave = async (event) => {
    const newAvatar = new FormData();
    newAvatar.append(`file`, selectedAvatar);
    const avatarLink = await axios.post(
      `${config.api.url}/helper/upload`,
      newAvatar
    );
    axios
      .put(
        `${config.api.url}/user`,
        {
          avatar: avatarLink.data,
          name: name,
          address: address,
        },
        { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
      )
      .then(() => {
        window.location.reload();
      });
  };
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    USER && (
      <Fragment>
        <div className={classes["container1-1"]}>
          <div className={classes["edit-img"]}>
            <div>
              <img
                className={classes.circle}
                onClick={openDialog}
                src={avatar}
                alt=""
              />
            </div>
            {isOpen && (
              <Fragment>
                <Backdrop onClose={handleClose} />
                <form className={classes.form}>
                  <div className={classes.child}>
                    <h2>Change avatar</h2>
                  </div>
                  <div className={classes.child}>
                    <input type="file" onChange={handleChangeAvatar}></input>
                    <i
                      style={{ marginLeft: "10px" }}
                      className={"fa fa-camera"}
                    />
                  </div>
                  <div className={classes.submit}>
                    <button onClick={handleClose}>Cancel</button>
                    <button
                      onClick={() => {
                        handleSubmitSave();
                        setIsOpen(false);
                      }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </Fragment>
            )}
          </div>
          {editName === false ? (
            <>
              <div className={classes.text}>{name}</div>
              <button className={classes.makeupButton} onClick={() => setEditName(true)}>
                <img className={classes.edit} src={editButton} alt="" />
              </button>
            </>
          ) : (
            <>
              <input className={classes.text} value={name} onChange={(e) => setName(e.target.value)} style={{ width: "15%", borderRadius: '10px', border: '2px solid rgba(213, 246, 246, 0.5)' }}></input>
              <button
                className={classes.makeupButton}
                onClick={() => {
                  handleSubmit();
                  setEditName(false);
                }}
              >
                <img className={classes.save} src={saveButton} alt="" />
              </button>
            </>
          )}
        </div>
        <div id="list-example" className={classes["group-item"]}>
          <a
            className={`list-group-item list-group-item-action ${classes.style1}`}
            href="#list-item-2"
          >
            Basic Information
          </a>
          <a
            className={`list-group-item list-group-item-action ${classes.style1}`}
            href="#list-item-1"
          >
            Introduction
          </a>
        </div>

        <div className={`row`}>
          <div className={`col-xl-8`}>
            <div
              data-spy="scroll"
              data-target="#list-example"
              data-offset="0"
              className="scrollspy-example"
            >
              <div id="list-item-2" className={classes.title}>
                <div className={classes.makeup}>
                  <div className={classes.style1}>Basic Information</div>
                </div>
                <div>
                  {editInfo === false ? (
                    <button
                      className={classes.edit}
                      onClick={() => setEditInfo(true)}
                    >
                      <div className={classes.style3}>Edit</div>
                    </button>
                  ) : (
                    <button
                      className={classes.edit}
                      onClick={() => {
                        handleSubmit();
                        setEditInfo(false);
                      }}
                    >
                      <div className={classes.style3}>Save</div>
                    </button>
                  )}
                </div>
              </div>

              <div className={`d-flex`}>
                {editInfo === false ? (
                  <form className={classes.data}>
                    <div className={classes.left}>
                      <div className={`${classes.font} ${classes.phone}`}>
                        <label>Phone Number: </label> <br />
                        {phone}
                      </div>
                      <div className={`${classes.font} ${classes.address}`}>
                        <label>Permanent address: </label> <br />
                        {address}
                      </div>
                    </div>
                    <div className={classes.right}>
                      <div className={`${classes.font} ${classes.email}`}>
                        <label>Email: </label> <br />
                        {email}
                      </div>
                      <div className={`${classes.font} ${classes.size}`}>
                        <label>Company Size: </label> <br />
                        {size}
                      </div>
                    </div>
                  </form>
                ) : (
                  <form className={classes.data} onClick={handleSubmit}>
                    <div className={classes.left}>
                      <div className={`${classes.font} ${classes.phone}`}>
                        <label>Phone Number: </label> <br />
                        {USER.phone}
                      </div>
                      <div className={`${classes.font} ${classes.address}`}>
                        <label>Permanent address: </label> <br />
                        <textarea
                          className={`${classes.font} ${classes.editmake}`}
                          rows={"4"}
                          colums={"40"}
                          style={{ borderRadius: "10px", width: '300px' }}
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                        ></textarea>
                      </div>
                    </div>
                    <div className={classes.right}>
                      <div className={`${classes.font} ${classes.email}`}>
                        <label>Email (Verified/Unverified): </label> <br />
                        {USER.email}
                      </div>
                      <div className={`${classes.font} ${classes.size}`}>
                        <label>Company Size: </label> <br />
                        <textarea
                          className={`${classes.font} ${classes.editmake}`}
                          rows={"1"}
                          colums={"40"}
                          style={{ width: "300px", borderRadius: "10px" }}
                          onChange={(e) => setSize(e.target.value)}
                          value={size}
                        ></textarea>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              <div id="list-item-1" className={classes.title}>
                <div className={classes.makeup} style={{ width: "154px" }}>
                  <div className={classes.style1}>Introduction</div>
                </div>
                <div>
                  {editIntro === false ? (
                    <button
                      className={`${classes.edit} ${classes.margin1}`}
                      onClick={() => setEditIntro(true)}
                    >
                      <div className={classes.style3}>Edit</div>
                    </button>
                  ) : (
                    <button
                      className={`${classes.edit} ${classes.margin1}`}
                      onClick={() => {
                        handleSubmit();
                        setEditIntro(false);
                      }}
                    >
                      <div className={classes.style3}>Save</div>
                    </button>
                  )}
                </div>
              </div>

              <div>
                {editIntro === false ? (
                  <form
                    className={classes.data}
                    style={{ height: "auto", minHeight: "400px" }}
                  >
                    <div
                      className={classes.font}
                      style={{ height: "auto", padding: "20px" }}
                    >
                      <div className={classes.styleborder}>{introduction}</div>
                    </div>
                  </form>
                ) : (
                  <form
                    className={classes.data}
                    onSubmit={handleSubmit}
                    style={{ height: "auto", minHeight: "400px" }}
                  >
                    <textarea
                      className={`${classes.font} ${classes.textexper}`}
                      onChange={(e) => setIntroduction(e.target.value)}
                      style={{
                        height: "auto",
                        minHeight: "350px",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                      value={introduction}
                    ></textarea>
                  </form>
                )}
              </div>
              <Comment user={USER} />
            </div>
          </div>
          <div className={`col-xl-4 ${classes.map}`}>
            <div
              className={`d-flex justify-content-center ${classes.map2}`}
              style={{
                border: "4px solid #EEEEEE",
                borderRadius: "10px",
                maxHeight: "500px",
              }}
            >
              <Iframe
                title="myFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.567752638468!2d105.78214111531773!3d21.009957086008548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acab11ec72b9%3A0x4a34e18cc7b3b035!2zxJDhu5cgxJDhu6ljIEThu6VjLCBN4buFIFRyw6wsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1667836784431!5m2!1svi!2s"
                style={{
                  border: "0",
                  width: "600",
                  height: "450",
                  allowFullScreen: "",
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default AccountEmployer;
