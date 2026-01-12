let amtinp = document.querySelector(".content input[type='number']");
let fromSelect = document.getElementById("fromCurrency");
let toSelect = document.getElementById("toCurrency");
let btn = document.querySelector("button");
let convertinp = document.querySelector(".converted input");

const API_KEY = "cur_live_9Q5RIYIaNqPt4jRnsKOv7ZgOdlpDIa4jtTdUWCtq";
const apiurl = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`;

fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.data); 

        currencies.forEach(currency => {
            let option1 = document.createElement("option");
            let option2 = document.createElement("option");

            option1.value = option2.value = currency;
            option1.textContent = option2.textContent = currency;

            fromSelect.appendChild(option1);
            toSelect.appendChild(option2);
        });

        fromSelect.value = "USD";
        toSelect.value = "INR";
    })
    .catch(err => {
        console.error("Currency load error:", err);
    });

btn.addEventListener("click", () => {
    const amt = parseFloat(amtinp.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    if (isNaN(amt)) {
        alert("Please enter a valid amount");
        return;
    }

    fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            const rates = data.data;

            const fromRate = rates[fromCurrency].value;
            const toRate = rates[toCurrency].value;

            const convertedAmount = amt * (toRate / fromRate);
            convertinp.value = convertedAmount.toFixed(2);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error fetching conversion data");
        });
});