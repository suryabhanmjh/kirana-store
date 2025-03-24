import React from "react";
import { Carousel } from "react-bootstrap";
import "../Css/carousel.css"; 
import image2 from "../Images/bestPrice.webp"
import image1 from "../Images/freshGroceries.jpg"
import image3 from "../Images/same day delivery.webp"

const CarouselComponent = () => {
  return (
    <Carousel className="custom-carousel heihgt-10vh">
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="Fresh Groceries" />
        <Carousel.Caption>
          <h3>Fresh Groceries Delivered 🚛</h3>
          <p>Get fresh fruits, vegetables, and daily essentials at your doorstep.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Best Prices" />
        <Carousel.Caption>
          <h3>Best Prices Guaranteed 💰</h3>
          <p>We offer the best quality groceries at unbeatable prices.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Fast Delivery" />
        <Carousel.Caption>
          <h3>Super Fast Delivery 🚀</h3>
          <p>Get your groceries delivered within hours.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
