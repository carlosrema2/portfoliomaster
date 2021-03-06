import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Contacts from "./components/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <Navbar sticky="top"/>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        <Contacts />
        </Wrapper>
        <Footer />
    </Router>
  );
}

export default App;
