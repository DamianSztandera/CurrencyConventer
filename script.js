let pln = document.querySelector(".js-pln");
let eth = document.querySelector(".js-eth");
let ethc = document.querySelector(".js-ethc");
let btc = document.querySelector(".js-btc");
let form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let ethResult = pln.value / 8643.69;
    let ethcResult = pln.value / 130.23;
    let btcResult = pln.value / 212319.75;
    eth.value = ethResult.toFixed(10);
    ethc.value = ethcResult.toFixed(10);
    btc.value = btcResult.toFixed(10);
});
