function Navbar(props) {
  console.log(props);
  return (
    <h1>
      {" "}
      Nabar {props.name} {props.age}
    </h1>
  );
}

export default Navbar;
