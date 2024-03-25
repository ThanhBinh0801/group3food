import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="homepage">
      <br />
      <div>
        <Link>
          <div>
            <img src="./imgHome/anhmenuchinh.png" alt="" />
          </div>
        </Link>
        <div className="detail">
          <div className="marginautu">
            <div>
              <Link to="/Smooth">
                <div>
                  <img src="./imgHome/anhSmoothies.png" alt="" />
                </div>
              </Link>
            </div>
            <div>
              <Link to="/Cereal">
                <div>
                  <img src="./imgHome/anhCereal.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      <div>
        <Link>
          <img src="./imgHome/anhSnacksforkids.png" alt="" />
        </Link>
        <div className="detail">
          <div className="marginautu">
            <div>
              <Link to="/Cakes">
                <div>
                  <img src="./imgHome/anhCakes.png" alt="" />
                </div>
              </Link>
            </div>
            <div>
              <Link to="/Yogurt">
                <div>
                  <img src="./imgHome/anhYogurt.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      <div>
        <Link>
          <img src="./imgHome/anhEasyonStomachSnacks.png" alt="" />
        </Link>
        <div className="detail">
          <div className="marginautu">
            <div>
              <Link to="/FoodForEoss">
                <div>
                  <img src="./imgHome/anhFoodforEOSS.png" alt="" />
                </div>
              </Link>
            </div>
            <div>
              <Link to="/DrinksForEoss">
                <div>
                  <img src="./imgHome/anhDrinks.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
