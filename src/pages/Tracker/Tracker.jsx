import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";
import "./Tracker.css";

const Tracker = () => {
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrencies = () => {
    axios
      .get("https://blockchain.info/ticker")
      .then((response) => {
        setRates(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //TODO: utils function to format currencies object?
  const currencies = Object.keys(rates);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="currency-grid">
          {currencies.map((currency) => (
            <CurrencyCard
              key={currency}
              currencyCode={currency}
              exchangeRates={rates[currency]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tracker;
