function Chitiet(props) {
  return (
    <>
      <div className="container detailSP">
          <div className="row" >
              <img src={props.img} alt="Hinh Dai dien" className="col-6"/>         
            <div className="col-6 thongtin" >
                <div>{props.Name}</div>
                <div className="price1">{props.price}</div> 
                <div className="buttonchitiet">
                    <button>Add to card</button>
                    <button>Buy</button>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}
export default Chitiet;
