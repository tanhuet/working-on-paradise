import RecommendedJob from "../../../components/RecommendedJob/RecommendedJob"
import classes from "./RecommendedJobs.module.scss"

const RecommendedJobs = (props) => {
    return (
        <div className={classes['recommended-jobs']}>
        {props.recomendedJobs.map((item) => (
          <RecommendedJob
            key={item.id}
            id={item.id}
            companyName={item.companyName}
            logo={item.logo}
            jobName={item.jobName}
            address={item.address}
            position={item.position}
            salary={item.salary}
            jobType={item.jobType}
            slot={item.slot}
          />
        ))}
        </div>
    )
}

export default RecommendedJobs