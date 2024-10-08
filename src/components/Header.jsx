import logoImg from "../assets/logo.png";

import { quotes } from "../data.js";

function generateRandomQuotes(quotes) {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

const randomQuote = generateRandomQuotes(quotes);

export default function Header() {
  const date = new Date().toLocaleDateString("de-DE");

  return (
    <header>
      <img src={logoImg} alt="a hand-drawing of burning elmo" />
      <h1>{randomQuote}</h1>
      <h1>Now Get Back To Work!</h1>
      <h2>Good morning, Begana! Today is : {date}</h2>
    </header>
  );
}
