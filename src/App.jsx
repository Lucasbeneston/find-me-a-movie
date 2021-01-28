import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/organisms/Header";
import Routes from "./components/Routes";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
