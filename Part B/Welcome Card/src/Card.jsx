function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-image"
          alt="Ann Bautista Profile"
          src={props.logo}
        ></img>
      </div>
      <div className="details-container">
        <h2 className="card-title">Welcome, {props.name}!</h2>
        <p className="card-description">{props.details}</p>
      </div>
    </div>
  );
}
export default Card;
