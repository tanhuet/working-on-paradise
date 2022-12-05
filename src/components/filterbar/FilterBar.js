import classes from "./FilterBar.module.scss"
import FilterImg from "../icon/filter"
import { useRef, useState } from "react"

const FilterBar = (props) => {


    const [isOpen, setIsOpen] = useState(false)
    const [typeOfWorkplace, setTypeOfWorkplace] = useState('')
    const [typeOfJob, setTypeOfJob] = useState('')
    const [experience, setExperience] = useState('')
    const company = useRef('')
    const category = useRef('')
    const skill = useRef('')
    const location = useRef('')
    const minSalary = useRef(0)
    const maxSalry = useRef(10000000)

    const openHandler = () => {
        setIsOpen(pre => {
            return !pre
        })
    }

    const filterHandler = (e) => {
        e.prenventDefault()
    }

    const filterDetailHandler = () => {
        const data = {
            company: company.current.value,
            category: category.current.value,
            skill: skill.current.value,
            location: location.current.value,
            salaryMin: minSalary.current.value,
            salaryMax: maxSalry.current.value,
            typeOfWorking: typeOfWorkplace,
            jobType: typeOfJob,
            experience: experience
        }
        props.onFilter(data)
    }

    return (
        <div className={classes.bar}>
            <div className={classes.filter}>
                <div className={classes['filter-button']}>
                    <button onClick={openHandler}>
                        <FilterImg />
                    </button>
                </div>
                <div className={classes['filter-search']}>
                    <form onSubmit={filterHandler}>
                    <input type="text" placeholder="Category, Company, TypeJob, ..." name="filter" list="job" />
                        <datalist id="job" >
                            {props.filter.slice(0, 7).map((item, index) => (    
                                <option value={item} key={index} />
                            ))}
                        </datalist>
                    </form>
                </div>
            </div>   
            {isOpen && <form>
                <div className={classes.detail}>
                    <div className={classes['detail-left']}>
                        <div className={classes['company']}>
                            <p>Company</p>
                            <input type="text" ref={company}/>
                        </div>
                        <div className={classes['category']}>
                            <p>Category</p>
                            <input type="text" ref={category}/>
                        </div>
                        <div className={classes['skill']}>
                            <p>Skill</p>
                            <input type="text" ref={skill}/>
                        </div>
                        <div className={classes['location']}>
                            <p>Location</p>
                            <input type="text" ref={location}/>
                        </div>
                        <div className={classes['salary']}>
                            <p>Salary</p>
                            <input type="number" ref={minSalary}/>
                            <p>to</p>
                            <input type="number" ref={maxSalry}/>
                        </div>
                    </div>
                    <div className={classes['detail-right']}>
                        <div className={classes['type-of-workplace']}>
                            <div className={classes.title}>
                                <p>Type of workplace</p>
                            </div>
                            <div className={classes.btn}>
                                <button 
                                type="button"
                                onClick={() => {
                                    setTypeOfWorkplace('On Site')
                                }}
                                style={{
                                    backgroundColor: typeOfWorkplace === 'On Site' ? "#6CE0E0" : "",
                                }}>On Site</button>
                                <button 
                                type="button"
                                onClick={() => {
                                    setTypeOfWorkplace('Remote')
                                }}
                                style={{
                                    backgroundColor: typeOfWorkplace === 'Remote' ? "#6CE0E0" : "",
                                }}>Remote</button>
                            </div>
                        </div>
                        <div className={classes['job-type']}>
                            <div className={classes.title}>
                                <p>Type of Job</p>
                            </div>
                            <div className={classes.btn}>
                                <button 
                                type="button"
                                onClick={() => {
                                    setTypeOfJob('full-time')
                                }}
                                style={{
                                    backgroundColor: typeOfJob === 'full-time' ? "#6CE0E0" : "",
                                }}>Full Time</button>
                                <button 
                                type="button"
                                onClick={() => {
                                    setTypeOfJob('part-time')
                                }}
                                style={{
                                    backgroundColor: typeOfJob === 'part-time' ? "#6CE0E0" : "",
                                }}>Part Time</button>
                                <button 
                                type="button"
                                onClick={() => {
                                    setTypeOfJob('freelancer')
                                }}
                                style={{
                                    backgroundColor: typeOfJob === 'freelancer' ? "#6CE0E0" : "",
                                }}>Freelancer</button>
                            </div>
                        </div>
                        <div className={classes['experience']}>
                            <div className={classes.title}>
                                <p>Experience</p>
                            </div>
                            <div className={`${classes.btn} ${classes.exp}`}>
                                <button 
                                type="button"
                                onClick={() => {
                                    setExperience('fresher')
                                }}
                                style={{
                                    backgroundColor: experience === 'fresher' ? "#6CE0E0" : "",
                                }}>Fresher</button>
                                <button 
                                type="button"
                                onClick={() => {
                                    setExperience('internship')
                                }}
                                style={{
                                    backgroundColor: experience === 'internship' ? "#6CE0E0" : "",
                                }}>Internship</button>
                                <button 
                                type="button"
                                onClick={() => {
                                    setExperience('junior')
                                }}
                                style={{
                                    backgroundColor: experience === 'junior' ? "#6CE0E0" : "",
                                }}>Junior</button>
                                <button 
                                type="button"
                                onClick={() => {
                                    setExperience('senior')
                                }}
                                style={{
                                    backgroundColor: experience === 'senior' ? "#6CE0E0" : "",
                                }}>Senior</button>
                                <button 
                                type="button"
                                onClick={() => {
                                    setExperience('chef')
                                }}
                                style={{
                                    backgroundColor: experience === 'chef' ? "#6CE0E0" : "",
                                }}>Chef</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.apply}`}>
                    <button type="button" onClick={filterDetailHandler}>Apply</button>
                </div>
            </form>}
        </div>
    )
}

export default FilterBar