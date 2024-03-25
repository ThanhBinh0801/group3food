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
import Footer from "./footer";
import DetailCake from "./file jsx/CakesHome/Sinhtobo";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <div className="App">
      <header className="header">
        <nav className="navheader">
          <div className="row align-items-center ">
            <div className="col d-flex justify-content-center ">
              <Menu />
            </div>
            <div className="col">
              <Link to="/SearchButton" className="nav-link">
                Search
              </Link>
            </div>
            <div className="col">
              <Link
                to="/"
                className="nav-link FoodShopmenu fw-bold"
                style={{ fontSize: "65px" }}
              >
                Food Shop
              </Link>
            </div>
            <div className="col">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
            <div className="col ">
              {loggedInUser ? (
                <Link to="/profile" className="nav-link">
                  {loggedInUser.Name}
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
            </div>
          </div>
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
          <Route path="/Cakes/:id" element={<DetailCake />} />
          <Route path="/Yogurt" element={<Yogurt />} />
          <Route path="/DrinksForEoss" element={<DrinksForEoss />} />
        </Routes>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
