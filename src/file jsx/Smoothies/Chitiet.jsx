import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function StarRating({ rating, onRatingChange }) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  const renderStar = (index) => {
    if (hoverRating >= index) {
      return <span key={index} onClick={() => handleClick(index)} onMouseEnter={() => handleMouseEnter(index)}>&#9733;</span>; // Filled star
    } else {
      return <span key={index} onClick={() => handleClick(index)} onMouseEnter={() => handleMouseEnter(index)}>&#9734;</span>; // Empty star
    }
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(renderStar(i));
  }

  return (
    <div
      className="star-rating"
      onMouseLeave={handleMouseLeave}
    >
      {stars}
    </div>
  );
}
function Chitiet(props) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // You can add code here to handle saving the rating to your backend or wherever you store product ratings
  };
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
    <div className="container detailSP">
      <div className="row">
        <img src={props.img} alt="Hinh Dai dien" className="col-6" />
        <div className="col-6 thongtin">
          <div>{props.Name}</div>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
          <div className="price1">{props.price}</div>
          <div className="buttonchitiet">
            <button onClick={handleAddToLocal}>Add to local</button>
            <Link to="/Cart"><button onClick={handleAddToLocal}>Buy</button></Link>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <form action="">
            <fieldset class="border p-2 fieldset">
              <legend class="float-none w-auto">Infomation of {props.Name}</legend>
              <pre >{props.Description}</pre>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chitiet;