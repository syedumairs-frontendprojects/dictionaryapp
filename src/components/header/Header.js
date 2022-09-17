import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./header.css";

const Header = ({ word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fffffff",
      },
      mode: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary App"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          {/* First text field */}
          <TextField
            className="search"
            label="Enter word"
            variant="outlined"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
