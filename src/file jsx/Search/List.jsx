function Search({ Name, Price, Image }) {
  return (
    <div className="product">
      <div className="name">
        {Name}
        </div>
      <div className="hinh">
      <img src={Image} alt="Son"  />
      </div>
      <p className="namepricesearch">     
        <div className="price">
         Price: {Price}
        </div>
      <button className="view">Detail</button>
      </p>
      
      
    </div>
  );
}

export default Search;
