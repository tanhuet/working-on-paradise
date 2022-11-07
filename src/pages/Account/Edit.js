import { Fragment, useState } from "react"
import classes from "./AccountPage.module.scss"
const Edit = (props) => {
    const [user] = useState({
        name: "Username",
      });
 
    return (
        <Fragment>
            <div className={classes.container1}>
                <div className={classes.circle}>
                    <div className={classes.letter}>{user.name.charAt(0).toUpperCase()}</div>
                </div>
                <div className={classes.text}>{user.name}</div>
            </div>
            <div id="list-example" className={classes["group-item"]}>
                <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-1">Basic Information</a>
                <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-2">Experience</a>
                <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-3">Education</a>
                <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-4">Advanced Skill</a>
                <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-5">Career Field</a>
                <a className={`list-group-item list-group-item-action ${classes.style1}`} href="#list-item-6">CV</a>
            </div>
            <div data-spy="scroll" data-target="#list-example" data-offset="0" className="scrollspy-example">
                <div id="list-item-1" className={classes.title}>
                    <div className={classes.makeup}>
                        <div className={classes.style2}>Basic Information</div>
                    </div>
                    <button className={classes.edit}>
                        <div className={classes.style3}>Save</div>
                    </button>
                </div>
                
                <div className={classes.data}>
                    <div className={classes.left}>
                        <div className={`${classes.font} ${classes.phone}`}>
                            <label>Phone Number:</label> <br/>
                            <input type={"text"} className={`${classes.font} ${classes.editmake}`}></input>
                        </div>
                        <div className={`${classes.font} ${classes.address}`}>
                            <label>Permanent address:</label> <br/>
                            <textarea className={`${classes.font} ${classes.editmake}`} rows={"4"} colums={"40"}></textarea>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={`${classes.font} ${classes.email}`}>
                            <label>Email (Verified/Unverified):</label> <br/>
                            <input type={"text"} className={classes.font}></input>
                        </div>
                        <div className={`${classes.font} ${classes.age}`}>
                            <label>Age:</label> <br/>
                            <input type={"text"} className={classes.font}></input>
                        </div>
                        <div className={`${classes.font} ${classes.gender}`}>
                            <label>Gender:</label> <br/>
                            <input type={"text"} className={classes.font}></input>
                        </div>
                    </div>
                </div>

                <div id="list-item-2" className={classes.title}>
                    <div className={classes.makeup} style={{width: '154px'}}>
                        <div className={classes.style2}>Experience</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin1}`}>
                        <div className={classes.style3} >Save</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '181px'}}>
                    <textarea className={`${classes.font} ${classes.textexper}`}></textarea>
                </div>
                
                <div id="list-item-3" className={classes.title}>
                    <div className={classes.makeup} style={{width: '140px'}}>
                        <div className={classes.style2}>Education</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin2}`}>
                        <div className={classes.style3}>Save</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '170px'}}>
                    <textarea className={`${classes.font} ${classes.textedu}`}></textarea>
                </div>

                <div id="list-item-4" className={classes.title}>
                    <div className={classes.makeup} style={{width: '182px'}}>
                        <div className={classes.style2}>Advanced Skill</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin3}`}>
                        <div className={classes.style3}>Save</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '181px'}}>
                    <textarea className={`${classes.font} ${classes.textexper}`}></textarea>
                </div>


                <div id="list-item-5" className={classes.title}>
                    <div className={classes.makeup} style={{width: '182px'}}>
                        <div className={classes.style2}>Career Field</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin3}`}>
                        <div className={classes.style3}>Save</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '324px'}}></div>

                <div id="list-item-6" className={classes.title}>
                    <div className={classes.makeup} style={{width: '91px'}}>
                        <div className={classes.style2}>CV</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin4}`}>
                        <div className={classes.style3}>Save</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '293px'}}>
                    <div className={classes.containercv}>
                        <button className={`${classes.share} ${classes.style4}`}>Share</button>
                        <button className={`${classes.download} ${classes.style4}`}>Download</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Edit