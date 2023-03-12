// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Counter - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Counter - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
      <Navbar title="Counter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try Counter - Word Counter, Character Counter"
                mode={mode}
              />
            }
          />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

