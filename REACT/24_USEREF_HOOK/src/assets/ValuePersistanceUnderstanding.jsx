import React from "react";

const ValuePersistanceUnderstanding = () => {
  const [count, setCount] = useState(0); // value persist, re-render allowed

  const countRef = useRef(0); // value persist, re-render not allowed

  let countVar = 0; // value not persist, re-render not allowed

  function Counter() {
    setCount(count + 1);
    countRef.current += 1;
    console.log(countRef.current);
    // countVar += 1;
    // console.log(countVar);
  }

  useEffect(() => {
    console.log("rerender hua hai");
  });
  return (
    <>
      <h1>{count}</h1>
      <h1>{count}</h1>
      <h1>{count}</h1>
      <button onClick={Counter}>Submit </button>

      {/* <BasicSyntac /> */}
    </>
  );
};

export default ValuePersistanceUnderstanding;
