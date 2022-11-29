import React from "react";

export default function Price({ prices, currencyLabel }) {
    const price = prices.find((price) => price.currency.label === currencyLabel);
    return (
      <div key={price.currency.label}>
        {price.currency.label}
        {price.currency.symbol} {price.amount}
      </div>
    );
  }

  Price.propTypes = {
    prices: Proptypes.arrayOf(Proptypes.object).isRequired,
    currencyLabel: Proptypes.string.isRequired,
    };