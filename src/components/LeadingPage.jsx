import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as LeadingImg } from "../images/TM-leadingTM-illustration.svg";
function LeadingPage() {
  return (
    <div>
      <Container className={"DownloadPageP"}>
        <Row>
          <Col xl={6}>
            <LeadingImg className={"ImgTitle"} />
          </Col>
          <Col xl={4} className={"TaskTitle"}>
            <h1 id="">
              Leading Task <br /> Manager
              <hr />
            </h1>
            <p className={"grayColor"}>
              {" "}
              Task Manager provides progressive, cutting-edge
              <br />
              and accessible way to manage yoyr tasks from
              <br /> anywhere. To us, it's not just work. ew take pride <br />
              in thr solutions we deliver.
            </p>
            <Button
              style={{
                borderRadius: "20px",
                height: "40px",
                width: "170px",
                fontFamily: "Mulish , sans-serif",
                fontWeight: "300",
                fontSize: "0.9rem",
              }}
              className={"buttonHeader"}
              variant="outline-primary"
              size="lg"
            >
              Learn more
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LeadingPage;
