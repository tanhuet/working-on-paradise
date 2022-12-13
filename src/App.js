// import React, { useEffect, useState } from 'react';
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

//import page
import Home from "./pages/Home/Home";
import Favourite from "./pages/Favourite/Favourite";
import Category from "./pages/Category/Category";
import Cv from "./pages/Cv/Cv";
import ForgotPassWord from "./pages/ForgotPassWord/ForgotPassword";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import AccountPage from "./pages/Account/AccountPage";
import JobDetail from "./pages/JobDetails/JobDetail";
import CvDetailPage from "./pages/CvDetail/CvDetailPage";
import PostManagementPage from "./pages/PostManagement/PostManagementPage";
import EmployerJobDetail from "./pages/EmployerPostDetails/EmployerJobDetail";
import CategoryCvs from "./pages/CategoryCvs/Category";
// import AccountEmployer from "./pages/account-employer/AccEmp";
// import AccountEmployerEdit from "./pages/account-employer/AccountEmployerEdit";
import AddPost from "./pages/AddPostEmployer/addPost";
import ChangePassWord from "./pages/ChangePassWord/ChangePassword";
import SetUpAccJobSeeker from "./pages/SignUp/Component/SetUpAccountJobSeeker/SetUpAccJobSeeker";
import SetUpAccEmployer from "./pages/SignUp/Component/SetUpAccountJobSeeker/SetUpAccountEmployer";
import Application from "./pages/Application/Application";
import Message from "./pages/Message";
import AccEmp from "./pages/AccountEmployer/AccEmp";
import JobSeekerInfor from "./pages/JobSeekerInfor/JobSeekerInfor";
import EmployerHome from "./pages/EmployerHome/EmployerHome";
import { useEffect, useState } from "react";
import ImportData from "./pages/ImportData";
import EmployerInfo from "./pages/EmployerInfo/EmployerInfo";
import AppliedCv from "./pages/AppliedCv/AppliedCv";

function App() {
  const location = useLocation();
  // const [isFooter, setIsFooter] = useState(true)

  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [isFooter, setIsFooter] = useState(true);
  useEffect(() => {
    if (
      // add path to display: none footer
      location.pathname === "/message" ||
      location.pathname === "/signin" ||
      location.pathname === "/signup" ||
      location.pathname === "/forgot" ||
      location.pathname.slice(0, 15) === "/reset-password"
    ) {
      setIsFooter(false);
    } else {
      setIsFooter(true);
    }
  }, [location.pathname]);

  return (
    <Layout isFooter={isFooter}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        {userStore?.role !== "Employer" && <Route path="/home" element={<Home />} />}
        {userStore?.role === "Employer" && <Route path="/home" element={<EmployerHome />} />}
        {userStore?.role === "Employer" && <Route path="import-data" element={<ImportData />} />}
        <Route path="/category" element={<Category />} />
        {userStore?.role === "JobSeeker" && <Route path="/favourite" element={<Favourite />} />}
        {userStore?.role === "JobSeeker" && <Route path="/cv" element={<Cv />} />}
        {userStore?.role === "JobSeeker" && <Route path="/application" element={<Application />} />}
        <Route path="/forgot" element={<ForgotPassWord />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cv/:cvId" element={<CvDetailPage />} />
        {userStore?.role === "JobSeeker" && <Route path="/account" element={<AccountPage />} />}
        {userStore?.role === "JobSeeker" && <Route path="/employerInfo/:employerId" element={<EmployerInfo />} />}
        {userStore?.role === "Employer" && <Route path="/account" element={<AccEmp />} />}
        {userStore?.role === "Employer" && <Route path="/account/:jobseekerId" element={<JobSeekerInfor />} />}
        {userStore?.role === "Employer" && <Route path="/applied-cv" element={<AppliedCv />} />}
        <Route path="/details/:id" element={<JobDetail />} />
        <Route path="/post/management" element={<PostManagementPage />} />
        <Route path="/employer-post/:id" element={<EmployerJobDetail />} />
        <Route path="/employer-cv" element={<CategoryCvs />} />
        {/* <Route path="/accountEmployer" element={<AccountEmployer />} /> */}
        {/* <Route path="/accountEmployer/employerEdit" element={<AccountEmployerEdit />} /> */}
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/reset-password/:token" element={<ChangePassWord />} />
        <Route path="/setup-account-jobseeker" element={<SetUpAccJobSeeker />} />
        <Route path="/setup-account-employer" element={<SetUpAccEmployer />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Layout>
  );
}

export default App;
