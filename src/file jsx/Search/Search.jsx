import React, { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Search from "./List";

function SearchButton() {
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    // Fetch all data when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const foodResponse = await fetch(
        "https://65f070efda8c6584131bc736.mockapi.io/FoodForEOSS"
      );
      const drinkResponse = await fetch(
        "https://65f070efda8c6584131bc736.mockapi.io/DrinkForEOSS"
      );
      const cerealResponse = await fetch(
        "https://65d55c1a3f1ab8c63436c8c1.mockapi.io/Cereal"
      );
      const cakeResponse = await fetch(
        "https://65f06999da8c6584131ba9bc.mockapi.io/Cakes"
      );
      const yogurtResponse = await fetch(
        "https://65f06999da8c6584131ba9bc.mockapi.io/Yogurt"
      );
      const smoothieResponse = await fetch(
        "https://65d55c1a3f1ab8c63436c8c1.mockapi.io/Smoothies"
      );

      if (
        !foodResponse.ok ||
        !drinkResponse.ok ||
        !cerealResponse.ok ||
        !cakeResponse.ok ||
        !yogurtResponse.ok ||
        !smoothieResponse.ok
      ) {
        throw new Error(
          "An error occurred while retrieving data from the API."
        );
      }

      const foodData = await foodResponse.json();
      const drinkData = await drinkResponse.json();
      const cerealData = await cerealResponse.json();
      const cakeData = await cakeResponse.json();
      const yogurtData = await yogurtResponse.json();
      const smoothieData = await smoothieResponse.json();

      const allData = [
        ...foodData,
        ...drinkData,
        ...cerealData,
        ...cakeData,
        ...yogurtData,
        ...smoothieData,
      ];

      setAllData(allData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    if (searchText.trim() === "") {
      return;
    }

    setIsLoading(true);
    setNoResult(false);

    const results = allData.filter((item) =>
      item.Name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (results.length === 0) {
      setNoResult(true);
      setSearchResult(null);
    } else {
      setSearchResult(results);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div onClick={handleSearch}>
      <header>
        <Container className="container">
          <Row className="vh-70 d-flex justify-content-center align-items-center ">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card>
                <Card.Body className="custom-card-body">
                  <div className="mt-md-4">
                    <h2 className="fw-bold text-uppercase ">
                      What do you want to search ?
                    </h2>
                    <div className="">
                      <Form onSubmit={handleSearch}>
                        <Form.Group className="" controlId="formBasicPassword">
                          <Form.Label>Your Search</Form.Label>
                          <Form.Control
                            type="Text"
                            value={searchText}
                            placeholder="..."
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            autoFocus
                          />
                        </Form.Group>
                        <div className="d-grid">
                          <Button onClick={handleSearch} disabled={isLoading}>
                            {isLoading ? "Loading..." : "Search"}
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        {noResult ? (
          <h2>No result</h2>
        ) : (
          searchResult && (
            <div>
              <h2>Result:</h2>
              <ul>
                {searchResult.map((result, index) => (
                  <div key={index}>
                    <Search
                      Image={result.Image}
                      Name={result.Name}
                      Price={result.Price}
                    />
                  </div>
                ))}
              </ul>
            </div>
          )
        )}
      </header>
    </div>
  );
}

export default SearchButton;
