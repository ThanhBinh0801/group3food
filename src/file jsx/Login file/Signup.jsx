import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Signup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender, setGender] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const input = e.target.value;
    const regex = /^[0-9]+$/; // Regular expression to match only numbers
    setIsValid(
      (input === "" || regex.test(input)) &&
        input.length >= 9 &&
        input.length <= 10
    );
    setPhone(input);
  };

  const handleSubmit = () => {
    if (!isValid) {
      alert("Please enter a valid phone number with 9 to 10 digits.");
      return; // Stop further execution if the input is invalid
    }
    // Here you can handle form submission
    const newSubmit = {
      Name: Name,
      Password: Password,
      ConfirmPass: ConfirmPass,
      Phone: Phone,
      Address: Address,
      Gender: Gender,
    };
    if (Password !== ConfirmPass) {
      alert("Passwords do not match");
      return;
    }
    // Add your sign-up logic here
    console.log("Name:", Name);
    console.log("Password:", Password);
    console.log("Phone:", Phone);
    console.log("Address:", Address);
    console.log("Gender:", Gender);
    handleClose();
    console.log(newSubmit);
    fetch("https://65d5adc7f6967ba8e3bc3180.mockapi.io/Signup", {
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

  const handleSubmitForm = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleSubmit(); // Call the handleSubmit function manually
  };

  return (
    <div className="popup">
      <Button variant="warning" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ConfirmPass</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Phone Number"
                value={Phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Gender</Form.Label>
              <Form.Select onChange={(e) => setGender(e.target.value)}>
                <option>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;

