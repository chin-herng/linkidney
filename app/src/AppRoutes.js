import React from "react";
import { Routes, Route } from "react-router-dom";
import Company from "./components/Company";
import BusinessView from "./components/BusinessView";
import Login from "./components/Login";
import { jobs } from "./data/jobs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="company" element={<Company jobs={jobs} />}></Route>
      <Route path="business" element={<BusinessView />}></Route>
      <Route path="help"></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export default AppRoutes;
