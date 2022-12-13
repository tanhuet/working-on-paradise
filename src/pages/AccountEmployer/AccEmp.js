import AccountEmployer from "./Component/AccountEmpolyer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";

const AccEmp = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [user, setUser] = useState();

  const navigator = useNavigate();
  useEffect(() => {
    var endPoint = "jobseeker";
    if (userStore.role === "Employer") {
      endPoint = "employer";
    } else {
      navigator("/home");
    }
    axios.get(`${config.api.url}/${endPoint}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
      setUser(res.data);
    });
  }, [userStore]);
  return <AccountEmployer user={user} />;
};
export default AccEmp;
