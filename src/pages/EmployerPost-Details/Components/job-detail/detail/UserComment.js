import classes from "./UserComment.module.scss";

const UserComment = () => {
  return (
    <div className={classes.des}>
      <div className={classes.name}>
        <h3>Username</h3>
        <p>2 mins ago</p>
        <button className={classes.button1}>Reply</button>
      </div>
      <div className={classes.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          eget nullam non nisi est sit amet facilisis. Nisl condimentum id
          venenatis a condimentum vitae sapien pellentesque habitant.
        </p>
      </div>
      <button className={classes.button2}>File's name</button>
    </div>
  );
};

export default UserComment;
