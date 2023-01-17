let currencyHeldElement = document.querySelector(".js-currencyHeld");
let amountHeldElement = document.querySelector(".js-amountHeld");
let currencyWantedElement = document.querySelector(".js-currencyWanted");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amountHeld = amountHeldElement.value;
  let currencyHeld = currencyHeldElement.value;
  let currencyWanted = currencyWantedElement.value;

  let currencyHeldRate;
  switch (currencyHeld) {
    case "PLN":
      currencyHeldRate = 1;
      break;
    case "NOK":
      currencyHeldRate = 0.434;
      break;
    case "EUR":
      currencyHeldRate = 4.675;
      break;
  }

  let currencyWantedRate;
  switch (currencyWanted) {
    case "PLN":
      currencyWantedRate = 1;
      break;
    case "NOK":
      currencyWantedRate = 0.440;
      break;
    case "EUR":
      currencyWantedRate = 4.705;
      break;
  }

  if (currencyHeld == "PLN") {
    result = amountHeld / currencyWantedRate;
  } else if (
    currencyHeld == "NOK" &&
    (currencyWanted == "NOK" || currencyWanted == "PLN")
  ) {
    if (currencyWanted == "NOK") {
      result = amountHeld * 1;
    } else if (currencyWanted == "PLN") {
      result = amountHeld * currencyHeldRate;
    }
  } else if (
    currencyHeld == "EUR" &&
    (currencyWanted == "EUR" || currencyWanted == "PLN")
  ) {
    if (currencyWanted == "EUR") {
      result = amountHeld * 1;
    } else if (currencyWanted == "PLN") {
      result = amountHeld * currencyHeldRate;
    }
    } else {
    result = (amountHeld * currencyHeldRate) / currencyWantedRate;
  }
  
  resultElement.innerText = `${result.toFixed(2)} ${currencyWanted}`;
});


