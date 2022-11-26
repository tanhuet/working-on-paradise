import classes from "./HeaderChatArea.module.scss";
import { BsInfoCircle } from "react-icons/bs";

function HeaderChatArea(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.avatar}>
          <img src={props?.avatar} alt="avatar" />
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
