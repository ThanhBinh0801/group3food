// import { useNavigate } from "react-router-dom";
// function Search({ Name, Price, Image }) {
//   const navigate = useNavigate();
//   return (
//     <div className="product ">
//       <div className="hinh">
//       <img src={Image} alt="Son"  />
//       </div>
//       <div className="name">
//         {Name}
//         </div>
//       <p className="namepricesearch">
//         <div className="price">
//         Price: {Price}
//         </div>
//         <button className="view" onClick={() => navigate(`/DetailSearch/${Name}`)}>Detail</button>
//       </p>

//     </div>
//   );
// }
// export default Search;
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

function Search({ Name, Price, Image }) {
  const navigate = useNavigate();

  return (
    <Card className="product">
      <div className="hinh">
        <CardImg
          onClick={() => navigate(`/DetailSearch/${Name}`)}
          top
          src={Image}
          alt="Product"
        />
      </div>
      <CardBody>
        <CardTitle
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/DetailSearch/${Name}`)}
        >
          {Name}
        </CardTitle>
        <CardText onClick={() => navigate(`/DetailSearch/${Name}`)}>
          Price: {Price}
        </CardText>
        <Button
          className="view"
          onClick={() => navigate(`/DetailSearch/${Name}`)}
        >
          Detail
        </Button>
      </CardBody>
    </Card>
  );
}

export default Search;
