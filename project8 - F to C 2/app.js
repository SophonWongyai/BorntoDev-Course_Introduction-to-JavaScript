function toCelsius(fahrenheit)
{
    let value_C = (fahrenheit - 32) * 5 / 9
    return value_C.toFixed(2) + " °C"
}
function toFahrenheit(celsius)
{
    let value_F = (celsius * 9 / 5) + 32
    return value_F.toFixed(2) + " °F"
}
function display(elementID, value)
{
    document.getElementById(elementID).innerHTML = "<b>" + value + "</b>"
}

alert(toCelsius(32))
display("toCelsius", toCelsius(150))

alert(toFahrenheit(30))
display("toFahrenheit", toFahrenheit(30))