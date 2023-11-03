const Planet = (props) => {
  return <h1>{props.isGasPlanet && props.name}</h1>;
};
export default Planet;