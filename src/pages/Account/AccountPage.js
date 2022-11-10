import Account from "./Componets/Account";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const AccountPage = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [user, setUser] = useState();

  useEffect(() => {
    var endPoint = "jobseeker";
    if (userStore.role === "Employer") {
      endPoint = "employer";
    }
    axios.get(`${config.api.url}/${endPoint}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, [userStore]);

  return <Account user={user} />;
};

export default AccountPage;
