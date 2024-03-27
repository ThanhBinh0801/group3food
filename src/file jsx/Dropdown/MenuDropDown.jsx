import { Link } from "react-router-dom";
import { BsList } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
function Menu() {
  const [show, setShow] = useState();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div variant="primary" onClick={handleShow} className="textheader">
        Menu<BsList/>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="chinhmauchomenu">
          <Offcanvas.Title><h1>Menu</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-menu">
          <h3 className="smooth">
            <Link to="/Smooth" className="menuoffcanvas">
                      Smoothies
            </Link>
          </h3>
          <h3 className="smooth"><Link to="/Cereal" className="menuoffcanvas">Cereal</Link></h3>
          <h3 className="smooth"><Link to="/Cakes" className="menuoffcanvas">Cakes</Link></h3>
          <h3 className="smooth"><Link to="/Yogurt" className="menuoffcanvas">Yogurt</Link></h3>
          <h3 className="smooth"><Link to="/FoodForEOSS" className="menuoffcanvas">FoodForEOSS</Link></h3>
          <h3 className="smooth"><Link to="/Yogurt" className="menuoffcanvas">DrinkForEOSS</Link></h3>
        </Offcanvas.Body>
      </Offcanvas> 

  </>  
  );
}

export default Menu;
