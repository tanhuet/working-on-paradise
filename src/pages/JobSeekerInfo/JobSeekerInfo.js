import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector  } from "react-redux"
import { useEffect, useState } from "react";
import config from "../../config";

const JobSeekerInfo = () => {
    const userStore = useSelector((state) => state.auth.login?.currentUser);
    const [user, setUser] = useState(null)
    const jobseekerId = useParams().jobseekerId

    useEffect(() => { 
        axios.get(`${config.api.url}/jobseeker/${jobseekerId}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
          .then((res) => {
            console.log(res.data);
            setUser(res.data);
        });
      }, [userStore, jobseekerId]);


    
    return (
        <h1>sd</h1>
    )
}

export default JobSeekerInfo