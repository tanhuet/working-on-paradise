import classes from "./HeaderChatArea.module.scss";
import { BsInfoCircle } from "react-icons/bs";

function HeaderChatArea(props) {
  const onErrorImage = (image) => {
    image.onError = "";
    image.target.src = "https://jobsgo-storage.s3.ap-southeast-1.amazonaws.com/images/638cbf1120549255be3248de";
    return true;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.avatar}>
          <img src={props?.avatar} alt="avatar" onError={onErrorImage} />
        </div>
        <div className={classes.infoUser}>
          <div className={classes.name}>{props?.name}</div>
          <div className={classes.active}>Active</div>
        </div>
      </div>
      <BsInfoCircle className={classes.feedback} />
    </div>
  );
}

export default HeaderChatArea;
