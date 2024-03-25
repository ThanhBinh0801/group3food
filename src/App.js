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
        <Footer />
      </footer>
    </div>
  );
}
export default App;
