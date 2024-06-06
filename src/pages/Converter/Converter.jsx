import React, { useState } from "react";
import axios from "axios";
import Form from "../../components/Form/Form";

const Converter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);

  // given more time would validate the input better to ignore the behaviour of pressing convert with no given input instead of converting 0
   // would have also extracted out the dropdowns into a reusable component. At some point would have mapped over all the currencies available on the API instead of a static few

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const handleConversion = () => {
    axios
      .get(
        `https://blockchain.info/tobtc?currency=${selectedCurrency}&value=${inputValue}`
      )
      .then((response) => {
        setConvertedAmount(response.data);
      })
      .catch((err) => {
        //TODO: error handling
        console.log(err)
        setConvertedAmount(null);
      });
  };

  return (
    <>
      <Form type="number" 
                name="Conversion Input" 
                placeholder="Amount to convert" 
                onChange={handleInputChange}
      />
      <div className="converter-text">
      <select onChange={handleCurrencyChange}>
        <option value="USD">{"USD"}</option>
        <option value="GBP">{"GBP"}</option>
        <option value="CAD">{"CAD"}</option>
        <option value="EUR">{"EUR"}</option>
        <option value="AUD">{"AUD"}</option>
        <option value="JPY">{"JPY"}</option>
      </select>
      <button onClick={handleConversion}>Convert</button>
      <p>{convertedAmount} BTC</p>
      </div>
    </>
  );
};

export default Converter;
