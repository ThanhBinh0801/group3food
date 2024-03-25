import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";

function Footer() {
  return (
    <div className="container-fluid px-0 ">
      <footer className="text-center text-lg-start text-dark bg-light ">
        <section className="d-flex justify-content-between text-white maufooter p-3 ">
          <div className="me-5 footerlink text-center ">
            <Link to="/" className="text-dark ">
              <TiHome fontSize={30} />
            </Link>
          </div>
        </section>
        <section className="text-center text-md-start mt-5">
          <div className="container">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-4 mx-auto">
                <h6 className="text-uppercase fw-bold">Food Shop</h6>
                <hr
                  className="mb-4 mt-0"
                  style={{ backgroundColor: "#7c4dff" }}
                />
                <p className="text-justify">
                  Step into our cozy spot offering an array of mouthwatering
                  snacks crafted with care. From crunchy bites to savory
                  delights, our snack selection promises to satisfy every
                  craving. Experience the joy of snacking at Group3 Snack Shop
                  today!
                </p>
              </div>
              <div className="col-md-5 col-lg-4 col-xl-4 mx-auto">
                <h6 className="text-uppercase fw-bold text-center">Products</h6>
                <hr
                  className="mb-4 mt-0"
                  style={{ backgroundColor: "#7c4dff" }}
                />
                <div className="row">
                  <div className="col-sm-6 footerlink">
                    <p className="smooth">
                      <Link to="/Smooth" className="text-dark">
                        Smoothies
                      </Link>
                    </p>
                    <p className="smooth">
                      <Link to="/Cakes" className="text-dark">
                        Cake
                      </Link>
                    </p>
                    <p className="smooth">
                      <Link to="/FoodForEoss" className="text-dark">
                        FoodForEoss
                      </Link>
                    </p>
                  </div>
                  <div className="col-sm-6 footerlink">
                    <p className="smooth">
                      <Link to="/Cereal" className="text-dark">
                        Cereal
                      </Link>
                    </p>
                    <p className="smooth">
                      <Link to="Yogurt" className="text-dark">
                        Yogurt
                      </Link>
                    </p>
                    <p className="smooth">
                      <Link to="/DrinksForEoss" className="text-dark">
                        DrinksForEoss
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0"
                  style={{ backgroundColor: "#7c4dff" }}
                />
                <p>
                  <i className="fas fa-print me-3"></i> GROUP3 FOOD SHOP
                </p>
                <p>
                  <i className="fas fa-home me-3"></i> 590 CMT8, Phường 11, Quận
                  3, HCM City
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i> foodshop@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +84 123 456 789
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-3 maufooter text-dark">
          © 2020 Group3 Food Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
