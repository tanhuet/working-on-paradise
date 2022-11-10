import { Fragment, useState } from "react";
import Iframe from "react-iframe";
import { useNavigate } from "react-router-dom";
import classes from "./AccountEmployer.module.scss";

const AccountEmployer = () => {
  const [user] = useState({
    name: "Username",
    phone: "024 37547865",
    email: "uet@vnu.edu.vn",
    address: "E3, Vietnam University of Hanoi, 144 Xuan Thuy, Cau Giay, Ha Noi",
  });
  const [intro] = useState({
    words:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer vitae. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lectus nulla at volutpat diam ut. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Eu turpis egestas pretium aenean pharetra magna. Morbi non arcu risus quis varius quam quisque. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Sapien et ligula ullamcorper malesuada. A diam sollicitudin tempor id eu nisl nunc mi. Dolor sit amet consectetur adipiscing elit. A iaculis at erat pellentesque adipiscing. Neque ornare aenean euismod elementum nisi quis eleifend. Aliquam malesuada bibendum arcu vitae. Auctor augue mauris augue neque gravida. In tellus integer feugiat scelerisque varius. Felis imperdiet proin fermentum leo vel orci.",
  });

  const navigate = useNavigate();

  const editHandler = (e) => {
    // console.log('e')
    navigate("/accountEmployer/employerEdit");
  };

  return (
    <Fragment>
      <div className={classes.container1}>
        <div className={classes.circle}>
          <div className={classes.letter}>
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className={classes.text}>{user.name}</div>
      </div>
      <div id="list-example" className={classes["group-item"]}>
        <a
          className={`list-group-item list-group-item-action ${classes.style1}`}
          href="#list-item-1"
        >
          Introduction
        </a>
        <a
          className={`list-group-item list-group-item-action ${classes.style1}`}
          href="#list-item-2"
        >
          Basic Information
        </a>
      </div>
      <div
        data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        className="scrollspy-example"
      >
        <div id="list-item-1" className={classes.title}>
          <div className={classes.makeup} style={{ width: "154px" }}>
            <div className={classes.style1}>Introduction</div>
          </div>
          <button className={classes.edit} onClick={editHandler}>
            <div className={classes.style3}>Edit</div>
          </button>
        </div>
        <div className={`d-flex`}>
          <div
            className={classes.data}
            style={{ height: "400px", padding: "20px" }}
          >
            <div className={classes.font}>{intro.words}</div>
          </div>
          <div className={`d-flex justify-content-end`} style={{marginLeft:'10%'}}>
          <Iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.567752638468!2d105.78214111531773!3d21.009957086008548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acab11ec72b9%3A0x4a34e18cc7b3b035!2zxJDhu5cgxJDhu6ljIEThu6VjLCBN4buFIFRyw6wsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1667836784431!5m2!1svi!2s" style={{border: '0', width: "600", height: "450", allowFullScreen: "", loading: 'lazy', referrerPolicy: 'no-referrer-when-downgrade'}} />
          </div>
        </div>
        <div id="list-item-2" className={classes.title}>
          <div className={classes.makeup}>
            <div className={classes.style1}>Basic Information</div>
          </div>
          <button className={classes.edit} onClick={editHandler}>
            <div className={classes.style3}>Edit</div>
          </button>
        </div>

        <div className={classes.data}>
          <div className={classes.left}>
            <div className={`${classes.font} ${classes.phone}`}>
              Phone Number: <br />
              {user.phone}
            </div>
            <div className={`${classes.font} ${classes.address}`}>
              Permanent address: <br />
              {user.address}
            </div>
          </div>
          <div className={classes.right}>
            <div className={`${classes.font} ${classes.email}`}>
              Email (Verified/Unverified): <br />
              {user.email}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Fragment>
  );
};

export default AccountEmployer;
