import { Fragment, useState, useEffect } from "react";
import Iframe from "react-iframe";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./EmployerInfo.module.scss";
import { useSelector } from "react-redux";
import config from "../../config";
import React from "react";
import axios from "axios";

const EmployerInfo = () => {
  //   const [editIntro, setEditIntro] = useState(false);
  //   const [editInfo, setEditInfo] = useState(false);

  //   const [introduction, setIntroduction] = useState();
  //   const [phone, setPhone] = useState();
  //   const [address, setAddress] = useState();
  //   const [email, setEmail] = useState();
  //   const [size, setSize] = useState();

  //   const userStore = useSelector((state) => state.auth.login?.currentUser);

  //   useEffect(() => {
  //     axios
  //       .get(`${config.api.url}/employer`, {
  //         headers: { Authorization: `Bearer ${userStore.accessToken}` },
  //       })
  //       .then((res) => {
  //         setPhone(res.data.phone);
  //         setEmail(res.data.email);
  //         setAddress(res.data.address);
  //         setIntroduction(res.data.about);
  //         setSize(res.data.size);
  //       });
  //   }, [userStore]);

  //   const handleSubmit = (event) => {
  //     axios.put(
  //       `${config.api.url}/employer`,
  //       {
  //         about: introduction,
  //         wallpaper: "wallpaper",
  //         size: size,
  //       },
  //       { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
  //     );
  //     axios.put(
  //       `${config.api.url}/user`,
  //       {
  //         name: USER.name,
  //         avatar: USER.avatar,
  //         address: address,
  //       },
  //       { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
  //     );
  //   };

  // };

  const userStore = useSelector((state) => state.auth.login?.currentUser);

  const [introduction, setIntroduction] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [size, setSize] = useState();
  const [name, setName] = useState();

  const employerId = useParams().employerId
  console.log(employerId);

  useEffect(() => {
    axios.get(`${config.api.url}/employer/${employerId}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
    .then((res) => {
        setName(res.data.name);
        setPhone(res.data.phone);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setIntroduction(res.data.about);
        setSize(res.data.size);
    })
  },  [userStore, employerId]);
  console.log(name);
  console.log(phone);
  console.log(email);
  console.log(address);
  console.log(introduction);
  console.log(size);
  
  
  return (
    <Fragment>
      <div className={classes["container2-2"]}>
        <div className={classes.circle}>
          <div className={classes.letter}>{name?.charAt(0)?.toUpperCase()}</div>
        </div>
        <div className={classes.text}>{name}</div>
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
              
            </div>

            <div className={`d-flex`}>
              
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
              
            </div>
            <div id="list-item-1" className={classes.title}>
              <div className={classes.makeup} style={{ width: "154px" }}>
                <div className={classes.style1}>Introduction</div>
              </div>
            </div>

            <div>
              
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
            </div>
          </div>
        </div>
        <div className={`col-xl-4 ${classes.map}`}>
          <div
            className={`d-flex justify-content-center ${classes.map2}`}
            style={{ border: "4px solid #EEEEEE", borderRadius: "10px" }}
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
  );
};

export default EmployerInfo;
