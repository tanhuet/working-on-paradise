import classes from "./AccountEmployer.module.scss";
import commentAccEmployer from "../../../asses/comment-accEmployer.png";
 const Comment = () => {
    return (
        <div>
            {/* table comment-account-employer */}
        <div className={classes["comment-accEmployer"]}>
        {/* dong 1 */}
        <div className={`row`}>
          <div className={`col-sm-2`}>
            <img
              src={commentAccEmployer}
              width="100px"
              height="100px"
            />
          </div>
          <div className={`col-sm-4 ${classes["title-left-comment"]}`}>
            Comments
          </div>
          <div className={`col-sm-6 ${classes["title-right-comment"]}`}>
            Sign in / Sign up to comment
          </div>
        </div>
        {/* nhap them comment */}
        <div>
          <textarea
            className={`${classes.font} ${classes.textexper}`}
            placeholder="Add comment here..."
            style={{
              height: "auto",
              minHeight: "200px",
              padding: "10px",
              marginBottom: "10px",
            }}
          ></textarea>
        </div>
        
        <div className={classes['button-post']}><button>Post</button></div>

        {/* cac comment cu */}
        <div className={classes["comment-old"]}>
          {/* comment so 1 */}
          <div>
            <div className={`row`}>
              <div className={`col-sm-4 ${classes["username-old"]}`}>Username</div>
              <div className={`col-sm-4 ${classes["mins-old"]}`}>2 mins ago</div>
            </div>
            <div>content comment</div>
            <hr style={{width: '100%'}}/>
          </div>

          {/* comment so 2 */}
          <div>
            <div className={`row`}>
              <div className={`col-sm-4 ${classes["username-old"]}`}>Username</div>
              <div className={`col-sm-4 ${classes["mins-old"]}`}>2 mins ago</div>
            </div>
            <div>content comment</div>
            <hr style={{width: '100%'}}/>
          </div>

        </div>
      </div>
        </div>
    );
 }
 export default Comment;