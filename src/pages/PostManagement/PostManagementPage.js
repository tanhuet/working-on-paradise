import PostManagement from "./Components/PostManagement";
import locationImg from "../../asses/google.png"

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
      skills: ['Senior Designer', 'Part Time'],
  },
]

const DUMYPOST = [
  {
      id: 1,
      logo: locationImg,
      jobName: 'Google Inc',
      company: 'Company',
      location: 'Location',
      typeOfJob: 'Type of Job',
      typeOfWorkplace: 'Type of Workplace',
      salary: 'Salary',
      candidates: 'X candidates applied',
      skills: ['Skill', 'Designer', 'FullTime'],
  },
]
const PostManagementPage = () => {
    return (
      <PostManagement jobs={DUMYJOB} posts={DUMYPOST} />
    );
  };
  
  export default PostManagementPage;
  