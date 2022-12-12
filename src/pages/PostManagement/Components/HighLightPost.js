import classes from "./HighlightPost.module.scss"
import { Link } from "react-router-dom"
import axios from "axios";
import config from "../../../config";
import { useSelector } from "react-redux";
import Card from "../../../components/UI/Card";
import editImg from "../../../asses/edit_img.png"
import deleteImg from "../../../asses/delete_img.png"
import swal from "sweetalert";

const HighlightPost = (props) => {
    const userStore = useSelector((state) => state.auth.login?.currentUser);

    const deletePost = (event) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(
                        `${config.api.url}/job/${props.id}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
                    )
                    swal("Your post has been deleted!", {
                        icon: "success",
                    }).then(() => {
                        window.location.reload();
                    });
                } else {
                    swal("Your post is safe!");
                }
            });
    };

    return (
        <Card className={classes.makeup}>
            <div className={classes.job}>
                <div className={classes.listJob}>
                    <Link to={"/employer-post/" + props.id}>
                        <div className={classes.info}>
                            <div className={classes.logo}>
                                <img src={props.logo} alt=".." />
                            </div>
                            <div className={classes.detail}>
                                <div>{props.jobName}</div>
                                <div className={classes.introduction}>
                                    {props.company} - {props.location} - {props.positions} - {props.typeOfJob
                                    } - {props.experience} - ${props.salary} - {props.candidates} slots
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={classes.listButton}>
                    <Link to={"/employer-post/" + props.id}>
                        <img className={classes.edit} src={editImg} alt="" />
                    </Link>
                    <button className={classes.delete} onClick={deletePost}>
                        <img src={deleteImg} alt="" />
                    </button>
                </div>
            </div>

            <div className={classes.skill}>
                <ul className={classes["skill-items"]}>
                    {props.skills.map((item) => (
                        <div key={item} className={classes.item}>
                            {item}
                        </div>
                    ))}
                </ul>
            </div>
        </Card>
    )
}

export default HighlightPost