// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let newTemp = (celsius * 9 / 5) + 32;
    return newTemp;
}
let newValue = celsiusToFahrenheit(30);

console.log('New temperature', newValue)


// Convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
    let newTemp = celsius + 273.15
    return newTemp;
}
let convertedValue = celsiusToKelvin(30)

console.log('New Temperature', convertedValue)


// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let newTemp = (fahrenheit - 32) * 5 / 9
    return newTemp;
}
let newFahrenheit = fahrenheitToCelsius(230)

console.log('New Temperature', newFahrenheit)


// Convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    let newTemp = (fahrenheit - 32) * 5 / 9 + 273.15;
    return newTemp;
}
let newKelvin = fahrenheitToKelvin(230)

console.log('New Temperature', newKelvin)


// Convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    let newTemp = kelvin - 273.15
    return newTemp;
}
let newCelsius = kelvinToCelsius(300)

console.log('New Temperature', newCelsius)

// Convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    let newTemp = (kelvin - 273.15) * 9 / 5 + 32
    return newTemp;
}
let newNumber = kelvinToFahrenheit(300)

console.log('New Temperature', newNumber)