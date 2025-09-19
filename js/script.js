{
    const finalElement = document.querySelector(".js-final")
    const exchangeElement = document.querySelector(".js-exchange");
    const exchange = exchangeElement.value;

    const calculateAmmount = (exchange) => {

        const amountElement = document.querySelector(".js-amount");
        let amount = +amountElement.value;

        const ratePLNEUR = 0.24;
        const ratePLNUSD = 0.27;
        const rateEURPLN = 4.25;
        const rateUSDPLN = 3.65;
        const rateUSDEUR = 0.86;
        const rateEURUSD = 1.16;

        switch (exchange) {
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
        return final;
    };

    const currncySelection = (exchange) => {

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
        return exchange;
    };

    const init = () => {

        const form = document.querySelector(".js-form");

        form.addEventListener("input",calculateAmmount,currncySelection);
    };

    init();

    finalElement.innerHTML = `${final.toFixed(2)} ${exchange}`;
};
