import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chitiet from "./Chitiet";

function DetailSearch() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const urls = [
    "https://65f070efda8c6584131bc736.mockapi.io/FoodForEOSS",
    "https://65f070efda8c6584131bc736.mockapi.io/DrinkForEOSS",
    "https://65d55c1a3f1ab8c63436c8c1.mockapi.io/Cereal",
    "https://65f06999da8c6584131ba9bc.mockapi.io/Cakes",
    "https://65f06999da8c6584131ba9bc.mockapi.io/Yogurt",
    "https://65d55c1a3f1ab8c63436c8c1.mockapi.io/Smoothies",
  ];

  const fetchApiData = async () => {
    try {
      const allData = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
          });
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          return response.json();
        })
      );
      setData(allData);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      {data.map((dataArray, index) => (
        dataArray.map((item, subIndex) => (
          <Chitiet key={`${index}-${subIndex}`} Name={item.name} img={item.img} price={item.price} />
        ))
      ))}
    </div>
  );
}

export default DetailSearch;
