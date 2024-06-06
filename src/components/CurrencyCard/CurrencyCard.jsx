import React from 'react';
import "./CurrencyCard.css"

const CurrencyCard = ({ currencyCode, exchangeRates }) => {
    return (
        <section className="currency-card">
            <div className="currency-header">
                <h2>{currencyCode}</h2>
            </div>
            <div className="currency-details">
                <p>
                    Last: {exchangeRates.symbol} {exchangeRates.last}
                </p>
            </div>
        </section>
    );
  };
  
  export default CurrencyCard;
