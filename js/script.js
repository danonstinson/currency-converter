let formElement = document.querySelector(".js-form");
let currencyRate = document.querySelector(".js-rate");
let currency = document.querySelector(".js-currency");
let currencyValueCalculated = document.querySelector(".js-calculated");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let money = currency.value;
    let rate = currencyRate.value;

    calculatedValue = money * rate;

    currencyValueCalculated.innerText = calculatedValue.toFixed(2);

});
