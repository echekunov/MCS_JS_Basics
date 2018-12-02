class Person {
    constructor(name) {
        this.name = name;
        this.happiness = 0;
    }

    hasCat() {
        return ++this.happiness;
    }

    hasRest() {
        return ++this.happiness;
    }
    
    hasMoney() {
        return ++this.happiness;
    }

    isSunny() {
        const getWeather = (city) => {
            if (!city) return this.happiness;
            
            const keyAPI = "6d18630e0c46af1233dc6b50b4e9da6b";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyAPI}`;
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.send();
            if (xhr.status != 200) {
                return this.happiness;
            }
            
            const data = JSON.parse(xhr.responseText);
            const temp = data.main.temp - 273;

            return (temp > 15 ? ++this.happiness : this.happiness); 
        }

        return getWeather('Москва');
    }
}

const form = document.forms[0];

const { name, cat, rest, money } = form.elements;

form.onsubmit = (event) => {
    event.preventDefault();
    let person = new Person(name.value);

    if (cat.value === "yes") person.hasCat();
    if (rest.value === "yes") person.hasRest();
    if (money.value === "yes") person.hasMoney();

    const happiness = person.isSunny();

    const personName = document.querySelector(".personName");
    const icon = document.querySelector(".icon");

    personName.innerHTML = person.name + ":";
    if (happiness === 4) {
        icon.innerHTML = "	&#128513;";
    } else if (happiness === 3 || happiness === 2) {
        icon.innerHTML = "&#128528;";
    } else {
        icon.innerHTML = "&#128542;";
    }
}