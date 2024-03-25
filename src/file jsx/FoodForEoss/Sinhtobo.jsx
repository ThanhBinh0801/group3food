import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chitiet from "./Chitiet";
function DetailFood() {
  const { id } = useParams();
  const [smoothie, setsmoothie] = useState({});
  const getSanphams = () => {
    fetch(`https://65f2fa59105614e6549f75dd.mockapi.io/FoodForEoss/${id}`, {
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
      <Chitiet Name={smoothie.Name} img={smoothie.img} price={smoothie.price}/>
    </div>
  );
}
export default DetailFood;
