import React from "react"
import Brifcase from "../../icon/brifcase"
import Rocket from "../../icon/rocket"
import Talents from "../../icon/talents"
import classes from './Highlight.module.scss'

const Highlight = () => {
    return (
        <React.Fragment>
            <div className={classes['find-job']}>
                <section>
                    <h1>Find your <span>dream job</span></h1>
                    <h2>Now It's easy</h2>
                    <p>Thousand of Jobs here. Find Your New Job Today! New Job</p>
                    <p>Posting Today, Apply Now!</p>
                </section>
                <form>
                    <input type='text' />
                    <button>Search</button>
                </form>
            </div>
            <div className={classes.attainment}> 
                <div className={classes.job}>
                    <div className={classes.icon}>
                        <Brifcase/>
                    </div>
                    <div className={classes.info}>
                        <h3>8K+</h3>
                        <p>CURRENT JOBS</p>
                    </div>
                </div>
                <div className={classes.job}>
                    <div className={classes.icon}>
                        <Rocket/>
                    </div>
                    <div className={classes.info}>
                        <h3>8K+</h3>
                        <p>CURRENT JOBS</p>
                    </div>
                </div>
                <div className={classes.job}>
                    <div className={classes.icon}>
                        <Talents/>
                    </div>
                    <div className={classes.info}>
                        <h3>8K+</h3>
                        <p>CURRENT JOBS</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Highlight