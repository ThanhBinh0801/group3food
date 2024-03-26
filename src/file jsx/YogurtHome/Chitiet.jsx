function Chitiet(smoothie) {
  const handleAddToLocal = () => {
    // Save the product object to local storage
    localStorage.setItem('product', JSON.stringify(smoothie));
    console.log('Product added to local storage:', smoothie);
    alert('Product added to local storage!');
  };
  return (
    <>
      <div className="container detailSP">
          <div className="row" >
              <img src={smoothie.img} alt="Hinh Dai dien" className="col-6"/>         
            <div className="col-6 thongtin" >
                <div>{smoothie.Name}</div>
                <div className="price1">{smoothie.price}</div> 
                <div className="buttonchitiet">
                    <button onClick={handleAddToLocal}>Add to cart</button>
                    <button>Buy</button>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}
export default Chitiet;
