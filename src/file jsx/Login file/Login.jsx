import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedInUser }) {
  const navigate = useNavigate();
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

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

      if (foundUser) {
        // Successful login
        console.log("Login successful");
        setLoggedInUser(foundUser);
        navigate("/contact"); // Navigate to the dashboard or any other page
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
    <div>
      <header>
        <Container>
          <Row className="vh-30 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-5 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">
                      Welcome to Group3 Food Shop
                    </h2>
                    <p className=" mb-3">
                      Please enter your login and password!
                    </p>
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

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
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
                          <Button
                            variant="primary"
                            type="submit"
                            className="login"
                          >
                            Login
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Don't have an account? <Signup />
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </header>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default Login;
