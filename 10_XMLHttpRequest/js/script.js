const form = document.forms[0];

const { city, temperature } = form.elements;
const keyAPI = "6d18630e0c46af1233dc6b50b4e9da6b";
form.onsubmit = (e) => {
    e.preventDefault();
    const cityValue = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${keyAPI}`;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(`Error code: ${xhr.status} ${xhr.statusText}`);
    } else {
        const data = JSON.parse(xhr.responseText);
        const temp = data.main.temp;

        temperature.value = (temp - 273).toFixed(1);
    }
};