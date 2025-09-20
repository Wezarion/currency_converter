{
    const calculateAmmount = (amount, exchange) => {

        const ratePLNEUR = 0.24;
        const ratePLNUSD = 0.27;
        const rateEURPLN = 4.25;
        const rateUSDPLN = 3.65;
        const rateUSDEUR = 0.86;
        const rateEURUSD = 1.16;

        switch (amount, exchange) {
            case "EUR-PLN":
                return amount * rateEURPLN;
            case "PLN-EUR":
                return amount * ratePLNEUR;
            case "PLN-USD":
                return amount * ratePLNUSD;
            case "USD-PLN":
                return amount * rateUSDPLN;
            case "EUR-USD":
                return amount * rateEURUSD;
            case "USD-EUR":
                return amount * rateUSDEUR;
        }   
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
    };

    const primaryCurrency = (exchange) => {

        switch (exchange) {
            case "EUR-PLN":
                return "EUR"
            case "PLN-EUR":
                return "PLN"
            case "PLN-USD":
                return "PLN"
            case "USD-PLN":
                return "USD"
            case "EUR-USD":
                return "EUR"
            case "USD-EUR":
                return "USD"
        }
    };

    const primaryText =(label) => {
        const labelElement = document.querySelector(".js-labelText");
        labelElement.innerHTML = `Podaj kwote ${label}:`;

    }

    const finalText = (final, currency) => {
        const finalElement = document.querySelector(".js-final");
        finalElement.innerHTML = `${final.toFixed(2)} ${currency}`;
    }

    const onFormInput = () => {
            const amountElement = document.querySelector(".js-amount");
            const exchangeElement = document.querySelector(".js-exchange");
            
        
            const exchange = exchangeElement.value;
            const amount = +amountElement.value;

            const label = primaryCurrency(exchange)
            const final = calculateAmmount(amount,exchange);
            const currency = currncySelection(exchange);

            primaryText(label);
            finalText(final, currency);
    }

    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("input", onFormInput);
        
    };

    init();
    
};
