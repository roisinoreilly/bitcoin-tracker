import React from 'react';

const CurrencyCard = ({ currencyCode, exchangeRates }) => {
    return (
        <div>
            <div>
                <h2>{currencyCode}</h2>
            </div>
            <div>
                <p>
                    Last: {exchangeRates.symbol} {exchangeRates.last}
                </p>
            </div>
        </div>
    );
  };
  
  export default CurrencyCard;
