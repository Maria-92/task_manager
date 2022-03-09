import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as LeadingImg } from "../images/TM-MobileApp-illustration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
function DownloadPage() {
  return (
    <div>
      <Container className={"DownloadPageP"}>
        <Row>
          <Col xl={4} className={"TaskTitle"}>
            <h1 id="">
              Download our <br />
              mobile apps
            </h1>
            <hr />
            <p className={"grayColor"}>
              {" "}
              Our dedicated mobile app and
              <br /> web portal allow you to access information
              <br />
              instantaneously and securely
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
              Download
              <FontAwesomeIcon
                icon={faArrowDown}
                style={{ marginLeft: "1rem" }}
              ></FontAwesomeIcon>
            </Button>{" "}
          </Col>
          <Col xl={6}>
            <LeadingImg className={"DownLoadImg"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DownloadPage;
