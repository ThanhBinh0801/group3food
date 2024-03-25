import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Food(props) {
  const navigate = useNavigate();

  return (
    <div
      className="cacsanphamchinh"
      onClick={() => navigate(`/smooth/${props.id}`)}
    >
      <Carousel interval={3000} controls={false} autoplay={true} pause="hover">
        <Carousel.Item>
          <div>
            <img src={props.img} alt={props.Name} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img src={props.img1} alt={props.Name} />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img src={props.img2} alt={props.Name} />
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="tenvagiasanpham">
        <div className="tenthanhphan1">{props.Name}</div>
        <div className="giasanpham">{props.price}</div>
      </div>
    </div>
  );
}

export default Food;
