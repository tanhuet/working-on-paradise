import { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Account.module.scss";

const Account = (props) => {
  const USER = props.user;

  const [editInfor, setEditInfor] = useState(false);
  const edit = () => {
    setEditInfor(true);
  };
  const save = () => {
    setEditInfor(false);
  };

  const [editEx, setEditEx] = useState(false);
  const editExper = () => {
    setEditEx(true);
  };
  const saveExper = () => {
    setEditEx(false);
  };

  const [editEdu, setEditEdu] = useState(false);
  const editEducation = () => {
    setEditEdu(true);
  };
  const saveEducaton = () => {
    setEditEdu(false);
  };

  const [editAd, setEditAd] = useState(false);
  const editAdvan = () => {
    setEditAd(true);
  };
  const saveAdvan = () => {
    setEditAd(false);
  };

  const [editCa, setEditCa] = useState(false);
  const editCareer = () => {
    setEditCa(true);
  };
  const saveCareer = () => {
    setEditCa(false);
  };

  return (
    USER && (
      <Fragment>
        <div className={classes.container1}>
          <div className={classes.circle}>
            <div className={classes.letter}>{USER.name.charAt(0).toUpperCase()}</div>
          </div>
          <div className={classes.text}>{USER.name}</div>
        </div>
        <div id="list-example" className={classes["group-item"]}>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-1">
            Basic Information
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-2">
            Experience
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-3">
            Education
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-4">
            Advanced Skill
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-5">
            Career Field
          </a>
          <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-6">
            CV
          </a>
        </div>
        <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
          <div id="list-item-1" className={classes.title}>
            <div className={classes.makeup}>
              <div className={classes.style2}>Basic Information</div>
            </div>
            <div>
              {editInfor === false ? (
                <button className={classes.edit} onClick={edit}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={classes.edit} onClick={save}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>

          <div>
            {editInfor === false ? (
              <form className={classes.data} onSubmit={edit}>
                <div className={classes.left}>
                  <div className={`${classes.font} ${classes.phone}`}>
                    <label>Phone Number: </label> <br />
                    {USER.phone}
                  </div>
                  <div className={`${classes.font} ${classes.address}`}>
                    <label>Permanent address: </label> <br />
                    {USER.address}
                  </div>
                </div>
                <div className={classes.right}>
                  <div className={`${classes.font} ${classes.email}`}>
                    <label>Email (Verified/Unverified): </label> <br />
                    {USER.email}
                  </div>
                  <div className={`${classes.font} ${classes.age}`}>
                    <label>Age: </label> <br />
                    {USER.age}
                  </div>
                  <div className={`${classes.font} ${classes.gender}`}>
                    <label>Gender: </label> <br />
                    {USER.gender}
                  </div>
                </div>
              </form>
            ) : (
              <form className={classes.data} onSubmit={save}>
                <div className={classes.left}>
                  <div className={`${classes.font} ${classes.phone}`}>
                    <label>Phone Number:</label> <br />
                    <input type={"text"} className={`${classes.font} ${classes.editmake}`} value={USER.phone}></input>
                  </div>
                  <div className={`${classes.font} ${classes.address}`}>
                    <label>Permanent address:</label> <br />
                    <textarea className={`${classes.font} ${classes.editmake}`} rows={"4"} colums={"40"} value={USER.address}></textarea>
                  </div>
                </div>
                <div className={classes.right}>
                  <div className={`${classes.font} ${classes.email}`}>
                    <label>Email (Verified/Unverified):</label> <br />
                    <input type={"text"} className={classes.font} value={USER.email}></input>
                  </div>
                  <div className={`${classes.font} ${classes.age}`}>
                    <label>Age:</label> <br />
                    <input type={"text"} className={classes.font} value={USER.age}></input>
                  </div>
                  <div className={`${classes.font} ${classes.gender}`}>
                    <label>Gender:</label> <br />
                    <input type={"text"} className={classes.font} value={USER.gender}></input>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div id="list-item-2" className={classes.title}>
            <div className={classes.makeup} style={{ width: "154px" }}>
              <div className={classes.style2}>Experience</div>
            </div>
            <div>
              {editEx === false ? (
                <button className={`${classes.edit} ${classes.margin1}`} onClick={editExper}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin1}`} onClick={saveExper}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editEx === false ? (
              <form className={classes.data} style={{ height: "181px" }}>
                <div className={classes.font}></div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "181px" }}>
                <textarea className={`${classes.font} ${classes.textexper}`}></textarea>
              </form>
            )}
          </div>

          <div id="list-item-3" className={classes.title}>
            <div className={classes.makeup} style={{ width: "140px" }}>
              <div className={classes.style2}>Education</div>
            </div>
            <div>
              {editEdu === false ? (
                <button className={`${classes.edit} ${classes.margin2}`} onClick={editEducation}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin2}`} onClick={saveEducaton}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editEdu === false ? (
              <form className={classes.data} style={{ height: "170px" }}>
                <div className={classes.font}></div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "170px" }}>
                <textarea className={`${classes.font} ${classes.textedu}`}></textarea>
              </form>
            )}
          </div>

          <div id="list-item-4" className={classes.title}>
            <div className={classes.makeup} style={{ width: "182px" }}>
              <div className={classes.style2}>Advanced Skill</div>
            </div>
            <div>
              {editAd === false ? (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={editAdvan}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={saveAdvan}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editAd === false ? (
              <form className={classes.data} style={{ height: "181px" }}>
                <div className={classes.font}></div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "181px" }}>
                <textarea className={`${classes.font} ${classes.textexper}`}></textarea>
              </form>
            )}
          </div>

          <div id="list-item-5" className={classes.title}>
            <div className={classes.makeup} style={{ width: "182px" }}>
              <div className={classes.style2}>Career Field</div>
            </div>
            <div>
              {editCa === false ? (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={editCareer}>
                  <div className={classes.style3}>Edit</div>
                </button>
              ) : (
                <button className={`${classes.edit} ${classes.margin3}`} onClick={saveCareer}>
                  <div className={classes.style3}>Save</div>
                </button>
              )}
            </div>
          </div>
          <div>
            {editCa === false ? (
              <form className={classes.data} style={{ height: "324px" }}>
                <div className={classes.containerCarField}>
                  <div className={`${classes.font} ${classes.item1}`}>
                    <label className={classes.a}>Desired Career Field:</label>
                    <p>
                      Design <br />
                      Media and Communications <br />
                      Human Resource
                    </p>
                  </div>
                  <div className={`${classes.font} ${classes.item2}`}>
                    <label className={classes.b}>Type of Job:</label>
                    <p>
                      Freelancer <br />
                      Remote <br />
                    </p>
                  </div>
                  <div className={`${classes.font} ${classes.item3}`}>
                    <label className={classes.c}>Desired salary:</label>
                    <p>VND 10.000.000</p>
                  </div>
                  <div className={`${classes.font} ${classes.item4}`}>
                    <label className={classes.d}>Desired workplace:</label>
                    <p className={classes.font}>Hanoi, Vietnam</p>
                  </div>
                </div>
              </form>
            ) : (
              <form className={classes.data} style={{ height: "324px" }}>
                <div className={classes.containerCarField}>
                  <div className={`${classes.font} ${classes.item1}`}>
                    <label className={classes.a}>Desired Career Field:</label>
                    <textarea className={classes.font} style={{ width: "450px" }}></textarea>
                  </div>
                  <div className={`${classes.font} ${classes.item2}`}>
                    <label className={classes.b}>Type of Job:</label>
                    <textarea className={classes.font} style={{ width: "450px" }}></textarea>
                  </div>
                  <div className={`${classes.font} ${classes.item3}`}>
                    <label className={classes.c}>Desired salary:</label>
                    <textarea className={classes.font} style={{ width: "450px" }}></textarea>
                  </div>
                  <div className={`${classes.font} ${classes.item4}`}>
                    <label className={classes.d}>Desired workplace:</label>
                    <textarea className={classes.font} style={{ width: "450px" }}></textarea>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div id="list-item-6" className={classes.title}>
            <div className={classes.makeup} style={{ width: "91px" }}>
              <div className={classes.style2}>CV</div>
            </div>
            <Link to="/cv/:cvld">
              <button className={`${classes.edit} ${classes.margin4}`}>
                <div className={classes.style3}>Edit</div>
              </button>
            </Link>
          </div>
          <div className={classes.data} style={{ height: "293px" }}>
            <div className={classes.containercv}>
              <button className={`${classes.share} ${classes.style4}`}>Share</button>
              <button className={`${classes.download} ${classes.style4}`}>Download</button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default Account;
