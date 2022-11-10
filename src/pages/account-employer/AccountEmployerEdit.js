import { Fragment, useState } from "react";
import classes from "./AccountEmployer.module.scss";
import Iframe from "react-iframe";


const AccountEmployerEdit = (props) => {
  const [user] = useState({
    name: "Username",
  });

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
          <button className={`${classes.edit} ${classes.margin1}`}>
            <div className={classes.style3}>Save</div>
          </button>
        </div>
        <div className={`d-flex`}>
        <div className={classes.data} style={{ height: "181px" }}>
          <textarea
            className={`${classes.font} ${classes.textexper}`}
          ></textarea>
        </div>
        <div className={`d-flex justify-content-end`} style={{marginLeft:'10%'}}>
          <Iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.567752638468!2d105.78214111531773!3d21.009957086008548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acab11ec72b9%3A0x4a34e18cc7b3b035!2zxJDhu5cgxJDhu6ljIEThu6VjLCBN4buFIFRyw6wsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1667836784431!5m2!1svi!2s" style={{border: '0', width: "600", height: "450", allowFullScreen: "", loading: 'lazy', referrerPolicy: 'no-referrer-when-downgrade'}} />
          </div>
        </div>
        <div id="list-item-2" className={classes.title}>
          <div className={classes.makeup}>
            <div className={classes.style1}>Basic Information</div>
          </div>
          <button className={classes.edit}>
            <div className={classes.style3}>Save</div>
          </button>
        </div>

        <div className={classes.data}>
          <div className={classes.left}>
            <div className={`${classes.font} ${classes.phone}`}>
              <label>Phone Number:</label> <br />
              <input
                type={"text"}
                className={`${classes.font} ${classes.editmake}`}
              ></input>
            </div>
            <div className={`${classes.font} ${classes.address}`}>
              <label>Permanent address:</label> <br />
              <textarea
                className={`${classes.font} ${classes.editmake}`}
                rows={"4"}
                colums={"40"}
              ></textarea>
            </div>
          </div>
          <div className={classes.right}>
            <div className={`${classes.font} ${classes.email}`}>
              <label>Email (Verified/Unverified):</label> <br />
              <input type={"text"} className={classes.font}></input>
            </div>
            <div className={`${classes.font} ${classes.age}`}>
              <label>Age:</label> <br />
              <input type={"text"} className={classes.font}></input>
            </div>
            <div className={`${classes.font} ${classes.gender}`}>
              <label>Gender:</label> <br />
              <input type={"text"} className={classes.font}></input>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountEmployerEdit;
