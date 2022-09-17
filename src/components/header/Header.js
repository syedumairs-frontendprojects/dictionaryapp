import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "./header.css";
import languages from "../../data/languages";

const Header = ({ language, setLanguage, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fffffff",
      },
      mode: "dark",
    },
  });

  const handleChange = (language) => {};

  return (
    <div className="header">
      <span className="title">{word ? word : "Word finder"}</span>
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
          {/* Second text field */}

          <Select
            variant="outlined"
            className="select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((language) => (
              <MenuItem key={language.label} value={language.label}>
                {language.value}
              </MenuItem>
            ))}
          </Select>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
