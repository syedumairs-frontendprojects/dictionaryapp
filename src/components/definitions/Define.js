import "./define.css";
const Define = ({ word, language, meaning, LightTheme }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Define;
