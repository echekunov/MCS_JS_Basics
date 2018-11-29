console.log("You are at " + window.location);

const form = document.forms[0];

const { angle, sinus } = form.elements;

form.onsubmit = (e) => {
    e.preventDefault();
    sinus.value = Math.sin(angle.value * Math.PI/180).toFixed(4);
};