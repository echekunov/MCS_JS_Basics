const totalMoney = parseFloat(prompt('Сколько у вас с собой есть денег?'));
const applesCount = parseInt(prompt('Сколько вы купили яблок?'));
const breadsCount = parseInt(prompt('Сколько вы купили батонов хлеба?'));
const applesCost = applesCount * parseFloat(prompt('Сколько стоит одно яблоко?'));
const breadsCost = breadsCount * parseFloat(prompt('Сколько стоит один батон хлеба?'));
const isEnough = totalMoney >= applesCost + breadsCost;

document.body.innerHTML = isEnough;