// import classes from "./JobCard.module.scss"
import Card from "../UI/Card"

const JobCard = (props) => {
    return (
        <Card>
            <div>{props.category}</div>
            <div>{props.type}</div>
        </Card>
    )
}

export default JobCard