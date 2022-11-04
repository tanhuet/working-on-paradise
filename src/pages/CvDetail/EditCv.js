import classes from "./EditCv.module.scss"
import locationImg from "../../asses/img-location.png"
import { Fragment, useRef } from "react"

const EditCv = (props) => {

    const CV = props.cv

    const date = useRef(null)

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
                    <input type="text" placeholder="Cv's Name"/>
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
                                <input type="text" />
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
                                            <input type="date" className={classes.date}/>
                                            <> - </>
                                            <input type="date" className={classes.date}/>
                                        </div>
                                    )}                                  
                                    {(
                                        <div>
                                            <input type="text" placeholder="postion"/>
                                            <> - </>
                                            <input type="text" placeholder="company"/>
                                        </div>
                                    )}
                                    {<textarea name="w3review" rows="6" cols="50" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes['info2']}>
                    <div className={classes['own-info']}>
                        <label>Date of birth:</label>
                        <p>xx/xx/xxxx</p>
                    </div>
                </div>
            </div>
        </form>
        </Fragment>
    )
}

export default EditCv