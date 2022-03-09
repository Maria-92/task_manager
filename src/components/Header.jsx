import React, { useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as ManageImg } from "../images/TM-hero-illustration.svg";

function Header() {
  const [isShown, setIsShown] = useState(false);
  const handleMouseEnter = (e) => {
    e.target.style.background = "#FFF";
    e.target.style.color = "#458FF6";
    setIsShown(true);
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = "#458ff6";
    e.target.style.color = "#FFF";
    setIsShown(false);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xl={6} className={"TaskTitle"}>
            <h1 id="">
              Mange your Task <br /> from anywhere!
            </h1>
            <p className={"grayColor"}>
              {" "}
              Task Manger provide a progressive , cutting-
              <br />
              edg and accessible way to manage your rasks <br />
              from anywhere!
            </p>
            <Button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                borderRadius: "20px",
                height: "40px",
                width: "170px",
                fontFamily: "Mulish , sans-serif",
                fontWeight: "300",
                fontSize: "0.9rem",
                backgroundColor: "#458ff6",
                border: "solid #458ff6",
              }}
              className={"buttonHeader"}
              size="lg"
            >
              Try it now!
            </Button>{" "}
            {isShown}
          </Col>
          <Col xl={4}>
            <ManageImg className={"ImgTitle"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Header;
