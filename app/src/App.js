import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AppRoutes from "./AppRoutes";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
      <Login />
    </BrowserRouter>
  );
};

export default App;
