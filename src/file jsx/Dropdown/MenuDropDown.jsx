import { Link } from "react-router-dom";
import { BsList } from 'react-icons/bs';
import { useState } from "react";
import { Offcanvas } from 'react-bootstrap';
import Popup from "../Contact file/popupcontact";
import Contact from "../Contact file/Contact";


function Menu() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div variant="primary" onClick={handleShow} className="textheader">
        Menu<BsList/>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h2>Menu</h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            <h5>
              <Link to="/Smooth" className="menuoffcanvas">
                Smoothies
              </Link>
            </h5>
            <h5><Link to="/Cereal" className="menuoffcanvas">Cereal</Link></h5>
            <h5><Link to="/Cakes" className="menuoffcanvas">Cakes</Link></h5>
            <h5><Link to="/Yogurt" className="menuoffcanvas">Yogurt</Link></h5>
            <h5><Link to="/FoodForEOSS" className="menuoffcanvas">FoodForEOSS</Link></h5>
            <h5><Link to="/DrinksForEoss" className="menuoffcanvas">DrinkForEOSS</Link></h5>
          </p>
          <hr />
          <div>          
          <Offcanvas.Title><h2>What can we help you?</h2></Offcanvas.Title>         
          <Offcanvas.Title><Link to="/contact" className="menuoffcanvas">Contact</Link></Offcanvas.Title>
          </div>
          <Popup/>
        </Offcanvas.Body>
      </Offcanvas> 
    </>  
  );
}

export default Menu;
