import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TourPackage = () => {

  const [packages, setPakages] = useState([])

  useEffect(() => {
    fetch('https://ghastly-mausoleum-48650.herokuapp.com/card')
      .then(res => res.json())
      .then(data => setPakages(data))
  }, [])


  return (
    <>
      {
        (packages.length !== 0) ? <div className="my-5">
          <div className="my-5">
            <h1>TOP PROMOTIONS </h1>
            <h3>BEST TRAVEL PACKAGES AVAILABLE</h3>
          </div>

          <div className="tour-card">
            <Container>
              <Row xs={1} md={3} className="g-4">
                {
                  packages.map(pack => <Col>
                    <Card>
                      <Card.Img
                        style={{ height: '220px' }}
                        variant="top"
                        src={pack.img}
                      />
                      <Card.Body>
                        <Card.Title>{pack.name}</Card.Title>
                        <Card.Text>{pack.population}</Card.Text>
                        <Card.Text>{pack.des}</Card.Text>
                      </Card.Body>
                      <Link to={`/selected/${pack._id}`}><button className="btn mx-1 bg-primary text-white my-3">
                        Book Now
                      </button></Link>
                    </Card>
                  </Col>)
                }
              </Row>
            </Container>
          </div>
        </div> : <h1>Loading...</h1>
      }
    </>

  );
};

export default TourPackage;
