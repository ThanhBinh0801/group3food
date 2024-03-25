import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Popup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Submit, setSubmit] = useState("");

  const Submitform = (event) => {
    event.preventDefault();
    const newSubmit = {
      Name: Name,
      Lastname: Lastname,
      Email: Email,
      submit: Submit,
    };

    console.log(newSubmit);
    fetch("https://65d5adc7f6967ba8e3bc3180.mockapi.io/SupportSubmit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newSubmit),
    })
      .then(() => {
        handleClose(); // Close the modal after successful form submission
        // Optionally, navigate to another page
        // navigate("/Sanpham");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div>
      <header className="popup">
        <Button variant="primary" onClick={handleShow}>
          Support: ninhthanhbinh8197@gmail.com
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Your Submit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={Submitform}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <br />
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setSubmit(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Send</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default Popup;
