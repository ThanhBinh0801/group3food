function Chitiet(item) {
  return (
    <>
      <div className="container detailSP">
          <div className="row" >
              <img src={item.Image} alt="Hinh Dai dien" className="col-6"/>         
            <div className="col-6 thongtin" >
                <div>{item.Name}</div>
                <div className="price1">{item.Price}</div> 
                <div className="buttonchitiet">
                    <button>Add to cart</button>
                    <button>Buy</button>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}
export default Chitiet;
