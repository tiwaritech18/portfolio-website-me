
import { useEffect, useState } from "react";
import "./Loader.css";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "नमस्ते",
  "こんにちは",
  "Hallo",
  "Ciao",
];

const Loader = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) =>
        prev < greetings.length - 1 ? prev + 1 : prev
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-screen">
      <div className="loader-content">
        <div className="greeting-wrapper">
          <span key={currentGreeting} className="greeting">
            {greetings[currentGreeting]}
          </span>
        </div>

        <div className="loader-line">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

