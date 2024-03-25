import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chitiet from "./Chitiet";
function DetailCake() {
  const { id } = useParams();
  const [sanpham, setsanpham] = useState({});
  const getSanphams = () => {
    fetch(`https://65d55b923f1ab8c63436c64d.mockapi.io/Cakes/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((sp) => {
        //console.log("Student List: " + studentList);
        setsanpham(sp);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };
  useEffect(() => {
    getSanphams();
  }, []);
  // console.log(sanpham);
  return (
    <div>
      <Chitiet Name={sanpham.Name} img={sanpham.img} price={sanpham.price} />
    </div>
  )
}
export default DetailCake;
