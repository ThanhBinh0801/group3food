import { useNavigate } from "react-router-dom";
function Search({ Name, Price, Image }) {
  const navigate = useNavigate();
  return (
    <div className="product">
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
        <button className="view" onClick={() => navigate(`/DetailSearch/${Name}`)}>Detail</button>
      </p>
     
    </div>
  );
}
export default Search;
