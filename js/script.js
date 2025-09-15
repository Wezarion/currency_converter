{
    const formElement = document.querySelector(".js-form")
    const finalElement = document.querySelector(".js-final")

formElement.addEventListener("input", () => { 

    const exchangeElement = document.querySelector(".js-exchange");
    const amountElement = document.querySelector(".js-amount");
    const amount = amountElement.value;
    const exchange = exchangeElement.value;

    const calculateAmmount = (amount, exchange) => {
    const ratePLNEUR = 0.24;
    const ratePLNUSD = 0.27;
    const rateEURPLN = 4.25;
    const rateUSDPLN = 3.65;
    const rateUSDEUR = 0.86;
    const rateEURUSD = 1.16;


    switch (amount, exchange) {
        case "EUR-PLN":
            return amount * rateEURPLN
        case "PLN-EUR":
            return amount * ratePLNEUR
        case "PLN-USD":
            return amount * ratePLNUSD
        case "USD-PLN":
            return amount * rateUSDPLN
        case "EUR-USD":
            return amount * rateEURUSD
        case "USD-EUR":
            return amount * rateUSDEUR
    }
    }
    const currncySelection = (exchangeElement) => {

    switch (exchange) {
        case "EUR-PLN":
            return "PLN"
        case "PLN-EUR":
            return "EUR"
        case "PLN-USD":
            return "USD"
        case "USD-PLN":
            return "PLN"
        case "EUR-USD":
            return "USD"
        case "USD-EUR":
            return "EUR"
    }
    };
        finalElement.innerHTML = ${amount.toFixed(2)} ${exchange}
});

}