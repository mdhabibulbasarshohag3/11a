import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="my-5">
      <div className="my-5">
        <h1>OUR DESTINATIONS </h1>
        <h3>CHOOSE YOUR NEXT DESTINATION</h3>
      </div>
      <Container>
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="https://media.cntraveler.com/photos/60d0e4106834ea5878d2f2e5/master/w_1600,c_limit/Oceania%20Travel%20Restrictions-%20June%202021_Tahiti,%20French%20Polynesia_GettyImages-1212733838.jpg" height={400} />
              <Card.Body>
                <Card.Title>Oceania</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://www.travelprofessionalnews.com/wp-content/uploads/2019/11/Travel-Agent-News-for-African-Travel-Inc-We-Know-Africa.jpg" height={400} />
              <Card.Body>
                <Card.Title>Africa</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://i.dailymail.co.uk/1s/2021/08/14/10/46667049-9893161-image-a-1_1628932446943.jpg" height={400} />
              <Card.Body>
                <Card.Title>America</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/best-places-to-travel-asia-1525425271-1000X561.jpg" height={400} />
              <Card.Body>
                <Card.Title>Asia</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
