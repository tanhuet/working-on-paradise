import { Fragment } from "react"
import FavouriteJob from "../components/favourite/FavouriteJob"
import locationImg from "../components/asses/img-location.png"

const DUMMY_JOB = [{
    id: '1',
    logo: locationImg,
    companyName: 'Google Inc',
    location: 'California',
    category: 'UI/UX Desgin',
    type: 'Part Time',
    submittedDate: '12/12/2012',
},
{
    id: '2',
    logo: locationImg,
    companyName: 'AWS',
    location: 'Hanoi',
    category: 'System Engineer',
    type: 'Full Time',
    submittedDate: '12/12/2012',
},
]

const Favourite = () => {
    return (
        <Fragment>
            <FavouriteJob jobs = {DUMMY_JOB}/>
        </Fragment>
    )
}

export default Favourite