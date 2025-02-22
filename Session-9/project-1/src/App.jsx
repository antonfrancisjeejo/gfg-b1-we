import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  const getAdvice = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
      setLoading(false);
    } catch (error) {
      alert("Something bad occurred. Please try again");
      setAdvice("None");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="app">
      <Card advice={advice} loading={loading} getAdvice={getAdvice} />
    </div>
  );
};

export default App;
