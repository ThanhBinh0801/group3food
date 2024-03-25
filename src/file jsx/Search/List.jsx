import {Link} from "react-router-dom"
function Search({ Name, Price, Image,id }) {
  return (
    <div className="product">
      <Link to={`/product/${id}`} >
      <div className="hinh">
      <img src={Image} alt="Son"  />
      </div>
      <div className="name">
        {Name}
        </div>
      <p className="namepricesearch">     
        <div className="price">
        Price: {Price}
        </div>
        <button className="view">Detail</button>
      </p>
      </Link>
     
    </div>
  );
}
export default Search;
