import { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";

// // COMPONENT
// FUNCTIONAL COMPONENT
// function Cpm(props) {
//   return (
//     <div className="cpm">
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//     </div>
//   );
// }

// // CLASS COMPONENT
// class Cpm extends Component {
//   render() {
//     return (
//       <div className="cpm">
//         <h1>{this.props.name}</h1>
//         <h1>{this.props.age}</h1>
//       </div>
//     );
//   }
// }
// // FUNCTION
// function cpm(name, age) {
//   return (
//     <div className="cpm">
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   );
// }

function App() {
  return (
    <>
      {/* <h1>COMPONENT LEARNING</h1>}
      {/* component  */}
      {/* <Cpm name="Himanshu KUmar" age={21} />  */}

      {/* function */}
      {/* {cpm("himanshu", 21)}
      {cpm("himanshu", 21)}
      {cpm("himanshu", 21)} */}

      <div className="cardDiv">
        <Cards
          holder="Himanshu Kumar"
          des="Hope! You find it well, and You are invited in the wedding. And be their for the moral support."
        />
        <Cards
          holder="Sundram Kumar"
          des="Hope! You find it well, and You are invited in the wedding. And be their for the moral support."
        />
        <Cards
          holder="Meera Rajput"
          des="Hope! You find it well, and You are invited in the wedding. And be their for the moral support."
        />
        <Cards
          holder="Krishna Abhishek"
          des="Hope! You find it well, and You are invited in the wedding. And be their for the moral support."
        />
        <Cards
          holder="Ram Manohar"
          des="Hope! You find it well, and You are invited in the wedding. And be their for the moral support."
        />
        <Cards
          holder="Radha Rani"
          des="Hope! You find it well, and You are invited in the wedding. And be their for the moral support."
        />
      </div>
    </>
  );
}

export default App;
