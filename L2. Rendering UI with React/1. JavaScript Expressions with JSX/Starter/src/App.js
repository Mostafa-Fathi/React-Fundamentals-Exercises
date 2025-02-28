import logo from "./logo192.png";
import "./App.css";

const App = () => {
  const name = "React";

  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;

  return <div className="container">
    <img src={logo} alt="react logo"></img>
    <h1>{name}</h1>
    <h1>{aboutReact(facts)}</h1>
  </div>;
};

export default App;
