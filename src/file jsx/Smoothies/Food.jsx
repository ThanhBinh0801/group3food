import { useNavigate } from "react-router-dom";
function Food(props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="cacsanphamchinh"
        onClick={() => navigate(`/Smooth/${props.id}`)}
      >
        <div>
          <img src={props.img} alt="Hinh Dai dien" />
        </div>
        <div className="tenthanhphan">{props.Name}</div>
      </div>{" "}
      <br />
    </>
  );
}   
export default Food;
