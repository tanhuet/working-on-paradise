import classes from "./JobCard.module.scss"
import Card from "../UI/Card"

const JobCard = (props) => {
    console.log(props)
    return (
        <Card>
            <div>{props.companyName}</div>
            <div>{props.type}</div>
        </Card>
    )
}

export default JobCard