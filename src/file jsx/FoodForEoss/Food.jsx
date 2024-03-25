function Food(props) {
  return (
    <div>
      <div className="cacsanphamchinh">
        <div className="tenthanhphan">{props.Name}</div>
        <div>
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Food;
