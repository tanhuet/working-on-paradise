import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import ApplicationCard from "./ApplicationCard";
import { useEffect } from "react";

const JobList = (props) => {
  const application = props.application;

  useEffect(() => {
    console.log(application);
  }, [application]);
  return (
    <div className={classes.main}>
      <Wrap className={classes["job-list"]}>
        <div className={classes.title}>
          <p>Applied Job's posts</p>
        </div>
        <div className={classes.list}>
          {application
            ? application.map((a) => (
                <ApplicationCard
                  id={a.job.id}
                  logo={a.job.authorAvatar}
                  companyName={a.job.authorName}
                  location={a.job.authorAddress}
                  experience={a.experience}
                  status={a.status}
                  title={a.job.title}
                  jobType={a.job.typeOfWorking}
                  salary={a.job.salary}
                  skills={a.job.tags.split(",")}
                />
              ))
            : null}
        </div>
      </Wrap>
    </div>
  );
};

export default JobList;
