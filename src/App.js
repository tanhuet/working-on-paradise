// import React, { useEffect, useState } from 'react';
import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Category from "./pages/Category";
import Cv from "./pages/Cv";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
