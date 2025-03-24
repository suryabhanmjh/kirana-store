import React from "react";
import { Carousel } from "react-bootstrap";
import "../Css/carousel.css"; // CSS File Import Karo

const CarouselComponent = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src="/images/grocery-1.jpg" alt="Fresh Groceries" />
        <Carousel.Caption>
          <h3>Fresh Groceries Delivered 🚛</h3>
          <p>Get fresh fruits, vegetables, and daily essentials at your doorstep.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/images/grocery-2.jpg" alt="Best Prices" />
        <Carousel.Caption>
          <h3>Best Prices Guaranteed 💰</h3>
          <p>We offer the best quality groceries at unbeatable prices.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/images/grocery-3.jpg" alt="Fast Delivery" />
        <Carousel.Caption>
          <h3>Super Fast Delivery 🚀</h3>
          <p>Get your groceries delivered within hours.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
