{
    const updateResultText = (money, result, rate) => {
        const calculatedElement = document.querySelector(".js-calculated");
        calculatedElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyRate = document.querySelector(".js-rate");
        const currency = document.querySelector(".js-currency");

        const money = currency.value;
        const rate = currencyRate.value;

        result = money * rate;

        updateResultText(money, result, rate);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}