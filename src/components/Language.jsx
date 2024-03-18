import React from "react";
import Bar from "./Bar";

function Language() {
  const languages = ["ภาษาไทย - เจ้าของภาษา", "ภาษาอังกฤษ - ระดับกลาง"];
  return (
    <div className="mt-3">
      <h2 style={{ color: "navy" }}>ภาษา</h2>
      <Bar />
      {languages.map((language, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          {language}
        </li>
      ))}
    </div>
  );
}

export default Language;
