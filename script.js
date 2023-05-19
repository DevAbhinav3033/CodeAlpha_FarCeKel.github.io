const celsius= document.querySelector("#celsius");
const fahrenheit= document.querySelector("#fahrenheit");
const kelvin= document.querySelector("#kelvin");

window.addEventListener("load", () => celsius.focus());

celsius.addEventListener("input" , () =>{
    fahrenheit.value=((celsius.value * 9)/ 5 + 32).toFixed(2);
    kelvin.value=(celsius.value*1 + 273);
    if (!celsius.value) {
        kelvin.value="";
        fahrenheit.value="";
}
});

fahrenheit.addEventListener("input" , () =>{
    celsius.value=(((fahrenheit.value - 32)*5)/9).toFixed(2);
    kelvin.value=(celsius.value*1 + 273);
    if (!fahrenheit.value) {
        kelvin.value="";
        celsius.value="";
}
});

kelvin.addEventListener("input" , () =>{
    celsius.value=(kelvin.value-273).toFixed(2);
    fahrenheit.value=((celsius.value * 9)/ 5 + 32).toFixed(2);
    if (!kelvin.value) {
        fahrenheit.value="";
        celsius.value="";
}
});