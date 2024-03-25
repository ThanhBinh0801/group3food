import Food from "./Food";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cakes() {
  const [smoothies, setSmoothies] = useState([]);

  const fetchSmoothies = () => {
    fetch("https://65d55b923f1ab8c63436c64d.mockapi.io/Cakes", {
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
        <img src="./imgHome/anhCakes.png" alt="" />
        <div className="col anhbensmoothies">
          {chunkArray(smoothies, 2).map((pair, index) => (
            <div className="row dichuyenanhsanpham" key={index}>
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

export default Cakes;
