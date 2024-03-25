import Food from "./Food";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cereal() {
  const [smoothies, setSmoothies] = useState([]);

  const fetchSmoothies = () => {
    fetch("https://65f2fa59105614e6549f75dd.mockapi.io/Cereal", {
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
        <img src="./imgDinksForEoss/anhDrinks.png" alt="" />
        <div className=" anhbensmoothies">
          {chunkArray(smoothies, 2).map((pair, index) => (
            <div className="row dichuyenanhsanpham" key={index}>
              {pair.map((smoothie, innerIndex) => (
                <div className="col-md-6" key={innerIndex}>
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

export default Cereal;
