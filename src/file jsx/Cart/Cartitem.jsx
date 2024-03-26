import React, { useState, useEffect } from 'react';

function Cartiem() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve products from local storage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    // Calculate total price
    let total = 0;
    products.forEach(product => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  }, [products]);

  const handleQuantityChange = (index, newQuantity) => {
    // Update quantity of the product at the specified index
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
  };
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1); // Remove the product at the specified index
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts)); // Update local storage
  };


  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {products.length > 0 ? (
        <section className="text-center text-md-start mt-5">
          <div className="container">
            {products.map((product, index) => (
              <div className="row mt-3" key={index}>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                  <h6 className="text-uppercase fw-bold">Snacks</h6>
                  <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
                  <p className="text-justify"><img src={product.img} className="img-fluid" alt="Product" /></p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                  <h6 className="text-uppercase fw-bold text-center">Name</h6>
                  <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
                  <p className="d-flex flex-column justify-content-center align-items-center">{product.Name}</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                  <h6 className="text-uppercase fw-bold text-center">Price</h6>
                  <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
                  <p className="d-flex flex-column justify-content-center align-items-center">{product.price} vnđ</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                  <h6 className="text-uppercase fw-bold text-center">Quantity</h6>
                  <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
                  <input
                    type="number"
                    className="form-control"
                    value={product.quantity}
                    min={1}
                    max={10}
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                  />
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                  <h6 className="text-uppercase fw-bold text-center">Total Price</h6>
                  <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
                  <p className="d-flex flex-column justify-content-center align-items-center">{product.price * product.quantity} vnđ</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                  {/* Delete button */}
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
            
          </div>
          </section>
      ) : (
        <div>No product found in local storage</div>
      )}
      <hr />
      <div className="row mt-3">
              <div className="col-md-6 text-center">
                <h5>Total: {totalPrice}</h5>
              </div>
              <div className="col-md-6 text-center">
                <button className="btn btn-danger" >Order</button>
              </div>
            </div>
    </div>
  );
}
export default Cartiem;