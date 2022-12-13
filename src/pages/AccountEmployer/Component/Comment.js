import classes from "./AccountEmployer.module.scss";
import commentAccEmployer from "../../../asses/comment-accEmployer.png";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deleteImg from "../../../asses/delete_img.png"


const Comment = (props) => {
  const user = props.user;
  const userStore = useSelector((state) => state.auth.login?.currentUser);

  const [comment, setComment] = useState();
  const [listComment, setListComment] = useState([]);

  useEffect(() => {
    axios.get(`${config.api.url}/employer/${user.id}/comments`, { headers: { Authorization: `Bearer ${userStore?.accessToken}` } }).then((res) => {
      setListComment(res.data);
    });
  }, []);

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${config.api.url}/employer/${user.id}/comment`,
      {
        content: comment,
      },
      { headers: { Authorization: `Bearer ${userStore?.accessToken}` } }
    );
    setListComment([res.data, ...listComment]);
    window.location.reload();
  };

  const compareTime = (a, b) => {
    const date1 = new Date(b.createdAt);
    const date2 = new Date(a.createdAt);
    if (date1.getMonth() === date2.getMonth()) {
      if (date1.getDate() === date2.getDate()) {
        return date1.getHours() - date2.getHours();
      }
      return date1.getDate() - date2.getDate();
    } else {
      return date1.getMonth() - date2.getMonth();
    }
  };

  const deleteComment = async (idComment) => {
    const res = await axios.delete(
      `${config.api.url}/comments/${idComment}`,
      { headers: { Authorization: `Bearer ${userStore?.accessToken}` } }
    );
    setListComment([res.data, ...listComment]);
    window.location.reload();
  };

  return (
    <form>
      {/* table comment-account-employer */}
      <div className={classes["comment-accEmployer"]}>
        {/* dong 1 */}
        <div className={`row`}>
          <div className={`col-sm-2`}>
            <img src={commentAccEmployer} width="100px" height="100px" />
          </div>
          <div className={`col-sm-4 ${classes["title-left-comment"]}`}>Comments</div>
          {!userStore && (
            <Link to="/home">
              {" "}
              <div className={`col-sm-6 ${classes["title-right-comment"]}`}>Sign in / Sign up to comment</div>
            </Link>
          )}
        </div>
        {/* nhap them comment */}
        <div>
          <textarea
            className={`${classes.font} ${classes.textexper}`}
            placeholder="Add comment here..."
            onChange={handleChangeComment}
            style={{
              height: "auto",
              minHeight: "200px",
              padding: "10px",
              marginBottom: "10px",
            }}
          ></textarea>
        </div>

        {userStore && (
          <div className={classes["button-post"]}>
            <button onClick={handlePostComment}>Post</button>
          </div>
        )}

        {/* cac comment cu */}
        <div className={classes["comment-old"]}>
          {/* comment so 1 */}
          {listComment?.sort(compareTime).map((item) => {
            return (
              <div>
                <div className={`row`}>
                  <div className={`col-sm-4 ${classes["username-old"]}`}>{item?.user?.name}</div>
                  <div className={`col ${classes["button-delete"]}`}>
                    <button type='button' onClick={() => deleteComment(item.id)}><img src={deleteImg} alt="" /></button>
                  </div>
                </div>
                <div className={classes["comment-content"]}>{item?.content}</div>
                <div className={`col-sm-4 ${classes["mins-old"]}`}>{new Date(item?.createdAt)?.toISOString()?.slice(0, 16)?.replace("T", " ")}</div>

                <hr style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};
export default Comment;
