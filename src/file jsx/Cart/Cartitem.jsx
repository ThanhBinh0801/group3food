import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cartiem({loggedInUser}) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
 
  const [delivery, setDelivery] = useState([]);
  const [totalPay, settotalPay] = useState(0);

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

  useEffect(()=>{
    let total1 = 0;
    delivery.forEach(product => {
      total1 += product.price * product.quantity;
    })
    settotalPay(total1)
  },[delivery])

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

  const handleOrder = () => {
    // Check if the user is logged in
    if (!loggedInUser) {
      // If not logged in, prompt the user to log in
      alert("Please log in to place an order.");
      // Optionally, you can redirect the user to the login page here
      return; // Stop further execution of the function
    }
  
    // Retrieve old delivery items from local storage
    const storedDelivery = JSON.parse(localStorage.getItem('delivery')) || [];
    // Concatenate old delivery items with the newly ordered items
    const newDelivery = [...storedDelivery, ...products];
    // Save the updated delivery list to local storage
    localStorage.setItem('delivery', JSON.stringify(newDelivery));
  
    // Clear products state
    setProducts([]);
    // Clear products from local storage
    localStorage.removeItem('products');
  
    // Update the delivery state to trigger re-rendering
    setDelivery(newDelivery);
  };
  
  const handleDelete1 = (index) => {
    const updatedDelivery = [...delivery];
    updatedDelivery.splice(index, 1); // Remove the product at the specified index
    setDelivery(updatedDelivery); // Update the delivery state to reflect the deleted product
    localStorage.setItem('delivery', JSON.stringify(updatedDelivery)); // Update local storage
};

  useEffect(() => {
    // Retrieve products from local storage
    const storedDelivery = JSON.parse(localStorage.getItem('delivery')) || [];
    setDelivery(storedDelivery);
  }, []);

  return (
    <div className="container">
      <section>
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
                      placeholder='Please enter Quantity'
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
          <div>You didnt add any your food yet</div>
        )}
        <hr />
        <div className="row mt-3">
                <div className="col-md-6 text-center">
                  <h5>Total: {totalPrice}</h5>
                </div>
                <div className="col-md-6 text-center">
                  <Link to="/Cart"><button className="btn btn-danger" onClick={handleOrder}>Order</button></Link>
                </div>
              </div>
        <hr />
      </section>
      <section>
        <h2>Dilivery</h2>
        {delivery.length > 0 ? (
          <section className="text-center text-md-start mt-5">
            <div className="container">
              {delivery.map((product, index) => (
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
                      placeholder='Please enter Quantity'
                      value={product.quantity}
                      readOnly={true}
                    />
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">Total Price</h6>
                    <hr className="mb-4 mt-0" style={{ backgroundColor: "#7c4dff" }} />
                    <p className="d-flex flex-column justify-content-center align-items-center">{product.price * product.quantity} vnđ</p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    {/* Delete button */}
                    <button className="btn btn-danger" onClick={() => handleDelete1(index)}>Cancel order</button>
                  </div>
                </div>
                
              ))}
            </div>
          </section>
        ) : (
          <div>You didnt order any your food yet</div>
        )}
        <hr />
        <div className="row mt-3">
                <div className="col-md-6 text-center">
                  <h5>Total pay: {totalPay}</h5>
                </div>
              </div>
      </section>
    </div>
  );
}
export default Cartiem;