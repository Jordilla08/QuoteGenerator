import { useState } from "react";
import "./App.css";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red},${green},${blue})`;
};
const transition = "all 0.5s ease-in-out";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  return (
    <div
      className="container"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: randomColor, transition }}
        >
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          <h2 id="text">{quote.quote}</h2>
          <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          <h4 id="author" style={{ color: randomColor, transition }}>
            {" "}
            {quote.author}
          </h4>
        </div>
        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}
            style={{ backgroundColor: "#1da1f2", marginRight: "10px" }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: randomColor, transition }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
