import { Link } from "react-router-dom";
import { BsList } from 'react-icons/bs';
import { useState } from "react";
import { Offcanvas } from 'react-bootstrap';
import Popup from "../Contact file/popupcontact";

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
        <Offcanvas.Header closeButton className="chinhmauchomenu">
          <Offcanvas.Title><h2>Menu</h2></Offcanvas.Title>
        </Offcanvas.Header>


        <Offcanvas.Body className="offcanvas-menu">
        <p>
            <h5 className="smooth">

              <Link to="/Smooth" className="menuoffcanvas">
                Smoothies
              </Link>
            </h5>
            <h5 className="smooth"><Link to="/Cereal" className="menuoffcanvas">Cereal</Link></h5>
            <h5 className="smooth"><Link to="/Cakes" className="menuoffcanvas">Cakes</Link></h5>
            <h5 className="smooth"><Link to="/Yogurt" className="menuoffcanvas">Yogurt</Link></h5>
            <h5 className="smooth"><Link to="/FoodForEOSS" className="menuoffcanvas">FoodForEOSS</Link></h5>
            <h5 className="smooth"><Link to="/Yogurt" className="menuoffcanvas">DrinkForEOSS</Link></h5>
          </p>
          <hr />
          <Offcanvas.Title><Link to="/contact" className="menuoffcanvas">Contact</Link></Offcanvas.Title>
          <hr />
          <Offcanvas.Title><h2>What can we help you?</h2></Offcanvas.Title>
          <Popup/>
        </Offcanvas.Body>
      </Offcanvas> 
  </>  
  );
}

export default Menu;
