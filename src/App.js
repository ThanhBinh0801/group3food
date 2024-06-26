import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Contact from "./file jsx/Contact file/Contact";
import Login from "./file jsx/Login file/Login";
import Profile from "./file jsx/Login file/Profile";
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
import Footer from "./footer";
import DetailCake from "./file jsx/CakesHome/Sinhtobo";
import DetailYogurt from "./file jsx/YogurtHome/Sinhtobo";
import DetailFood from "./file jsx/FoodForEoss/Sinhtobo";
import DetailCereal from "./file jsx/CerealHome/Sinhtobo";
import DetailDrinks from "./file jsx/DrinksForEossHome/Sinhtobo";
import DetailSearch from "./file jsx/Search/Sinhtobo";
import Cartiem from "./file jsx/Cart/Cartitem";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );
  const navigate = useNavigate();
  const handleLogout = () => {
    setLoggedInUser(null); // Clear the logged-in user state
    localStorage.removeItem("loggedInUser");
    // Set the logged-in user state to null or an empty object
    setLoggedInUser(null); // or setLoggedInUser({});
    navigate(-1);
  };

  return (
    <div className="App">
      <header className="header slide-in fixed-header">
        <nav className="navheader">
          <div className="row align-items-center ">
            <div className="col d-flex justify-content-center smooth">
              <Menu />
            </div>
            <div className="col textheader smooth">
              <Link to="/SearchButton" className="nav-link">
                <FaSearch />
              </Link>
            </div>
            <div className="col textheader">
              <Link
                to="/"
                className="nav-link FoodShopmenu fw-bold"
                style={{ fontSize: "55px" }}
              >
                FOOD SHOP
              </Link>
            </div>
            <div className="col textheader smooth">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
            <div className="col">
              <div className="col textheader smooth">
                {loggedInUser ? (
                  <Dropdown className="divlogin">
                    <Link to="/profile" className="nav-link">
                      {loggedInUser.Name}
                    </Link>
                    <Dropdown.Toggle
                      split
                      variant="success"
                      id="dropdown-split-basic"
                      className="custom-dropdown-toggle"
                    />
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={handleLogout}
                        id="dropdown-button-dark-example1"
                      >
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Login setLoggedInUser={setLoggedInUser} />
                )}
              </div>
              <div className="col textheader smooth">
                <Link to="/Cart" className="nav-link">
                  <FaShoppingCart />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="siteSection ">
        <Routes>
          <Route path="/SearchButton" element={<SearchButton />} />
          <Route path="/DetailSearch/:Name" element={<DetailSearch />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Smooth" element={<Smooth />} />
          <Route path="/Smooth" element={<Smooth />} />
          <Route path="/Smooth/:id" element={<Detail />} />
          <Route path="/FoodForEoss" element={<FoodForEoss />} />
          <Route path="/FoodForEoss/:id" element={<DetailFood />} />
          <Route path="/Cereal" element={<Cereal />} />
          <Route path="/Cereal/:id" element={<DetailCereal />} />
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/Cakes/:id" element={<DetailCake />} />
          <Route path="/Yogurt" element={<Yogurt />} />
          <Route path="/Yogurt/:id" element={<DetailYogurt />} />
          <Route path="/DrinksForEoss" element={<DrinksForEoss />} />
          <Route path="/DrinksForEoss/:id" element={<DetailDrinks />} />
          <Route
            path="/Cart"
            element={<Cartiem loggedInUser={loggedInUser} />}
          />
        </Routes>
      </section>
      <footer className="slide-in">
        <Footer />
      </footer>
    </div>
  );
}
export default App;
