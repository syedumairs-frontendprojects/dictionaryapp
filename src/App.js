import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Define from "./components/definitions/Define";

function App() {
  // Use state hooks
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [language, setLanguage] = useState("en");

  // Get data from the API
  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      );
      setMeaning(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(meaning);
  useEffect(() => {
    dictionaryAPI();
  // eslint-disable-next-line
  }, [word, language]);

  return (
    <div className="App">
      <Container maxWidth="md" className="container">
        <Header
          language={language}
          setLanguage={setLanguage}
          word={word}
          setWord={setWord}
        />
        {meaning && (
          <Define word={word} meaning={meaning} language={language} />
        )}
      </Container>
    </div>
  );
}

export default App;
