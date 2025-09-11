let formElement = document.querySelector(".js-form")
let exchangeElement = document.querySelector(".js-exchange")
let amountElement = document.querySelector(".js-amount")
let finalElement = document.querySelector(".js-final")



formElement.addEventListener("input", () => {

    let exchange = exchangeElement.value;
    let amount = amountElement.value;

    let final = exchange * amount;

    finalElement.innerText = final.toFixed(2)
})