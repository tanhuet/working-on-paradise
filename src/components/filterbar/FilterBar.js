import classes from "./FilterBar.module.scss"
import FilterImg from "../icon/filter"

const FilterBar = () => {
    return (
        <div className={classes.bar}>
            <div className={classes.filter}>
                <div className={classes['filter-button']}>
                    <button>
                        <FilterImg />
                    </button>
                </div>
                <div className={classes['filter-search']}>
                    <input type="text" placeholder="Category, Company, TypeJob, ..."/>
                </div>
            </div>   
            <form>
                <div className={classes.detail}>
                    <div className={classes['detail-left']}>
                        <div className={classes['company']}>
                            <p>Company</p>
                            <input type="text" />
                        </div>
                        <div className={classes['category']}>
                            <p>Category</p>
                            <input type="text" />
                        </div>
                        <div className={classes['skill']}>
                            <p>Skill</p>
                            <input type="text" />
                        </div>
                        <div className={classes['location']}>
                            <p>Location</p>
                            <input type="text" />
                        </div>
                        <div className={classes['salary']}>
                            <p>Salary</p>
                            <input type="text" />
                            <p>to</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={classes['detail-right']}>
                        <div className={classes['type-of-workplace']}>
                            <div className={classes.title}>
                                <p>Type of workplace</p>
                            </div>
                            <div className={classes.btn}>
                                <button>On Site</button>
                                <button>Remote</button>
                            </div>
                        </div>
                        <div className={classes['job-type']}>
                            <div className={classes.title}>
                                <p>Type of workplace</p>
                            </div>
                            <div className={classes.btn}>
                                <button>Full-time</button>
                                <button>Part time</button>
                                <button>Freelancer</button>
                            </div>
                        </div>
                        <div className={classes['experience']}>
                            <div className={classes.title}>
                                <p>Experience</p>
                            </div>
                            <div className={classes.btn}>
                                <button>Fresher</button>
                                <button>Internship</button>
                                <button>Junior</button>
                                <button>Senior</button>
                                <button>Chef</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FilterBar