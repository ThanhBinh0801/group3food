function Chitiet(smoothie) {
  return (
    <>
      <div className="container detailSP">
          <div className="row" >
              <img src={smoothie.img} alt="Hinh Dai dien" className="col-6"/>         
            <div className="col-6 thongtin" >
                <div>{smoothie.Name}</div>
                <div className="price1">{smoothie.price}</div> 
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
