import "./App.css";
import Header, { Card } from "./Header";
import logo from "./assets/react.svg";

function App() {
  return (
    <>
      <Header />
      <Card />
      <img src={logo} alt="" />
    </>
  );
}

export default App;
