import React from "react";
import { useState } from "react";

const BasicUnderStandinProject = () => {
  const [selectedMode, setSelectedMode] = useState({
    id: "UPI",
    info: "Instant transfer via upi apps",
  });
  const payments = [
    { id: "UPI", info: "Instant transfer via upi apps" },
    { id: "Card", info: "Pay using debit or credit card" },
    { id: "COD", info: "Pay when the item arrives" },
  ];
  return (
    <>
      <div className="flex gap-5 text-3xl text-[aqua] select-none font-bold">
        {payments.map((item) => {
          return (
            <label htmlFor={item.id} key={item.id}>
              <input
                type="radio"
                name="payments"
                id={item.id}
                checked={selectedMode.id === item.id}
                onChange={(e) => setSelectedMode(item)}
              />
              {item.id}
            </label>
          );
        })}
      </div>

      <div>
        <h1>
          Mode of Payment :{" "}
          <span className="text-black"> {selectedMode.id}</span>
        </h1>
        <h1>
          Info: <span className="text-black"> {selectedMode.info}</span>
        </h1>
      </div>
    </>
  );
};

export default BasicUnderStandinProject;
