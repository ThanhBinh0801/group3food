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
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h2>Menu</h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <hr style={{ borderStyle: 'solid', borderWidth: '4px' }}/> */}
          <p>
          <Offcanvas.Title style={{ borderBottom: '2px solid black',textAlign: 'center' }}><h3>Healthy Snack</h3></Offcanvas.Title>
          
            <h5>
              <Link to="/Smooth" className="menuoffcanvas">
                     Smoothies
              </Link>
            </h5>
            <h5><Link to="/Cereal" className="menuoffcanvas">     Cereal</Link></h5>
           
            <Offcanvas.Title style={{ borderBottom: '2px solid black' , textAlign: 'center' }}><h3>Snacks for kids</h3></Offcanvas.Title>
            <h5><Link to="/Cakes" className="menuoffcanvas">    Cakes</Link></h5>
            <h5><Link to="/Yogurt" className="menuoffcanvas">    Yogurt</Link></h5>
            
            <Offcanvas.Title style={{ borderBottom: '2px solid black' , textAlign: 'center' }}><h3>Easy on stomach snacks</h3></Offcanvas.Title>
            <h5><Link to="/FoodForEOSS" className="menuoffcanvas">     FoodForEOSS</Link></h5>
            <h5><Link to="/DrinksForEoss" className="menuoffcanvas">    DrinkForEOSS</Link></h5>
          </p>
          {/* <hr style={{ borderStyle: 'solid black', borderWidth: '4px' }}/> */}
          <p>          
          <Offcanvas.Header>
            <Offcanvas.Title style={{ borderBottom: '2px solid black' , textAlign: 'center' }}><h2>What can we help you?</h2></Offcanvas.Title> 
          </Offcanvas.Header>        
          <Offcanvas.Title><Link to="/contact" className="menuoffcanvas">Contact</Link></Offcanvas.Title>
          <Popup/>
          </p>
        </Offcanvas.Body>
      </Offcanvas> 
    </>  
  );
}

export default Menu;
