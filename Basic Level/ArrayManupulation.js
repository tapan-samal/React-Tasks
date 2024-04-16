import React, { useState } from "react";

const ArrayCrud = () => {
  const languages = ["JavaScript", "Node", "MongoDB"];
  const [language, setLanguage] = useState(languages);

  const addData = () => setLanguage([...language, "Phython"]);

  const removeData = () =>
    setLanguage(language.filter((item) => item !== "Phython"));

  const updateData = () =>
    setLanguage(
      language.map((lang) =>
        lang === "MongoDB" ? "MySQL" : lang === "MySQL" ? "MongoDB" : lang
      )
    );

  return (
    <>
      <h2>Array Manupulation:</h2>
      {language.map((lang) => (
        <div key={Math.random()}>{lang}</div>
      ))}
      <button onClick={addData}>Add</button>{" "}
      <button onClick={removeData}>Remove</button>{" "}
      <button onClick={updateData}>Update</button>
    </>
  );
};

export default ArrayCrud;
