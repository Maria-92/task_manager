import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/TM-logo.svg";
import Home from "./App";
import Features from "./FeaturePage";
import Apps from "./DownloadPage";
import Testimonials from "./ReviewPage";
import About from "./Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavbarPage() {
  return (
    <Container>
      <Router>
        <div>
          <Navbar className="navItem " expand="lg">
            <Navbar.Brand as={Link} to="./App.js">
              <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3 navItem grayColor ">
                <Nav.Link as={Link} to="./App.js" className="naveLink ">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="./FeaturePage.jsx" className="naveLink">
                  Features
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="./DownloadPage.jsx"
                  className="naveLink"
                >
                  Apps
                </Nav.Link>
                <Nav.Link as={Link} to="./ReviewPage.jsx" className="naveLink">
                  Testimonials
                </Nav.Link>

                <Nav.Link as={Link} to="./Footer.jsx" className="naveLink">
                  About Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path="/App.jsx" element={<Home />} />
            <Route exact path="/FeaturePage.jsx" element={<Features />} />
            <Route exact path="/DownloadPage.jsx" element={<Apps />} />
            <Route exact path="/ReviewPage.jsx" element={<Testimonials />} />
            <Route exact path="/Footer.jsx" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
}

export default NavbarPage;
