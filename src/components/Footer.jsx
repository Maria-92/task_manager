import React from "react";
import { ReactComponent as TMLogo } from "../images/TM-logo-white.svg";
import { MDBFooter } from "mdb-react-ui-kit";

export default function App() {
  const date = new Date();
  const copyRightYear = date.getFullYear();

  return (
    <MDBFooter className={"text-center text-lg-start text-muted gridColor "}>
      <section
        id="#Footer"
        className="d-flex justify-content-center justify-content-lg-between p-4 "
      ></section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <TMLogo href="./App.js" />
              </h6>
              <p className={"listText"}>
                Task Manager provides a progressive.cutting-
                <br />
                edge and accessibile way to magnge your tasks from anywhere.
              </p>

              <div className={"copyRight"}>
                <span>©TaskManger</span>PTY LTD {copyRightYear}. All rights
                reserved
              </div>
            </div>

            <div
              className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
              style={{ color: "#FFF" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Testimonials
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Features
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Apps
                </a>
              </p>
            </div>

            <div
              className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"
              style={{ color: "#FFF" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Region</h6>
              <p>
                <a href="#!" className="text-reset">
                  Oman
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Saudi Arabia
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hangkong
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Canada
                </a>
              </p>
            </div>

            <div
              className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 "
              style={{ color: "#FFF" }}
            >
              <h6 className="text-uppercase fw-bold mb-4 ">Help</h6>
              <p>Help center</p>
              <p>Contact support</p>
              <p>instructions</p>
              <p>How it works</p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
  );
}
