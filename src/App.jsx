import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import QuoteCard from "./Components/QuoteCard";

function App() {
  const url = "https://animechan.vercel.app/api/quotes";
  const [count, setCount] = useState(0);
  const [quotes, setQuote] = useState([]);

  const fetch = () => {
    axios
      .get("https://animechan.vercel.app/api/quotes")
      .then((res) => {
        setQuote(res.data[rand]);
      })
      .catch((err) => console.log(err));
  };
  const rand = () => {
    Math.floor(Math.random() * quotes.length);
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="App">
      <div>
        {/* {quotes.map((quo) => ( */}
        <QuoteCard
          key={quotes.id}
          quote={quotes.quote}
          character={quotes.character}
          anime={quotes.anime}
        />
        {/* ))} */}
      </div>
    </div>
  );
}

export default App;
