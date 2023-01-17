import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import LandingPage from "./routes/landingPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
    </React.Fragment>
  );
}

export default App;
