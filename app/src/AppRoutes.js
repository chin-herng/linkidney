import React from "react";
import { Routes, Route } from "react-router-dom";
import IndividualView from "./components/IndividualView";
import BusinessView from "./components/BusinessView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="individual" element={<IndividualView />}></Route>
      <Route path="business" element={<BusinessView />}></Route>
      <Route path="help"></Route>
      <Route path="login"></Route>
      <Route></Route>
    </Routes>
  );
};

export default AppRoutes;
