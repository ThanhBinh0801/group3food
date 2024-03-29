import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useParams } from "react-router-dom";

function Cartiem({ loggedInUser }) {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [delivery, setDelivery] = useState([]);
  const [totalPay, setTotalPay] = useState(0);

  const [received, setReceived] = useState([]);
  const [activeTab, setActiveTab] = useState("Shopping Cart");

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  }, [products]);

  useEffect(() => {
    let totalPay = 0; // Renamed from total1 to totalPay
    delivery.forEach((product) => {
      totalPay += product.price * product.quantity;
    });
    setTotalPay(totalPay); // Updated state variable name to setTotalPay
  }, [delivery]);

  useEffect(() => {
    const storedDelivery = JSON.parse(localStorage.getItem("delivery")) || [];
    setDelivery(storedDelivery);
  }, []);

  useEffect(() => {
    const storedReceived = JSON.parse(localStorage.getItem("received")) || [];
    setReceived(storedReceived);
  }, []);

  useEffect(() => {
    if (!loggedInUser) {
      setReceived([]);
      localStorage.removeItem("received");
    }
  }, [loggedInUser]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = newQuantity;
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleOrder = () => {
    if (!loggedInUser) {
      alert("Please log in to place an order.");
      return;
    }

    const newDelivery = [...delivery, ...products];
    localStorage.setItem("delivery", JSON.stringify(newDelivery));
    setDelivery(newDelivery);

    setProducts([]);
    localStorage.removeItem("products");
  };

  const handleReceived = async (index) => {
    // Ensure that the user is logged in
    if (!loggedInUser) {
      alert("Please log in to place an order.");
      return;
    }
    // Retrieve the selected product object from the delivery state using the index
    const selectedProduct = delivery[index];

    // Get the existing received products from local storage
    const storedReceived = JSON.parse(localStorage.getItem("received")) || [];

    // Add the selected product to the received products array
    const newReceived = [...storedReceived, selectedProduct];

    // Save the updated received products array to local storage
    localStorage.setItem("received", JSON.stringify(newReceived));

    // Log the updated received products array
    console.log("Received product:", selectedProduct);

    // Clear the delivery state and local storage
    const updatedDelivery = delivery.filter((_, i) => i !== index);
    setDelivery(updatedDelivery);
    localStorage.setItem("delivery", JSON.stringify(updatedDelivery));


  };
  const handleDelete1 = (index) => {
    const updatedDelivery = [...delivery];
    updatedDelivery.splice(index, 1);
    setDelivery(updatedDelivery);
    localStorage.setItem("delivery", JSON.stringify(updatedDelivery));
  };

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={(tab) => setActiveTab(tab)}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Shopping Cart" title="Shopping Cart">
        {products.length > 0 ? (
          <section className="text-center text-md-start mt-5">
            <div className="container">
              {products.map((product, index) => (
                <div className="row mt-3" key={index}>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold">Snacks</h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="text-justify">
                      <img
                        src={product.img}
                        className="img-fluid"
                        alt="Product"
                      />
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">Name</h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.Name}
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Price
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.price} vnđ
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Quantity
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Please enter Quantity"
                      value={product.quantity}
                      min={1}
                      max={10}
                      onChange={(e) =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value) || 1
                        )
                      }
                    />
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Total Price
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.price * product.quantity} vnđ
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    {/* Delete button */}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
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
            <Link to="/Cart">
              <button className="btn btn-danger" onClick={handleOrder}>
                Order
              </button>
            </Link>
          </div>
        </div>
        <hr />
      </Tab>
      <Tab eventKey="Dilivery" title="Delivery">
        {delivery.length > 0 ? (
          <section className="text-center text-md-start mt-5">
            <div className="container">
              {delivery.map((product, index) => (
                <div className="row mt-3" key={index}>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold">Snacks</h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="text-justify">
                      <img
                        src={product.img}
                        className="img-fluid"
                        alt="Product"
                      />
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">Name</h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.Name}
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Price
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.price} vnđ
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Quantity
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Please enter Quantity"
                      value={product.quantity}
                      readOnly={true}
                    />
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Total Price
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.price * product.quantity} vnđ
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    {/* Delete button */}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete1(index)}
                    >
                      Cancel order
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleReceived(index)}
                    >
                      Received
                    </button>
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
      </Tab>
      <Tab eventKey="Received" title="Received">
        {received.length > 0 ? (
          <section className="text-center text-md-start mt-5">
            <div className="container">
              {received.map((product, index) => (
                <div className="row mt-3" key={index}>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold">Snacks</h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="text-justify">
                      <img
                        src={product.img}
                        className="img-fluid"
                        alt="Product"
                      />
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">Name</h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.Name}
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Price
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.price} vnđ
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Quantity
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Please enter Quantity"
                      value={product.quantity}
                      readOnly={true}
                    />
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                    <h6 className="text-uppercase fw-bold text-center">
                      Total Price
                    </h6>
                    <hr
                      className="mb-4 mt-0"
                      style={{ backgroundColor: "#7c4dff" }}
                    />
                    <p className="d-flex flex-column justify-content-center align-items-center">
                      {product.price * product.quantity} vnđ
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div>You haven't received any food yet.</div>
        )}
      </Tab>
    </Tabs>
  );
}
export default Cartiem;
