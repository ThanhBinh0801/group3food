import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <img
          src="./imgHome/anhmenuchinh.png"
          alt=""
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>
      <div className="row" style={{ marginBottom: "3rem", marginTop: "1rem" }}>
        <div className="col-6">
          <Link to="/Smooth">
            <img
              src="./imgHome/anhSmoothies.png"
              alt=""
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-6">
          <Link to="/Cereal">
            <img src="./imgHome/anhCereal.png" alt="" className="img-fluid" />
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <img
          src="./imgHome/anhSnacksforkids.png"
          alt=""
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>
      <div className="row" style={{ marginBottom: "3rem", marginTop: "1rem" }}>
        <div className="col-6">
          <Link to="/Cakes">
            <img src="./imgHome/anhCakes.png" alt="" className="img-fluid" />
          </Link>
        </div>
        <div className="col-6">
          <Link to="/Yogurt">
            <img src="./imgHome/anhYogurt.png" alt="" className="img-fluid" />
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <img
          src="./imgHome/anhEasyonStomachSnacks.png"
          alt=""
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>
      <div className="row" style={{ marginBottom: "3rem", marginTop: "1rem" }}>
        <div className="col-6">
          <Link to="/FoodForEoss">
            <img
              src="./imgHome/anhFoodforEOSS.png"
              alt=""
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="col-6">
          <Link to="/DrinksForEoss">
            <img src="./imgHome/anhDrinks.png" alt="" className="img-fluid" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
