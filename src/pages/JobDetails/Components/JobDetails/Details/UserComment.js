import { useEffect } from "react";
import classes from "./UserComment.module.scss";

const UserComment = () => {
  return (
    <div className={classes.des}>
      <div className={classes.name}>
        <h3>Username</h3>
        <p>2 mins ago</p>
      </div>
      <div className={classes.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          eget nullam non nisi est sit amet facilisis. Nisl condimentum id
          venenatis a condimentum vitae sapien pellentesque habitant.
        </p>
      </div>
    </div>
  );
};

export default UserComment;
