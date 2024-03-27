import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chitiet from "./Chitiet";

function Detail() {
  const { id } = useParams();
  const [sanpham, setsanpham] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const getSanphams = () => {
    fetch(`https://65d55b923f1ab8c63436c64d.mockapi.io/smoothies/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((sp) => {
        setsanpham(sp);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    getSanphams();
  }, []);

  return (
    <div>
      <Chitiet
        Name={sanpham.Name}
        img={sanpham.img}
        price={sanpham.price}
        Description={sanpham.Description}
      />
    </div>
  );
}

export default Detail;

