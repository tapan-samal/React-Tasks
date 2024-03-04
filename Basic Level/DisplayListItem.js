import React from "react";

const DisplayListItem = () => {
  const languages = ["HTML", "CSS", "JavaScript", "React", "Next"];
  return (
    <>
      <h2>Display list items.</h2>
      <ul>
        {languages.map((lang, index) => {
          return <li key={index}>{lang}</li>; 
         })}
      </ul>
    </>
  );
};

export default DisplayListItem;