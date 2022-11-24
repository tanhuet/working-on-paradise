import classes from "./CvCard.module.scss";

function CvCard(props) {
  return (
    <a className={classes["box-cv"]} href={props.CvLink}>
      <div className={classes["title"]}>{props.CvName}</div>
      <p>Latest Update today</p>
      <div className={classes["list-button"]}>
        <button>Share</button>
        <button>Download</button>
      </div>
    </a>
  );
}

export default CvCard;
