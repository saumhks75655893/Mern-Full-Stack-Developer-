import React, { useState } from "react";

const DependentSelect = () => {
  const data = {
    India: ["New Delhi", "Mumbai", "Kolkata", "Lucknow"],
    Japan: ["Tokyoo", "Kyoto", "Osaka"],
    USA: ["New York", "Los Angelse", "Chicago"],
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectCity, setSelectedCity] = useState("");
  console.log(selectedCountry, selectCity);
  return (
    <>
      <select
        value={selectedCountry}
        onChange={(e) => {
          (setSelectedCountry(e.target.value), setSelectedCity(""));
        }}
      >
        <option value=""> --Select Country</option>
        {Object.keys(data).map((elem, index) => {
          return (
            <option key={index} value={elem}>
              {elem}
            </option>
          );
        })}
      </select>
      {selectedCountry && (
        <select
          value={selectCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value=""> --Select City--</option>
          {data[selectedCountry].map((elem, index) => {
            return (
              <option key={index} value={elem}>
                {elem}
              </option>
            );
          })}
        </select>
      )}

      <h1>Country : {selectedCountry}</h1>
      <h1>City : {selectCity}</h1>
    </>
  );
};

export default DependentSelect;
