import { Link } from "react-router-dom";
import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div className="slide-in">
      <div className="trangchubg">
        <Carousel>
         <Carousel.Item>
            <img src="/imgHome/anhtraicay.png" alt="headerimg2" className="hinhchuyendongtrangchu"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/imgHome/anhfood.png" alt="headerimg1" className="hinhchuyendongtrangchu"/>
            </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        {/* <div className="row justify-content-center image">
          <img
            src="./imgHome/anhmenuchinh.png"
            alt=""
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div> */}
        <div className="row" style={{ marginBottom: "3rem", marginTop: "1rem" }}>
          <div className="col-6">
            <Link to="/Smooth">
              <img
                src="/imgHome/anhSmoothies.png"
                alt="smoo"
                className="img-fluid image"
              />
            </Link>
          </div>
          <div className="col-6 image">
            <Link to="/Cereal">
              <img src="/imgHome/anhCereal.png" alt="cereal" className="img-fluid" />
            </Link>
          </div>
        </div>
        {/* <div className="row justify-content-center image">
          <img
            src="./imgHome/anhSnacksforkids.png"
            alt=""1
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div> */}
        <div className="row" style={{ marginBottom: "3rem", marginTop: "1rem" }}>
          <div className="col-6 image">
            <Link to="/Cakes">
              <img src="/imgHome/anhCakes.png" alt="cake" className="img-fluid" />
            </Link>
          </div>
          <div className="col-6 image">
            <Link to="/Yogurt">
              <img src="/imgHome/anhYogurt.png" alt="yogurt" className="img-fluid" />
            </Link>
          </div>
        </div>
        {/* <div className="row justify-content-center image">
          <img
            src="./imgHome/anhEasyonStomachSnacks.png"
            alt=""
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div> */}
        <div
          className="row"
          style={{ marginBottom: "3rem", marginTop: "1rem" }}
        >
          <div className="col-6 image">
            <Link to="/FoodForEoss">
              <img
                src="/imgHome/anhFoodforEOSS.png"
                alt="food"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="col-6 image">
            <Link to="/DrinksForEoss">
              <img src="/imgHome/anhDrinks.png" alt="Drink" className="img-fluid" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
