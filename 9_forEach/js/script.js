console.log("You are at " + window.location);

let crypto = [
    {
      name : "Bitcoin",
      price: 1388.37
    },
    {
      name : "Ethereum",
      price: 716
    },
    {
      name : "Litecoin",
      price: 140
    }
];

const body = document.body;

const createElement = (tagName) => document.createElement(tagName);

for (currency of crypto) {
    const header = createElement("h1");
    header.innerHTML = currency.name;
    body.appendChild(header);
    const price = createElement("p");
    price.innerHTML = currency.price;
    body.appendChild(price);
    const block = createElement("div");
    block.style.height = "15px";
    block.style.width = currency.price/10 + "px";
    block.style.backgroundColor = '#' + Math.floor(currency.price);
    body.appendChild(block);
}