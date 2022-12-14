import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Define from "./components/definitions/Define";
import Footer from "./components/footer/Footer";

function App() {
  // Use state hooks
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);

  // Get data from the API
  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeaning(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dictionaryAPI();
    // eslint-disable-next-line
  }, [word]);

  return (
    <div className="App">
      <Container maxWidth="md" className="container">
        <Header word={word} setWord={setWord} />
        {meaning && <Define word={word} meaning={meaning} />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
