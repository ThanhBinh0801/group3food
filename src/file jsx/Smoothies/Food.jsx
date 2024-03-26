import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Food(props) {
  const navigate = useNavigate();
  const handleAddToLocal = () => {
    // Retrieve existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    // Add the current product to the existing array
    const updatedProducts = [...existingProducts, props];

    // Save the updated array back to local storage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    console.log('Product added to local storage:', props);
    alert('Product added to local storage!');
  };

  return (

      <div
        className="cacsanphamchinh"
        onClick={() => navigate(`/smooth/${props.id}`)}
      >
        <Carousel interval={5000} controls={false} autoplay={true}>
          <Carousel.Item className="text-focus-in">
            <div>
              <img src={props.img} alt={props.Name} />
            </div>
          </Carousel.Item>
          <Carousel.Item className="text-focus-in">
            <div>
              <img src={props.img1} alt={props.Name} />
            </div>
          </Carousel.Item>
          <Carousel.Item className="text-focus-in">
            <div>
              <img src={props.img2} alt={props.Name} />
            </div>
          </Carousel.Item>
        </Carousel>
        <div className="tenvagiasanpham">
          <div className="tenthanhphan">{props.Name}</div>
          <div className="giasanpham">{props.price}</div>
        </div>
        
      </div>
    

  );
}
export default Food;
