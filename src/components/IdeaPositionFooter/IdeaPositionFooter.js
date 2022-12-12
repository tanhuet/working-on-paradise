import classes from "./IdeaPositionFooter.module.scss";
import HighlightJob from "../HighlightJob/HighlightJob";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";

function IdeaPositionFooter(props) {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [jobs, setJobs] = useState();
  useEffect(() => {
    axios
      .get(`${config.api.url}/job/recommend/3`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userStore]);

  return (
    <div className={classes["body-bottom"]}>
      <div className={classes["title"]}>
        <span style={{ color: "#FFCC00" }}>IDEAL</span>
        <span>POSITION FOR</span>
        <span style={{ color: "#FFCC00" }}>YOU</span>
      </div>

      <div className={`row ${classes["idea-job"]}`}>
        {jobs?.map((job) => (
          <HighlightJob
            key={job.id}
            id={job.id}
            logo={job.authorAvatar}
            companyName={job.authorName}
            location={job.authorAddress}
            category={job.title}
            jobType={job.typeOfWorking}
            skills={job.tags
              .split(",")
              .filter((tag) => tag && tag.length > 0)
              .slice(0, 2)}
            experience={job.exp}
            salary={job.salary}
            bookmark={job.bookmark}
          />
        ))}
      </div>
    </div>
  );
}

export default IdeaPositionFooter;
