{

const pln = document.querySelector(".js-pln");
const eth = document.querySelector(".js-eth");
const ethc = document.querySelector(".js-ethc");
const btc = document.querySelector(".js-btc");
const form = document.querySelector(".form");

const onConvert =(event) => {
    event.preventDefault();
    const ethResult = pln.value / 8643.69;
    const ethcResult = pln.value / 130.23;
    const btcResult = pln.value / 212319.75;
    eth.value = ethResult.toFixed(10);
    ethc.value = ethcResult.toFixed(10);
    btc.value = btcResult.toFixed(10);
}

form.addEventListener("submit", onConvert);

onConvert();
welcome();
}