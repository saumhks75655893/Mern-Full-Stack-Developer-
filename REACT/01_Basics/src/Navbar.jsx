function Navbar({ data }) {
  console.log(data);
  return (
    <h1>
      <Button info={data} />
    </h1>
  );
}

function Button({ info }) {
  console.log(info);
  return <button>{info}</button>;
}

export default Navbar;
