import React, { useState } from "react";

const ManualSelect = () => {
  const [select, setSelect] = useState("");
  console.log(select);
  return (
    <div>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="">--Select Option --</option>
        <option value="cod">COD</option>
        <option value="card">CARD</option>
        <option value="upi">UPI</option>
      </select>
    </div>
  );
};
export default ManualSelect;
