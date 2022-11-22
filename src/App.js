// import React, { useEffect, useState } from 'react';
import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux"

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
import EmployerDetails from "./pages/EmployerPost-Details/EmployerPost-Details";
import EmployerCv from "./pages/Employer-Cv/Category";
import AccountEmployer from "./pages/account-employer/AccountEmpolyer";
import AccountEmployerEdit from "./pages/account-employer/AccountEmployerEdit";
import AddPost from "./pages/ADD-POST-Employer/addPost";
import ChangePassWord from "./pages/ChangePassWord/ChangePassword";
import SetUpAccJobSeeker from "./pages/SignUp/Component/SetUpAccountJobSeeker/SetUpAccJobSeeker";
import SetUpAccEmployer from "./pages/SignUp/Component/SetUpAccountJobSeeker/SetUpAccountEmployer";

function App() {

  const userStore = useSelector((state) => state.auth.login?.currentUser);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        {(userStore?.role === "JobSeeker") && <Route path="/favourite" element={<Favourite />} />}
        {(userStore?.role === "JobSeeker") && <Route path="/cv" element={<Cv />} />}
        <Route path="/forgot" element={<ForgotPassWord />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cv/:cvId" element={<CvDetailPage />} />
        {(userStore?.role === "JobSeeker") && <Route path="/account" element={<AccountPage />} />}
        <Route path="/details/:id" element={<JobDetail />} />
        <Route path="/postmanagement" element={<PostManagementPage />} />
        <Route path="/employer-post" element={<EmployerDetails />} />
        <Route path="/employer-cv" element={<EmployerCv />} />
        <Route path="/accountEmployer" element={<AccountEmployer />} />
        <Route
          path="/accountEmployer/employerEdit"
          element={<AccountEmployerEdit />}
        />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/reset-password/:token" element={<ChangePassWord />} />
        <Route
          path="/setup-account-jobseeker"
          element={<SetUpAccJobSeeker />}
        />
        <Route path="/setup-account-employer" element={<SetUpAccEmployer />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Layout>
  );
}

export default App;
