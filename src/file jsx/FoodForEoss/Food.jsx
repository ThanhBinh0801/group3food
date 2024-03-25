import { useNavigate } from "react-router-dom";
function Food(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="cacsanphamchinh"
       onClick={() => navigate(`/FoodForEoss/${props.id}`)}
      >
        <div><img src={props.img} alt="" /></div>
        <div className="tenthanhphan">{props.Name}</div>
      </div> {" "}
      <br />
    </div>
  );
}

export default Food;
