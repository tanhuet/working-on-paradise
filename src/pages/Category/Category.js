import { Fragment } from "react"
// import Card from "../../components/UI/Card"
import CategoryTop from "./Components/CategoryTop"
import JobList from "./Components/JobList"

import locationImg from "../../asses/img-location.png"

const DUMYJOB = [
    {
        id: 1,
        logo: locationImg,
        companyName: 'Google Inc',
        location: 'California',
        category: 'UI/UX Desgin',
        jobType: 'Part Time',
        experience: 'Senior',
        minSalary: '700',
        maxSalary: '1500',
        skills: ['cloud', 'react'],
    },
    {
        id: 2,
        logo: locationImg,
        companyName: 'Google Inc',
        location: 'California',
        category: 'UI/UX Desgin',
        jobType: 'Part Time',
        experience: 'Senior',
        minSalary: '700',
        maxSalary: '1500',
        skills: ['cloud', 'react'],
    },
]

const DUMYRECOMENDED = [
    {
        id: '1',
        companyName: 'Google Inc',
        logo: locationImg,
        jobs: [{
            id: '1',
            category: 'UI/UX Desgin',
            jobType: 'Part Time',
            location: 'California',
        }, {
            id: '2',
            category: 'UI/UX Desgin',
            jobType: 'Part Time',
            location: 'California',
        }]
    }
]

const Category = () => {
    return (
        <Fragment>
            <CategoryTop jobs = {DUMYJOB}/>
            <JobList jobs ={DUMYJOB} recomendedJobs={DUMYRECOMENDED} />
        </Fragment>
    )
}

export default Category