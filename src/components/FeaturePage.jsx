import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ReactComponent as FeatureIcon1 } from "../images/Icon1-members.svg";
import { ReactComponent as FeatureIcon2 } from "../images/Icon2-groups.svg";
import { ReactComponent as FeatureIcon3 } from "../images/Icon3-forum.svg";
import { ReactComponent as FeatureIcon4 } from "../images/Icon4-listbuilder.svg";
import { ReactComponent as FeatureIcon5 } from "../images/Icon5- scroll effects.svg";
import { ReactComponent as FeatureIcon6 } from "../images/Icon6-custom.svg";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
function FeaturePage() {
  return (
    <div className={" lightBlue  "}>
      <Container>
        <h1 className={"featuresPage"}>Features</h1>
        <hr />
        <p className="des">
          We provide you the best features to manage all your tasks. Adjust it
          to your needs and make sure you use it to <br />
          collaborate effectively with your teammates.
        </p>
      </Container>
      <Container>
        <div>
          <Row lg="3">
            <Col md={3} xl={3} className={"featureGrid"}>
              <FeatureIcon1
                style={{
                  margin: "10px",
                }}
              />
              <h3 className={"featureTitle"}>Members</h3>
              <p className={"des featureTitle"}>
                Invite your team members and allow <br /> them to view your{" "}
                tasks while you <br />
                view thiers
              </p>
            </Col>
            <Col md={3} xl={3} className={"featureGrid"}>
              <FeatureIcon2
                style={{
                  margin: "30px",
                }}
              />
              <h3 className={"featureTitle"}>Groups</h3>
              <p className={"des featureTitle"}>
                Create groups and share tasks with <br /> multiple members at
                once
              </p>
            </Col>
            <Col md={3} xl={3} className={"featureGrid"}>
              <FeatureIcon3
                style={{
                  margin: "10px",
                }}
              />
              <h3 className={"featureTitle"}>Fourm</h3>
              <p className={"des featureTitle"}>
                Discuss your tasks with your <br />
                teammates and get work done in <br />
                no time!
              </p>
            </Col>
          </Row>
        </div>
        <div>
          <Row lg="3">
            <Col md={3} xl={3} className={"featureGrid"}>
              <FeatureIcon4
                style={{
                  margin: "30px",
                }}
              />
              <h3 className={"featureTitle"}>List Builder</h3>
              <p className={"des featureTitle"}>
                Build a list of your most important
                <br />
                tasks and keep trak of them
              </p>
            </Col>
            <Col md={3} xl={3} className={"featureGrid"}>
              <FeatureIcon5
                style={{
                  margin: "30px",
                }}
              />
              <h3 className={"featureTitle"}>Scroll effects</h3>
              <p className={"des featureTitle"}>
                8 different effect for your <br />
                different tasks
              </p>
            </Col>
            <Col md={3} xl={3} className={"featureGrid"}>
              <FeatureIcon6
                style={{
                  margin: "30px",
                }}
              />
              <h3 className={"featureTitle"}>Custom Module</h3>
              <p className={"des featureTitle"}>
                Add custom modules t your tasks <br />
                using our easy to use drag and <br />
                drop builder
              </p>
            </Col>
          </Row>
        </div>
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
          Learn more
        </Button>{" "}
      </Container>
    </div>
  );
}

export default FeaturePage;
