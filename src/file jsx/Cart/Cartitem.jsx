import React, { useState, useEffect } from 'react';

function Cartiem({cart = [], setCart }) {
const [product, setProduct] = useState({ price: 10, quantity: 1 });

const [totalPrice, setTotalPrice] = useState(product.price * product.quantity);

const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 1; // Ensure newQuantity is always at least 1
    setProduct({ ...product, quantity: newQuantity });
    setTotalPrice(product.price * newQuantity); // Update total price when quantity changes
};

console.log("Total Price:", totalPrice);

useEffect(() => {
    // Retrieve the object from local storage
    const storedProduct = localStorage.getItem('product');

    if (storedProduct) {
      // Parse the JSON string back into a JavaScript object
    setProduct(JSON.parse(storedProduct));
    }
}, []);

return (
    <div className="container">
    <h2>Shopping Cart</h2>
    {product ? (
        <section className="text-center text-md-start mt-5">
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                        <h6 className="text-uppercase fw-bold">Snacks</h6>
                        <hr
                        className="mb-4 mt-0"
                        style={{ backgroundColor: "#7c4dff" }}
                        />
                        <p className="text-justify"><img src={product.img} className="img-fluid" alt="Product" /></p>
                    </div> 
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                        <h6 className="text-uppercase fw-bold text-center">Name</h6>
                        <hr
                                className="mb-4 mt-0"
                                style={{ backgroundColor: "#7c4dff" }}
                        />
                        <p className="d-flex flex-column justify-content-center align-items-center">{product.Name}</p>                   
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto"> 
                        <h6 className="text-uppercase fw-bold text-center">Price</h6> 
                        <hr
                            className="mb-4 mt-0"
                            style={{ backgroundColor: "#7c4dff" }}
                        />
                        <p className="d-flex flex-column justify-content-center align-items-center">{product.price}</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto"> 
                    <h6 className="text-uppercase fw-bold text-center">Quantity</h6> 
                    <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
                    <input
                        type="number"
            c lassName="form-control"
            value={product.quantity}
            min={1} 
            max={10}
            onChange={(e) => handleQuantityChange(e)} // Pass the event object to handleQuantityChange
          />
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto"> 
          <h6 className="text-uppercase fw-bold text-center">Total Price</h6> 
          <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
          <p className="d-flex flex-column justify-content-center align-items-center">{totalPrice}</p>
        </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto"> 
                        <h6 className="text-uppercase fw-bold text-center">Order</h6> 
                        <hr
                            className="mb-4 mt-0"
                            style={{ backgroundColor: "#7c4dff" }}
                        />
                        <p className="d-flex flex-column justify-content-center align-items-center">{product.price}</p>
                    </div>
            </div>
            </div>
        </section>  
    ) : (
        <div>No product found in local storage</div>
    )}
    </div>
);
}

export default Cartiem;
