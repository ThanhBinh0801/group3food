import React, { useState, useEffect } from "react";
import Search from "./List";
import { FaSearch } from 'react-icons/fa';

function SearchButton() {
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [clicked, setClicked] = useState(false);

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
          <form onSubmit={handleSearch} className="formsearch-border">
            <input
              type="Text"
              value={searchText}
              placeholder="..."
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="inputsearch border-0"
            /><span onClick={handleSearch} className={clicked ? "clicked" : ""}><FaSearch/></span>
          </form>
    </header>
        <section>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {searchResult && searchResult.length > 0 ? (
            searchResult.map((result, index) => (
              <div key={index} className="col">
                <Search
                  Image={result.Image}
                  Name={result.Name}
                  Price={result.Price}
                  id={result.id}
                />
              </div>
              
            ))
          ) : noResult ? (
            <div className="col">No result</div>
          ) : (
            null
          )}
        </div>
        </section>
      
    </div>
  );
}

export default SearchButton;
