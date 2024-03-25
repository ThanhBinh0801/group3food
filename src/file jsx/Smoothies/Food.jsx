import { useNavigate } from "react-router-dom";
function Food(props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="cacsanphamchinh"
        onClick={() => navigate(`/smooth/${props.id}`)}
      >
        <div className="tenthanhphan">{props.Name}</div>
        <div>
          <img src={props.img} alt="Hinh Dai dien" />
        </div>
      </div>{" "}
      <br />
    </>
  );
}
export default Food;
