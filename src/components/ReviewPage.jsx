import React, { Fragment } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import TMPro from "../images/TM-User1-profile.png";
import TMPro2 from "../images/TM-User2-profile.jpg";
import TMPro3 from "../images/TM-User3-profile.jpg";

// const breakPoints = [
//   // // { width: 1, itemsToShow: 1 },
//   // { width: 550, itemsToShow: 2 },
//   // { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

export default function ReviewPage() {
  return (
    <Container className={"carouselP"}>
      <Carousel variant="dark">
        <Carousel.Item>
          <Fragment>
            <Container fluid>
              <Row
                className="d-block  gridColor carouselBox"
                src="holder.js/800x400?text=First slide&bg=f5f5f5"
                alt="First slide"
              >
                <Col>
                  <h2 className="Carousele-h2">What our users are saying</h2>
                  <hr className="Chr"></hr>
                </Col>
                <Col>
                  <h6 className="carousel-h6">
                    Edwared Newgate <br />
                    <small>Sales anf Markting</small>
                  </h6>
                </Col>
                <Col>
                  <img className={"carousel-img "} src={TMPro} alt="" />
                </Col>
              </Row>
              <Row>
                <Col className={"carousel-h"}>
                  <h6 className="carousel-h6-1">
                    " Our dedicated task managment app and <br /> web portal
                    allows us to access information <br /> inatantaneously and
                    securely"
                  </h6>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Fragment>
        </Carousel.Item>
        <Carousel.Item>
          <Fragment>
            <Container fluid>
              <Row
                lg=""
                className="d-block   gridColor carouselBox"
                src="holder.js/800x400?text=First slide&bg=f5f5f5"
                alt="First slide"
              >
                <Col className={"d-flex justify-content-center"}>
                  <h2 className="Carousele-h2">What our users are saying</h2>
                  <hr className="Chr"></hr>
                </Col>
                <Col>
                  <h6 className="carousel-h6 .d-flex">
                    Edwared Newgate <br />
                    <small>Sales anf Markting</small>
                  </h6>
                </Col>
                <Col>
                  <img
                    className={"carousel-img .d-flex "}
                    src={TMPro2}
                    alt=""
                  />
                </Col>
              </Row>
              <Row>
                <Col className={"carousel-h .d-flex"}>
                  <h6 className="carousel-h6-1">
                    " Our dedicated task managment app and <br /> web portal
                    allows us to access information <br /> inatantaneously and
                    securely"
                  </h6>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Fragment>
        </Carousel.Item>
        <Carousel.Item>
          <Fragment>
            <Container fluid>
              <Row
                lg=""
                className="d-block  gridColor carouselBox"
                src="holder.js/800x400?text=First slide&bg=f5f5f5"
                alt="First slide"
              >
                <Col>
                  <h2 className="Carousele-h2">What our users are saying</h2>
                  <hr className="Chr"></hr>
                </Col>
                <Col>
                  <h6 className="carousel-h6">
                    Edwared Newgate <br />
                    <small>Sales anf Markting</small>
                  </h6>
                </Col>
                <Col>
                  <img className={"carousel-img "} src={TMPro3} alt="" />
                </Col>
              </Row>
              <Row>
                <Col className={"carousel-h"}>
                  <h6 className="carousel-h6-1">
                    " Our dedicated task managment app and <br /> web portal
                    allows us to access information <br /> inatantaneously and
                    securely"
                  </h6>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Fragment>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
