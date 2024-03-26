import React from 'react';

function Chitiet(props) {
  const handleAddToLocal = () => {
    // Save the product object to local storage
    localStorage.setItem('product', JSON.stringify(props));
    console.log('Product added to local storage:', props);
    alert('Product added to local storage!');
  };

  return (
    <>
      <div className="container detailSP">
        <div className="row">
          <img src={props.img} alt="Hinh Dai dien" className="col-6" />
          <div className="col-6 thongtin">
            <div>{props.Name}</div>
            <div className="price1">{props.price}</div>
            <div className="buttonchitiet">
              <button onClick={handleAddToLocal}>Add to local</button>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chitiet;


