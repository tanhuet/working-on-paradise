import { Fragment, useState } from "react"
import CvDetail from "./CvDetail"
import EditCv from "./EditCv"

const DUMMYCV = {
    id: '1',
    name: "Cv's Name",
    nameUser: "Job",
    birthday: '23/02/2002',
    phone: '0123456789',
    email: 'hiepxxxxxx@gmail.com',
    website: 'none',
    address: '109xxxxxx',
    sex: 'male',
    experience: [
        {
            id: '1',
            company: 'Google',
            startDate: '10/10/2000',
            endDate: '10/11/2001',
            position: 'Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.',
        },
        {
            id: '2',
            company: 'Google',
            startDate: '10/10/2000',
            endDate: '10/11/2001',
            position: 'manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.',
        }
    ],
    activities: [
        {
            id: '1',
            organization: 'Hiepdx',
            startDate: '10/10/2000',
            endDate: '10/11/2001',
            position: 'manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.',
        },
    ],
    education: [
        {
            id: '1',
            school: 'Hiepdx',
            startDate: '10/10/2000',
            endDate: '10/11/2001',
            position: 'manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.',
        },
    ],
    skills: [
        {
            id: '1',
            skill: 'cloud',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.',
        },
        {
            id: '2',
            skill: 'cloud',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est sit amet facilisis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.',
        },
    ]
}

const CvDetailPage = () => {

    const [isEdit, setIsEdit] = useState(false)

    const editHandler = (isEdit) => {
        setIsEdit(isEdit)
    }

    const viewHandler = (isEdit) => {
        setIsEdit(isEdit)
    }

    return (
        <Fragment>
            {!isEdit && <CvDetail cv = {DUMMYCV} onEdit={editHandler} />}
            {isEdit && <EditCv cv = {DUMMYCV} onEdit={viewHandler}/>}
        </Fragment>
    )
}

export default CvDetailPage