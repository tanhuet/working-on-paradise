import classes from "./CV-page.module.scss";
import cvCreate from "../../../asses/cvCreate.png";
import RecomendedJob from '../../JobDetails/Components/recomended-job/RecomendedJob'
import HighlightJob from '../../../components/highlight-job/HighlightJob'

const CVPage = (props) => {
  
  return (
    <div className={`container-fluid ${classes["container-background"]}`}>
      <div className={`row ${classes["body-top"]}`}>
        <div className={`col-sm-7  row ${classes["create-cv"]}`}>
          <div className={`col-sm-5 ${classes["image"]}`}>
            <img src={cvCreate} alt="create cv" />
          </div>
          <div className={`col-sm-7 ${classes["content"]}`}>
            <div className={classes["content-create-cv"]}>
              Create your own CV and apply now
            </div>
            <div className={classes["div-create-cv"]}>
              <button className={classes["button-create-cv"]}>
                Create now
              </button>
            </div>
          </div>
        </div>
        <div className={`col-sm-1`}></div>
        <div className={`col-sm-4 ${classes["Recommended-job"]}`}>
        {props.items.map(item => (
        <RecomendedJob 
    key={item.id}
    companyName={item.companyName}
    logo = {item.logo}
    jobs = {item.jobs}
/>
      ))}
          
        </div>
      </div>
      <div className={classes["body-middle"]}>
        <div className={classes["create-cv"]}>
          <div className={classes["header-create-cv"]}>Create Job</div>
          <div className={classes["body-create-cv"]}>
            <div className={classes["box-cv"]}>
              <div
                style={{
                    paddingTop: '30px',
                  fontWeight: "600",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                CV's name
              </div>
              <div>Latest Update 2 days ago</div>
              <div>
                <button className={classes["button-download-share"]}>Share</button>
                <button className={classes["button-download-share"]}>DowLoad</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{padding: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <span style={{fontWeight: '700', fontSize: '50px', lineHeight: '75px', color: '#FFCC00'}}>IDEAL </span>
        <span style={{fontWeight: '700', fontSize: '50px', lineHeight: '75px'}}>POSITION FOR </span>
        <span style={{fontWeight: '700', fontSize: '50px', lineHeight: '75px', color: '#FFCC00'}}>YOU</span>
        </div>
      <div className={classes["body-bottom"]}>
        
        <div className={`row ${classes["three-box-job"]}`}>
          
          <div className={`col-sm-3`}>
            {props.jobs.map(job => (
              <HighlightJob
              // class = {classes.red}
              logo = {job.logo}
              companyName = {job.companyName}
              location = {job.location}
              category = {job.category}
              jobType = {job.jobType}
              skills = {job.skills}
              experience = {job.experience}
              minSalary = {job.minSalary}
              maxSalary = {job.maxSalary}
          />
            ))}
          </div>
          <div className={`col-sm-1`}></div>
          <div className={`col-sm-3`}>
          {props.jobs.map(job => (
              <HighlightJob
              // class = {classes.red}
              logo = {job.logo}
              companyName = {job.companyName}
              location = {job.location}
              category = {job.category}
              jobType = {job.jobType}
              skills = {job.skills}
              experience = {job.experience}
              minSalary = {job.minSalary}
              maxSalary = {job.maxSalary}
          />
            ))}
          </div>
          <div className={`col-sm-1`}></div>
          <div className={`col-sm-3`}>
            {props.jobs.map(job => (
              <HighlightJob
              // class = {classes.red}
              logo = {job.logo}
              companyName = {job.companyName}
              location = {job.location}
              category = {job.category}
              jobType = {job.jobType}
              skills = {job.skills}
              experience = {job.experience}
              minSalary = {job.minSalary}
              maxSalary = {job.maxSalary}
          />
            ))}</div>
          <div className={`col-sm-1`}></div>
        </div>
      </div>
    </div>
  );
};
export default CVPage;
