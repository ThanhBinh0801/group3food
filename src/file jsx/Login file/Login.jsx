import React, { useState } from "react";
import { Form, Button, Offcanvas } from "react-bootstrap";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedInUser, setShowLoginModal  }) {
  const navigate = useNavigate();
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Fetch sign-up data from the API
      const response = await fetch(
        "https://65d5adc7f6967ba8e3bc3180.mockapi.io/Signup"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch sign-up data");
      }
      const userData = await response.json();

      // Check if the entered credentials match the sign-up data
      const foundUser = userData.find(
        (user) => user.Name === loginName && user.Password === loginPassword
      );
      console.log(foundUser)
      if (foundUser) {
        // Successful login
        console.log("Login successful");
        setLoggedInUser(foundUser);
        console.log("User logged in:", foundUser); // Log the user object
        // Save the logged-in user data to local storage
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        setLoggedInUser(foundUser);
        // navigate("/contact"); // Navigate to the dashboard or any other page
        setShowLoginModal(false);
    } else {
        // Unsuccessful login
        setError("Wrong Name or Password");
    }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to log in. Please try again later.");
    }
  };

  return (
    <header>
      <div variant="primary" onClick={handleShow}>
        Login
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
        <h5 className="fw-bold mb-2 text-uppercase ">
              Welcome to Group3 Food Shop
            </h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-5 mt-md-4">
            <div className="mb-3">
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-center">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    autoFocus
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </Form.Group>
                {error && <p className="text-danger">{error}</p>}
                <div className="d-grid">
                  <Button variant="warning" type="submit" className="login">
                    Login
                  </Button>
                </div>
              </Form>
              <div className="mt-3">
                <p className="mb-0 text-center">
                  Don't have an account? <Signup />
                </p>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Login;


