function Food(props) {
  return (
    <div>
      <div className="cacsanphamchinh">
        <div><img src={props.img} alt="" /></div>
        <div className="tenthanhphan">{props.Name}</div> 
      </div> <br />
    </div>
  );
}

export default Food;