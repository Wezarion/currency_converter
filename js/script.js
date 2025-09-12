let formElement = document.querySelector(".js-form")
let exchangeElement = document.querySelector(".js-exchange")
let amountElement = document.querySelector(".js-amount")
let finalElement = document.querySelector(".js-final")

const ratePLNEUR = 0.24;
const ratePLNUSD = 0.27;
const rateEURPLN = 4.25;
const rateUSDPLN = 3.65;
const rateUSDEUR = 0.86;
const rateEURUSD = 1.16;

formElement.addEventListener("input", () => {

    let exchange = exchangeElement.value;
    let amount = amountElement.value;

    let final = exchange * amount;

    finalElement.innerText = final.toFixed(2)
})