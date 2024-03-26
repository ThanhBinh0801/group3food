import React from 'react';

function Chitiet(props) {
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
          <div className="price1">{props.price}</div>
          <div className="buttonchitiet">
            <button onClick={handleAddToLocal}>Add to local</button>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chitiet;



