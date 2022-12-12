import classes from "./CvPage.module.scss";
import cvCreate from "../../../asses/cvCreate.png";
import CvCard from "./CvCard";
import { MdOutlineAddCircle } from "react-icons/md";
import { ImUpload3 } from "react-icons/im";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import config from "../../../config";
import axios from "axios";
import RecommendedJob from "../../../components/RecommendedJob/RecommendedJob";
import IdeaPosition from "../../../components/IdeaPositionFooter/IdeaPositionFooter";

const CVPage = (props) => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [listCv, setListCv] = useState([]);

  useEffect(() => {
    loadListCv();
  }, [userStore]);

  const loadListCv = () => {
    axios
      .get(`${config.api.url}/jobseeker`, {
        headers: { Authorization: `Bearer ${userStore.accessToken}` },
      })
      .then((res) => {
        const resList = res.data.cv.split(",");
        const newList = [];
        resList.forEach((item) => {
          if (item && item !== "" && item.length > 3 && item !== "cv link") {
            newList.push(item);
          }
        });
        setListCv(newList);
      });
  };

  const handleChangeCV = async (event) => {
    const formDataCV = new FormData();

    formDataCV.append(`file`, event.target.files[0]);

    await axios.post(`${config.api.url}/cv/upload`, formDataCV, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
      setListCv([...listCv, res.data]);
    });
  };

  return (
    <div className={`container-fluid ${classes["container-background"]}`}>
      <div className={`${classes["body-top-top"]}`}>
        <div className={`${classes["body-left"]}`}>
          <div className={`${classes["advertisement"]}`}>
            <div className={`${classes["image"]}`}>
              <img src={cvCreate} alt="create cv" />
            </div>
            <div className={`${classes["content"]}`}>
              <div className={classes["content-create-cv"]}>Create your own CV and apply now</div>
              <div className={classes["div-create-cv"]}>
                <Link to="/cv/:cvld">
                  <button className={classes["button-create-cv"]}>Create now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col-lg-8 col-md-8 ${classes["created-cv"]}`}>
              <div className={classes["create-cv"]}>
                <div className={classes["header-create-cv"]}>
                  <div className={classes["title-create-cv"]}>Created CV</div>
                  <div className={classes["button-add-upload"]}>
                    <Link to="/cv/:cvld">
                      <MdOutlineAddCircle className={classes["add-cv-btn"]} />
                    </Link>
                    <label for="upload-cv">
                      <ImUpload3 className={classes["upload-cv-btn"]} />
                    </label>
                    <input type="file" name="cv" id="upload-cv" className={classes["upload-cv"]} onChange={handleChangeCV} />
                  </div>
                </div>
                <div className={classes["body-create-cv"]}>
                  {listCv.map((cv, index) => (
                    <CvCard index={index} CvLink={cv} onDelete={loadListCv} />
                  ))}
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-4 ${classes["created-cv"]}`}>
              <div className={classes["body-right"]}>
                <div className={classes["Recommended-job"]}>
                  {props.recomendedJobs.map((item) => (
                    // <RecomendedJob
                    //   key={item.id}
                    //   companyName={item.companyName}
                    //   logo={item.logo}
                    //   jobs={item.jobs}
                    // />
                    <RecommendedJob
                      key={item.id}
                      id={item.id}
                      author={item.author}
                      companyName={item.companyName}
                      logo={item.logo}
                      jobName={item.jobName}
                      address={item.address}
                      position={item.position}
                      salary={item.salary}
                      jobType={item.jobType}
                      slot={item.slot}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IdeaPosition />
    </div>
  );
};
export default CVPage;
