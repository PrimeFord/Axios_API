import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import QuoteCard from "./Components/QuoteCard";

function App() {
  const url = "https://animechan.vercel.app/api/quotes";
  const url2 = "https://type.fit/api/quotes";
  const [quotes, setQuote] = useState([]);
  const [one, setOne] = useState({ text: "Quote", author: "" });
  const rand = Math.floor(Math.random() * quotes.length);

  const fetchQuote = () => {
    axios
      .get(url2)
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => console.log(err));
    console.log(url);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetch = (e) => {
    e.preventDefault();
    fetchQuote();
    setOne(quotes[rand]);
    console.log("fetch");
    console.log(rand);
  };

  return (
    <div className="App">
      <div>
        {/* {quotes.map((quo) => ( */}
        <QuoteCard
          key={one.id}
          quote={one.text}
          character={one.author}
          // quote={quotes.quote}
          // character={quotes.character}
          // anime={quotes.anime}
          fetch={fetch}
        />
        {/* ))} */}
      </div>
    </div>
  );
}

export default App;
