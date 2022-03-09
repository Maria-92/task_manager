import React, { useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Alert from "@material-ui/lab/Alert";
// import AlertTitle from '@material-ui/lab/AlertTitle';

function SubscribePage() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);

      setMessage(
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      );
    } else {
      setIsValid(false);

      setMessage(
        <Alert severity="error">This is an error alert — check it out!</Alert>
      );
    }
  };

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

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Container>
        <h1 className={"featuresPage"}>Subscribe to our Newsletter </h1>
        <hr />
        <Form>
          <Row>
            <Col className={"formGrid"}>
              <Form.Group className={"mb-3 subForm"} controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  onChange={validateEmail}
                  style={{
                    border: "solid",
                    width: "25rem",
                    color: "#D1D1D1",
                    position: "relative",
                    left: "7rem",
                    padding: "1rem",
                  }}
                />
                <div className={`message ${isValid ? "success" : "error"}`}>
                  {message}
                </div>
              </Form.Group>
            </Col>
            <Col>
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
                  position: "relative",
                  top: "-0.8rem",
                }}
                className={"buttonHeader"}
                size="lg"
                onClick={refreshPage}
              >
                Submit
              </Button>{" "}
              {isShown}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default SubscribePage;
