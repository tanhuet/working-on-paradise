import classes from "./CvBox.module.scss";

function CvBox(props) {
  return (
    <a className={classes["box-cv"]} href={props.CvLink}>
      <div className={classes["title"]}>{props.CvName}</div>
      <p>Latest Update today</p>
      <div className={classes["list-button"]}>
        <button className={classes.share}>Share</button>
        <button className={classes.download}>Download</button>
      </div>
    </a>
  );
}

export default CvBox;
