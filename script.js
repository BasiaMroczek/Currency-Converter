{

  const calculateResult = (amount, currency) => {
    const rateNOK = 0.4344;
    const rateEUR = 4.6759;
    const rateGBP = 5.3321;

    switch (currency) {
      case "NOK":
        return amount / rateNOK;

      case "EUR":
        return amount / rateEUR;

      case "GBP":
        return amount / rateGBP;

    }
  };

  const resultText = (amount, currency, result) => {

    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    resultText(amount, currency, result);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();

}