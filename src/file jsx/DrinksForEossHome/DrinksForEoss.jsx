import Food from "./Food";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DrinksForEoss() {
  const [smoothies, setSmoothies] = useState([]);

  const fetchSmoothies = () => {
    fetch("https://65f4169af54db27bc0206941.mockapi.io/DrinksForEoss", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setSmoothies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchSmoothies();
  }, []);

  // Hàm chia mảng thành các cặp phần tử
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div>
      <section className="container">
        <td /> <br />
        <img src="./imgHome/anhDrinks.png" alt="" />
        <div className="col anhbensmoothies">
          {chunkArray(smoothies, 2).map((pair, index) => (
            <div className="row dichuyenhanhsanpham" key={index}>
              {pair.map((smoothie, innerIndex) => (
                <div className="col" key={innerIndex}>
                  <Food Name={smoothie.Name} img={smoothie.img} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DrinksForEoss;
