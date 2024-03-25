import "./App.css";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./file jsx/Contact file/Contact";
import Login from "./file jsx/Login file/Login";
import SearchButton from "./file jsx/Search/Search";
import Menu from "./file jsx/Dropdown/MenuDropDown";
import Home from "./file jsx/FoodHome/HomePage";
import Smooth from "./file jsx/Smoothies/SmoothiesHome";
import FoodForEoss from "./file jsx/FoodForEoss/FoodForEoss";
import Cereal from "./file jsx/CerealHome/CerealHome";
import Cakes from "./file jsx/CakesHome/CakesHome";
import Yogurt from "./file jsx/YogurtHome/YogurtHome";
import Detail from "./file jsx/Smoothies/Sinhtobo";
import DrinksForEoss from "./file jsx/DrinksForEossHome/DrinksForEoss";
import { TiHome } from "react-icons/ti";
import Footer from "./footer";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <div className="App">
      <header className="header">
        <nav className="navheader">
          <Menu />
          <Link to="/SearchButton">Search</Link>
          <Link to="/" className="FoodShopmenu">
            Food Shop
          </Link>
          <Link to="/contact">Contact</Link>
          {loggedInUser ? ( // Check if user is logged in
            <Link to="/profile">{loggedInUser.Name}</Link> // Display user's name as link
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>
      <section className="siteSection">
        <Routes>
          <Route path="/SearchButton" element={<SearchButton />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/Smooth" element={<Smooth />} />
          <Route path="login" element={<Login />} />
          <Route path="/Smooth" element={<Smooth />} />
          <Route path="/Smooth/:id" element={<Detail />} />
          <Route path="/FoodForEoss" element={<FoodForEoss />} />
          <Route path="/Cereal" element={<Cereal />} />
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/Yogurt" element={<Yogurt />} />
          <Route path="/DrinksForEoss" element={<DrinksForEoss />} />
        </Routes>
      </section>
      <footer>
        <div className=" siteFooter">
          <footer
            className="text-center text-lg-start text-dark"
            style={{ backgroundColor: "#ECEFF1" }}
          >
            <section
              className="d-flex justify-content-between text-white"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <div className="me-5 footerlink">
                <Link to="/">
                  <TiHome fontSize={30} />
                </Link>
              </div>
            </section>
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Food Shop</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "100%",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      Step into our cozy spot offering an array of mouthwatering
                      snacks crafted with care.
                      <br />
                      From crunchy bites to savory delights, our snack selection
                      promises to satisfy every craving.
                      <br />
                      Experience the joy of snacking at Group3 Snack Shop today!
                    </p>
                  </div>
                  <div className="col-md-5 col-lg-4 col-xl-4 mx-auto mb-8">
                    <h6 className="text-uppercase fw-bold text-center mb-2 ">
                      Products
                    </h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "100%",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <div className="row">
                      <div className="col-sm-6 footerlink">
                        <p>
                          <Link to="/Smooth" className="text-dark">
                            Smoothies
                          </Link>
                        </p>
                        <p>
                          <Link to="/Cakes" className="text-dark">
                            Cake
                          </Link>
                        </p>
                        <p>
                          <Link to="/FoodForEoss" className="text-dark">
                            FoodForEoss
                          </Link>
                        </p>
                      </div>
                      <div className="col-sm-6 footerlink">
                        <p>
                          <Link to="/Cereal" className="text-dark">
                            Cereal
                          </Link>
                        </p>
                        <p>
                          <Link to="Yogurt" className="text-dark">
                            Yogurt
                          </Link>
                        </p>
                        <p>
                          <Link to="/DrinksForEoss" className="text-dark">
                            DrinksForEoss
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{
                        width: "100%",
                        backgroundColor: "#7c4dff",
                        height: "2px",
                      }}
                    />
                    <p>
                      <i className="fas fa-print mr-3"></i> GROUP3 FOOD SHOP
                    </p>
                    <p>
                      <i className="fas fa-home mr-3"></i> 590 CMT8, Phường 11,
                      Quận 3, HCM City
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i>{" "}
                      foodshop@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> +84 123 456 789
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <div
              className="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2020 Copyright:{" "}
            </div>
          </footer>
        </div>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
