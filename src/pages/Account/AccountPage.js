import { Fragment, useState } from "react"
import { Navigate } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./AccountPage.module.scss"

const AccountPage = () => {
    const [user] = useState({
        name: "Username",
        phone: "0123456789",
        email: "uet@vnu.edu.vn",
        address: "E3, Vietnam University of Hanoi, 144 Xuan Thuy, Cau Giay, Ha Noi",
        age: "20",
        gender: "Female"
      });

      const navigate = useNavigate()

      const editHandler = (e) => {
        // console.log('e')
        navigate("/account/edit")
      }

   
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
                    <button className={classes.edit} onClick={editHandler}>
                        <div className={classes.style3}>Edit</div>
                    </button>
                </div>
                
                <div className={classes.data}>
                    <div className={classes.left}>
                        <div className={`${classes.font} ${classes.phone}`}>
                            Phone Number: <br/>
                            {user.phone}
                        </div>
                        <div className={`${classes.font} ${classes.address}`}>
                            Permanent address: <br/>
                            {user.address}
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={`${classes.font} ${classes.email}`}>
                            Email (Verified/Unverified): <br/>
                            {user.email}
                        </div>
                        <div className={`${classes.font} ${classes.age}`}>
                            Age: <br/>
                            {user.age}
                        </div>
                        <div className={`${classes.font} ${classes.gender}`}>
                            Gender: <br/>
                            {user.gender}
                        </div>
                    </div>
                </div>

                <div id="list-item-2" className={classes.title}>
                    <div className={classes.makeup} style={{width: '154px'}}>
                        <div className={classes.style2}>Experience</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin1}`}>
                        <div className={classes.style3} >Edit</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '181px'}}>
                    <div className={classes.font}></div>
                </div>
                
                <div id="list-item-3" className={classes.title}>
                    <div className={classes.makeup} style={{width: '140px'}}>
                        <div className={classes.style2}>Education</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin2}`}>
                        <div className={classes.style3}>Edit</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '170px'}}>
                    <div className={classes.font}></div>
                </div>

                <div id="list-item-4" className={classes.title}>
                    <div className={classes.makeup} style={{width: '182px'}}>
                        <div className={classes.style2}>Advanced Skill</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin3}`}>
                        <div className={classes.style3}>Edit</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '181px'}}>
                    <div className={classes.font}></div>
                </div>

                <div id="list-item-5" className={classes.title}>
                    <div className={classes.makeup} style={{width: '182px'}}>
                        <div className={classes.style2}>Career Field</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin3}`}>
                        <div className={classes.style3}>Edit</div>
                    </button>
                </div>
                <div className={classes.data} style={{height: '324px'}}>
                    
                </div>

                <div id="list-item-6" className={classes.title}>
                    <div className={classes.makeup} style={{width: '91px'}}>
                        <div className={classes.style2}>CV</div>
                    </div>
                    <button className={`${classes.edit} ${classes.margin4}`}>
                        <div className={classes.style3}>Edit</div>
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

export default AccountPage