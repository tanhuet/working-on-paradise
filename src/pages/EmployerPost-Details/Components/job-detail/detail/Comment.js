import classes from "./Comment.module.scss";
import locationImg1 from "../../../../../asses/resume.png";

import UserComment from "./UserComment";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Comment = (props) => {
  const [comments, setComment] = useState([]);
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`https://tanhuet.site/job/${props.comment}/applications`, {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        })
        .catch((error) => console.log(error));
      setComment(response.data);
    };
    fetchData();
  }, [status]);

  const handleFuntion = (status) => {
    setStatus(status);
  };
  const listItem1 = comments?.filter((item) => item.status === "pending");
  const listItem = listItem1?.map((item) => (
    <UserComment data={item} key={item.toString()} status={handleFuntion} />
  ));
  return (
    <div className={classes.des}>
      <div className={classes.card}>
        <div className={classes.headname}>
          <img className={classes.img1} src={locationImg1} alt=".." />
          <h3>Applied Cvs</h3>
        </div>
        <div className={classes.company}>{listItem}</div>
      </div>
    </div>
  );
};

export default Comment;
