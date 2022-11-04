// import React, { useEffect, useState } from 'react';
import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourite from "./pages/Favourite/Favourite";
import Category from "./pages/Category/Category";
import Cv from "./pages/Cv/Cv";
import ForgotPassWord from "./pages/ForgotPassWord/ForgotPassword";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import AccountPage from "./pages/Account/AccountPage";
import Edit from "./pages/Account/Edit";
import JobDetail from "./pages/JobDetails/JobDetail";
import CvDetailPage from "./pages/CvDetail/CvDetailPage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/forgot" element={<ForgotPassWord />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cv/:cvId" element={<CvDetailPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/account/edit" element={<Edit />} />
        <Route path="/details" element={<JobDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
