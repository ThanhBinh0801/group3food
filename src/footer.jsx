import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
function Footer() {
  return (
    <div className="container my-5">
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
                  <i className="fas fa-home mr-3"></i> 590 CMT8, Phường 11, Quận
                  3, HCM City
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> foodshop@gmail.com
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
  );
}

export default Footer;