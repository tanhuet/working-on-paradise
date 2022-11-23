import classes from "./EditCv.module.scss"
import { Fragment, useRef} from "react"

const EditCv = (props) => {
    const CV = props.cv

    //useRef 
    const userName = useRef(CV.userName)
    const age = useRef(CV.age)
    const phone = useRef(CV.phone)
    const email = useRef(CV.email)
    const address = useRef(CV.address)
    const sex = useRef(CV.sex)
    const website = useRef(CV.website)
    const companyExperience1 = useRef(CV.experience[0].company)
    const startDateExperience1 = useRef(CV.experience[0].startDate)
    const endDateExperience1 = useRef(CV.experience[0].endDate)
    const positionExperience1 = useRef(CV.experience[0].position)
    const descriptionExperience1 = useRef(CV.experience[0].description)
    const companyExperience2 = useRef(CV.experience[1].company)
    const startDateExperience2 = useRef(CV.experience[1].startDate)
    const endDateExperience2 = useRef(CV.experience[1].endDate)
    const positionExperience2 = useRef(CV.experience[1].position)
    const descriptionExperience2 = useRef(CV.experience[1].description)
    const organizationActivities = useRef(CV.activities[0].organization)
    const startDateActivities = useRef(CV.activities[0].startDate)
    const endDateActivities = useRef(CV.activities[0].endDate)
    const positionActivities = useRef(CV.activities[0].position)
    const descriptionActivities = useRef(CV.activities[0].description)
    const schoolEducation = useRef(CV.education[0].school)
    const startDateEducation = useRef(CV.education[0].startDate)
    const endDateEducation = useRef(CV.education[0].endDate)
    const positionEducation = useRef(CV.education[0].position)
    const descriptionEducation = useRef(CV.education[0].description)
    const skill1 = useRef(CV.skills[0].skill)
    const descriptionSkill1 = useRef(CV.skills[0].description)
    const skill2 = useRef(CV.skills[1].skill)
    const descriptionSkill2 = useRef(CV.skills[1].description)
    
    const saveHandler = (e) => {
        e.preventDefault()
        props.onEdit(false)
        const EXPERIENCE = [
            {
              id: "1",
              company: companyExperience1.current.value,
              startDate: new Date(startDateExperience1.current.value),
              endDate: new Date(endDateExperience1.current.value),
              position: positionExperience1.current.value,
              description: descriptionExperience1.current.value,
            },
            {
              id: "2",
              company: companyExperience2.current.value,
              startDate: new Date(startDateExperience2.current.value),
              endDate: new Date(endDateExperience2.current.value),
              position: positionExperience2.current.value,
              description: descriptionExperience2.current.value,
            },
          ]
          const ACTIVITIES = [
            {
              id: "1",
              organization: organizationActivities.current.value,
              startDate: new Date(startDateActivities.current.value),
              endDate: new Date(endDateActivities.current.value),
              position: positionActivities.current.value,
              description: descriptionActivities.current.value,
            },
          ]
          const EDUCATION = [
            {
                id: "1",
                school: schoolEducation.current.value,
                startDate: new Date(startDateEducation.current.value),
                endDate: new Date(endDateEducation.current.value),
                position: positionEducation.current.value,
                description: descriptionEducation.current.value,
            },
          ]
          const SKILLS = [
            {
              id: "1",
              skill: skill1.current.value,
              description: descriptionSkill1.current.value
            },
            {
              id: "2",
              skill: skill2.current.value,
              description: descriptionSkill2.current.value
            },
          ]
        props.save({
            id: CV.id,
            logo: CV.logo,
            name: CV.name,
            nameUser: userName.current.value,
            age: age.current.value,
            phone: phone.current.value,
            email: email.current.value,
            website: "none",
            address: address.current.value,
            sex: sex.current.value,
            experience: EXPERIENCE,
            activities: ACTIVITIES,
            education: EDUCATION,
            skills: SKILLS
        })
    }

    return (
        <Fragment>
        <form className={classes.form} onSubmit={saveHandler}>
            <div className={classes.header}>
                <button>Save</button>
            </div>
            <div className={classes.name}>
                <div>
                    <input type="text" placeholder="Cv's Name" defaultValue={CV.name}/>
                </div>
            </div>
            <div className={classes.cv}>
                <div className={classes['info1']}>
                    <div className={classes.first}>
                        <div className={classes.img}>
                            <img src={CV.logo} alt="..."/>
                        </div>
                        <p>Name</p>
                        <div className={classes['name-user']}>
                            <div>
                                <input type="text" defaultValue={CV.nameUser} ref={userName}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.experience}>      
                        <h2>
                            Experience
                        </h2>
                        <div className={classes['exprience-detail']}>
                            <div className={classes['item']}>       
                                {(
                                    <div>
                                        {/* <h5>start date - end date</h5> */}
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.experience[0].startDate).toISOString().split('T')[0]} ref={startDateExperience1} />
                                        <> - </>
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.experience[0].endDate).toISOString().split('T')[0]} ref={endDateExperience1} />
                                    </div>
                                )}                                  
                                {(
                                    <div>
                                        <input type="text" placeholder="postion" defaultValue={CV.experience[0].position} ref={positionExperience1} />
                                        <> - </>
                                        <input type="text" placeholder="company" defaultValue={CV.experience[0].company} ref={companyExperience1} />
                                    </div>
                                )}
                                {<textarea name="w3review" rows="6" cols="50" defaultValue={CV.experience[0].description} ref={descriptionExperience1} placeholder="Some information about your old company" /> }
                            </div>
                            <div className={classes['item']}>       
                                {(
                                    <div>
                                        {/* <h5>start date - end date</h5> */}
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.experience[1].startDate).toISOString().split('T')[0]} ref={startDateExperience2} />
                                        <> - </>
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.experience[1].endDate).toISOString().split('T')[0]} ref={endDateExperience2} />
                                    </div>
                                )}                                  
                                {(
                                    <div>
                                        <input type="text" placeholder="postion" defaultValue={CV.experience[1].position} ref={positionExperience2} />
                                        <> - </>
                                        <input type="text" placeholder="company" defaultValue={CV.experience[1].company} ref={companyExperience2} />
                                    </div>
                                )}
                                {<textarea name="w3review" rows="6" cols="50" defaultValue={CV.experience[1].description} ref={descriptionExperience2} placeholder="Some information about your old company"/> }
                            </div>
                        </div>
                    </div>
                    <div className={classes.experience}>      
                        <h2>
                            Activities
                        </h2>
                        <div className={classes['activities-detail']}>
                            <div className={classes['item']}>       
                                {(
                                    <div>
                                        {/* <h5>start date - end date</h5> */}
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.activities[0].startDate).toISOString().split('T')[0]} ref={startDateActivities} />
                                        <> - </>
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.activities[0].endDate).toISOString().split('T')[0]} ref={endDateActivities}/>
                                    </div>
                                )}                                  
                                {(
                                    <div>
                                        <input type="text" placeholder="postion" defaultValue={CV.activities[0].position} ref={positionActivities} />
                                        <> - </>
                                        <input type="text" placeholder="organization" defaultValue={CV.activities[0].organization} ref={organizationActivities} />
                                    </div>
                                )}
                                {<textarea name="w3review" rows="6" cols="50" defaultValue={CV.activities[0].description} ref={descriptionActivities} placeholder="Some information about the organization"/>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['info2']}>
                    <div className={classes['own-info']}>
                        <label>Age:</label>
                        <br/>
                        <input type="text" className={classes.birthday} defaultValue={CV.age} ref={age} />
                        <p></p>
                        <label>Phone number:</label>
                        <br/>
                        <input type="text" className={classes.phone} defaultValue={CV.phone} ref={phone}/>
                        <p></p>
                        <label>Email:</label>
                        <br/>
                        <input type="text" className={classes.phone} defaultValue={CV.email} ref={email}/>
                        <p></p>
                        <label>Website:</label>
                        <br/>
                        <input type="text" className={classes.website} defaultValue={CV.website} ref={website}/>
                        <p></p>
                        <label>Address:</label>
                        <br/>
                        <input type="text" className={classes.address} defaultValue={CV.address} ref={address}/>
                        <p></p>
                        <label>Sex:</label>
                        <br/>
                        <input type="text" className={classes.sex} defaultValue={CV.sex} ref={sex}/>
                    </div>
                    <div className={classes.education}>      
                        <h2>
                            Education
                        </h2>
                        <div className={classes['education-detail']}>
                            <div className={classes['item']}>       
                                {(
                                    <div>
                                        {/* <h5>start date - end date</h5> */}
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.education[0].startDate).toISOString().split('T')[0]} ref={startDateEducation} />
                                        <> - </>
                                        <input type="date" className={classes.date} defaultValue={new Date(CV.education[0].endDate).toISOString().split('T')[0]} ref={endDateEducation}/>
                                    </div>
                                )}                                  
                                {(
                                    <div>
                                        <input type="text" placeholder="postion" defaultValue={CV.education[0].position} ref={positionEducation} />
                                        <> - </>
                                        <input type="text" placeholder="school" defaultValue={CV.education[0].school} ref={schoolEducation} />
                                    </div>
                                )}
                                {<textarea name="w3review" rows="6" cols="50" defaultValue={CV.education[0].description} ref={descriptionEducation} placeholder="Some information about your  school" />}
                            </div>
                        </div>
                    </div>  
                    <div className={classes.skills}>      
                        <h2>
                            Skills
                        </h2>
                        <div className={classes['skills-detail']}>
                            <div className={classes['item']}>
                                <input type="text" defaultValue={CV.skills[0].skill} ref={skill1} placeholder="Your skill" />
                                {<textarea name="w3review" rows="6" cols="50" defaultValue={CV.skills[0].description} ref={descriptionSkill1} placeholder="Descrip about your skill" />}
                            </div>
                            <div className={classes['item']}>
                                <input type="text" defaultValue={CV.skills[1].skill} ref={skill2} placeholder="Your skill" />
                                {<textarea name="w3review" rows="6" cols="50" defaultValue={CV.skills[1].description} ref={descriptionSkill2} placeholder="Descrip about your skill" />}
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </form>
        </Fragment>
    )
}

export default EditCv