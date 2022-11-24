import classes from "./CV-page.module.scss";
import cvCreate from "../../../asses/cvCreate.png";
import RecomendedJob from "../../JobDetails/Components/recomended-job/RecomendedJob";
import HighlightJob from "../../../components/highlight-job/HighlightJob";
import CvCard from "./CvCard";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import config from "../../../config";
import axios from "axios";

const CVPage = (props) => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [listCv, setListCv] = useState([]);

  useEffect(() => {
    axios.get(`${config.api.url}/jobseeker`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
      setListCv(res.data.cv.split(","));
    });
  }, [userStore]);

  return (
    <div className={`container-fluid ${classes["container-background"]}`}>
      <div className={`${classes["body-top-top"]}`}>
        <div className={`${classes["body-left"]}`}>
          <div className={`${classes["advertisement"]}`}>
            <div className={`${classes["image"]}`}>
              <img src={cvCreate} alt="create cv" />
            </div>
            <div className={`${classes["content"]}`}>
              <div className={classes["content-create-cv"]}>Create your own CV and apply now</div>
              <div className={classes["div-create-cv"]}>
                <Link to="/cv/:cvld">
                  <button className={classes["button-create-cv"]}>Create now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={classes["created-cv"]}>
            <div className={classes["create-cv"]}>
              <div className={classes["header-create-cv"]}>
                <div className={classes["title-create-cv"]}>Created CV</div>

                <MdOutlineAddCircle className={classes["add-cv-btn"]} />
              </div>
              <div className={classes["body-create-cv"]}>
                {listCv.map((cv, index) => (
                  <CvCard CvName={"CV-" + index} CvLink={cv} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={classes["body-right"]}>
          <div className={`col-sm-4 ${classes["Recommended-job"]}`}>
            {props.items.map((item) => (
              <RecomendedJob key={item.id} companyName={item.companyName} logo={item.logo} jobs={item.jobs} />
            ))}
          </div>
        </div>
      </div>

      <div className={classes["body-bottom"]}>
        <div className={classes["title"]}>
          <span style={{ color: "#FFCC00" }}>IDEAL </span>
          <span>POSITION FOR </span>
          <span style={{ color: "#FFCC00" }}>YOU</span>
        </div>

        <div className={`row ${classes["idea-job"]}`}>
          {props.jobs.map((job) => (
            <HighlightJob
              // class = {classes.red}
              logo={job.logo}
              companyName={job.companyName}
              location={job.location}
              category={job.category}
              jobType={job.jobType}
              skills={job.skills}
              experience={job.experience}
              minSalary={job.minSalary}
              maxSalary={job.maxSalary}
            />
          ))}
          {props.jobs.map((job) => (
            <HighlightJob
              // class = {classes.red}
              logo={job.logo}
              companyName={job.companyName}
              location={job.location}
              category={job.category}
              jobType={job.jobType}
              skills={job.skills}
              experience={job.experience}
              minSalary={job.minSalary}
              maxSalary={job.maxSalary}
            />
          ))}
          {props.jobs.map((job) => (
            <HighlightJob
              // class = {classes.red}
              logo={job.logo}
              companyName={job.companyName}
              location={job.location}
              category={job.category}
              jobType={job.jobType}
              skills={job.skills}
              experience={job.experience}
              minSalary={job.minSalary}
              maxSalary={job.maxSalary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CVPage;
