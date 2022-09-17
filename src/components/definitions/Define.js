import React from "react";

const Define = ({ word, language, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subtitle">Start by searching for a word</span>
      ) : (
        "Something"
      )}
    </div>
  );
};

export default Define;
