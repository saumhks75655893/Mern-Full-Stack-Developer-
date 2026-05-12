import React, { useState } from "react";

const DynamicSelect = () => {
  const [language, setLanguage] = useState("js");
  console.log(language);
  const languages = [
    "html",
    "css",
    "js",
    "c",
    "cpp",
    "python",
    "ruby",
    "java",
    "c#",
    "php",
  ];
  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">--Select Language You Know--</option>
        {languages.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DynamicSelect;
