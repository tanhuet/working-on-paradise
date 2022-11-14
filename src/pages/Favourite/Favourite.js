import { Fragment } from "react"
import FavouriteJob from "./Components/FavouriteJob"
import locationImg from "../../asses/img-location.png"
import { getAllUser } from "../../store/apiRequest";

const DUMMY_JOB = [{
    id: '1',
    logo: locationImg,
    companyName: 'Google Inc',
    location: 'California',
    category: 'UI/UX Desgin',
    jobType: 'Part Time',
    skills: ['a', 'b'],
    experience: 'efsdfdfs',
    // minSalary: '1000',
    // maxSalary: '2000',
    salary: 1000,
},

]

const Favourite = () => {

    return (
        <Fragment>
            <FavouriteJob jobs = {DUMMY_JOB}/>
            {/* <RecomendedJob /> */}
        </Fragment>
    )
}

export default Favourite