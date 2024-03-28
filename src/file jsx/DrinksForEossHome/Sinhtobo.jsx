import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chitiet from "./Chitiet";
function DetailDrinks() {
  const { id } = useParams();
  const [smoothie, setsmoothie] = useState({});
  const getSanphams = () => {
    fetch(`https://65f4169af54db27bc0206941.mockapi.io/DrinksForEoss/${id}`, {
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
        setsmoothie(sp);
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
      <Chitiet Name={smoothie.Name} img={smoothie.img} price={smoothie.price} Description={smoothie.Description} Description1={smoothie.Description1} Description2={smoothie.Description2} Description3={smoothie.Description3} />
    </div>
  );
}
export default DetailDrinks;
