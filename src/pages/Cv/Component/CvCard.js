import classes from "./CvCard.module.scss";

function CvCard() {
  return (
    <div className={classes["box-cv"]}>
      <div className={classes["title"]}>CV's name</div>
      <p>Latest Update 2 days ago</p>
      <div className={classes["list-button"]}>
        <button>Share</button>
        <button>Download</button>
      </div>
    </div>
  );
}

export default CvCard;
