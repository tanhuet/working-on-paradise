// import React, { useEffect, useState } from 'react';
import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favourite from "./pages/Favourite/Favourite";
import Category from "./pages/Category/Category";
import Cv from "./pages/Cv/Cv";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Layout>
  );
}

export default App;
