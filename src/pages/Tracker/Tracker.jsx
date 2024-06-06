import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";
import "./Tracker.css";

const Tracker = () => {
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrencies = () => {
    // would implement an auto-refresh with more time using setInterval, had thought about storing the value of the last value and comparing it to the refreshed one, then showing an up or down red/green chevron if the rate is better or worse but didn't have time
    // would also implement a manual refresh button to trigger the function again

    axios
      .get("https://blockchain.info/ticker")
      .then((response) => {
        setRates(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // handle errors here with an error message to the user
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
