import classes from "./EditCv.module.scss"
import locationImg from "../../asses/img-location.png"
import { Fragment} from "react"

const EditCv = (props) => {

    const CV = props.cv

    const saveHandler = (e) => {
        e.preventDefault()
        props.onEdit(false)
    }

    return (
        <Fragment>
        <form className={classes.form} onSubmit={saveHandler}>
            <div className={classes.header}>
                <button>Save</button>
            </div>
            <div className={classes.name}>
                <div>
                    <input type="text" placeholder="Cv's Name" value={CV.name}/>
                </div>
            </div>
            <div className={classes.cv}>
                <div className={classes['info1']}>
                    <div className={classes.first}>
                        <div className={classes.img}>
                            <img src={locationImg} alt="..."/>
                        </div>
                        <p>Name</p>
                        <div className={classes['name-user']}>
                            <div>
                                <input type="text" value={CV.nameUser}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.experience}>      
                        <h2>
                            Experience
                        </h2>
                        <div className={classes['exprience-detail']}>
                            {CV.experience.map(item => (
                                <div className={classes['item']} key={item.id}>       
                                    {(
                                        <div>
                                            {/* <h5>start date - end date</h5> */}
                                            <input type="date" className={classes.date} value={new Date(item.startDate).toISOString().split('T')[0]} />
                                            <> - </>
                                            <input type="date" className={classes.date} value={new Date(item.endDate).toISOString().split('T')[0]}/>
                                        </div>
                                    )}                                  
                                    {(
                                        <div>
                                            <input type="text" placeholder="postion" value={item.position}/>
                                            <> - </>
                                            <input type="text" placeholder="company" value={item.company} />
                                        </div>
                                    )}
                                    {<textarea name="w3review" rows="6" cols="50" value={item.description}/>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes['info2']}>
                    <div className={classes['own-info']}>
                        <label>Date of birth:</label>
                        <br/>
                        <input type="date" className={classes.birthday} value={(CV.birthday).toISOString().split('T')[0]}/>
                        <p></p>
                        <label>Phone number:</label>
                        <br/>
                        <input type="text" className={classes.phone} value={CV.phone} />
                        <p></p>
                        <label>Email:</label>
                        <br/>
                        <input type="text" className={classes.phone} value={CV.email} />
                        <p></p>
                        <label>Website:</label>
                        <br/>
                        <input type="text" className={classes.website} value={CV.website} />
                        <p></p>
                        <label>Address:</label>
                        <br/>
                        <input type="text" className={classes.address} value={CV.address} />
                        <p></p>
                        <label>Sex:</label>
                        <br/>
                        <input type="text" className={classes.sex} value={CV.sex} />
                    </div>
                    <div className={classes.education}>      
                        <h2>
                            Education
                        </h2>
                        <div className={classes['education-detail']}>
                            {CV.education.map(item => (
                                <div className={classes['item']} key={item.id}>       
                                    {(
                                        <div>
                                            {/* <h5>start date - end date</h5> */}
                                            <input type="date" className={classes.date} value={new Date(item.startDate).toISOString().split('T')[0]} />
                                            <> - </>
                                            <input type="date" className={classes.date} value={new Date(item.endDate).toISOString().split('T')[0]}/>
                                        </div>
                                    )}                                  
                                    {(
                                        <div>
                                            <input type="text" placeholder="postion" value={item.position}/>
                                            <> - </>
                                            <input type="text" placeholder="school" value={item.school} />
                                        </div>
                                    )}
                                    {<textarea name="w3review" rows="6" cols="50" value={item.description}/>}
                                </div>
                            ))}
                        </div>
                    </div>  
                    <div className={classes.skills}>      
                        <h2>
                            Skills
                        </h2>
                        <div className={classes['skills-detail']}>
                            {CV.skills.map(item => (
                                <div className={classes['item']} key={item.id}>
                                    <input type="text" value={item.skill}/>
                                    {<textarea name="w3review" rows="6" cols="50" value={item.description}/>}
                                </div>
                            ))}
                        </div>
                    </div>  
                </div>
                
            </div>
        </form>
        </Fragment>
    )
}

export default EditCv