import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import TMArticle1 from "../images/TM-Article1-img.jpg";
import TMArticle2 from "../images/TM-Article2-img.jpg";
import TMArticle3 from "../images/TM-Article3-img.jpg";
function CardPage() {
  return (
    <div>
      <Container>
        <h1 className={"featuresPage "}>Check out our Latest artical</h1>
        <hr />
        <Row lg="3" className={"cardGrid"}>
          <Col md={3} xl={3}>
            <Card
              style={{
                width: "18rem",
                borderRadius: "2rem",
                shadowBox: "2rem #7d7987",
              }}
            >
              <Card.Img
                variant="top"
                src={TMArticle1}
                className={"card-img-top"}
              />
              <Card.Body className={"card-body"}>
                <Card.Title className={"card-title"}>
                  Maximaise your efficiecny uesing Task Manger
                </Card.Title>
                <Card.Text className={"card-text"}>
                  In this case, the role of task <br /> manager was directly
                  responsible <br />
                  for delivering a project on time...
                </Card.Text>
                <a href="/" className={"card-readMore"}>
                  Read more &ensp; <i class="fas fa-solid fa-arrow-right"></i>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xl={3}>
            <Card
              style={{
                width: "18rem",
                borderRadius: "2rem",
                shadowBox: "2rem #7d7987",
                display: "flex",
              }}
            >
              <Card.Img
                variant="top"
                src={TMArticle2}
                className={"card-img-top"}
              />
              <Card.Body className={"card-body"}>
                <Card.Title className={"card-title"}>
                  Maximaise your efficiecny uesing Task Manger
                </Card.Title>
                <Card.Text className={"card-text"}>
                  In this case, the role of task <br /> manager was directly
                  responsible <br />
                  for delivering a project on time...
                </Card.Text>
                <a href="/" className={"card-readMore"}>
                  Read more &ensp; <i class="fas fa-solid fa-arrow-right"></i>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} xl={3}>
            <Card
              style={{
                width: "18rem",
                borderRadius: "2rem",
                shadowBox: "2rem #7d7987",
              }}
            >
              <Card.Img
                variant="top"
                src={TMArticle3}
                className={"card-img-top"}
              />
              <Card.Body className={"card-body"}>
                <Card.Title className={"card-title"}>
                  Maximaise your efficiecny uesing Task Manger
                </Card.Title>
                <Card.Text className={"card-text"}>
                  In this case, the role of task <br /> manager was directly
                  responsible <br />
                  for delivering a project on time...
                </Card.Text>
                <a href="/" className={"card-readMore"}>
                  Read more &ensp; <i class="fas fa-solid fa-arrow-right"></i>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button
          style={{
            borderRadius: "20px",
            height: "40px",
            width: "170px",
            fontFamily: "Mulish , sans-serif",
            fontWeight: "300",
            fontSize: "0.9rem",
            position: "relative",
            left: "30rem",
          }}
          className={"buttonHeader"}
          variant="outline-primary"
          size="lg"
        >
          View All
        </Button>{" "}
      </Container>
    </div>
  );
}

export default CardPage;
