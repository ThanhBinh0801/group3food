import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Chitiet from "./Chitiet";

function DetailSearch() {
  const { Name } = useParams(); // Sử dụng name thay vì id
  const [smoothie, setSmoothie] = useState({});

  const getSanphams = () => {
    fetch(`https://6601998687c91a11641b3aa6.mockapi.io/SearchDetail?Name=${Name}`, { // Truy vấn dựa trên Name thay vì id
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
        setSmoothie(sp[0]); // Lấy phần tử đầu tiên của mảng kết quả
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
      <Chitiet Name={smoothie.Name} img={smoothie.img} price={smoothie.price} Description={smoothie.Description} Description1={smoothie.Description1} Description2={smoothie.Description2} Description3={smoothie.Description3} />
    </div>
  );
}

export default DetailSearch;
