import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: '85vh' }}
            className="d-block w-100"
            src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="text-white fw-bold">Welcome to IT-Travel</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '85vh' }}
            className="d-block w-100"
            src="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?cs=srgb&dl=pexels-gabriela-palai-507410.jpg&fm=jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="text-dark fw-bold">
              SANTORINI - GREEK ISLAND TOUR
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
