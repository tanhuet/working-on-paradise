import AccountEmployer from "./Component/AccountEmpolyer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const AccEmp = () => {
    const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [user, setUser] = useState();

  useEffect(() => {
    var endPoint = "jobseeker";
    if (userStore.role === "Employer") {
      endPoint = "employer";
    }
    axios.get(`${config.api.url}/${endPoint}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        //console.log(res.data);
        setUser(res.data);
    });
  }, [userStore]);
    return (
        <AccountEmployer user={user} />
    )
}
export default AccEmp;