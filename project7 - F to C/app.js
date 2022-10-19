function toCelsius()
{
    let fahrenheit = prompt("Fahrenheit:")
    let value_C = (fahrenheit - 32) * 5 / 9
    document.getElementById("answer_section_FtoC").innerHTML = value_C.toFixed(2) + " °C"
}
toCelsius()

function toFahrenheit()
{
    let celsius = prompt("Celsius")
    let value_F = (celsius * 9 / 5) + 32
    document.getElementById("answer_section_CtoF").innerHTML = value_F.toFixed(2)
}
toFahrenheit()