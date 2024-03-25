function Chitiet({ Name, Image, Price}) {
  return (
    <>
      <div className="container detailSP">
          <div className="row" >
              <img src={Image} alt="Hinh Dai dien" className="col-6"/>         
            <div className="col-6 thongtin" >
                <div>{Name}</div>
                <div className="price1">{Price}</div> 
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
