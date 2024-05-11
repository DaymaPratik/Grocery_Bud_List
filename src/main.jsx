import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading/Heading";
import MainSection from "./MainSection/MainSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Heading />
    <MainSection />
    <ToastContainer
      position="center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

    <ToastContainer />
  </React.StrictMode>
);
