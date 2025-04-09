document.addEventListener('DOMContentLoaded', () =>{
    function celsiusToFahrenheit(celsius){
        return (celsius * 9 / 5) + 32;
    }
    const celsiusTemp = prompt('User, please insert Celsius temperature for conversion:');
    document.getElementById('temperature').textContent += celsiusToFahrenheit(celsiusTemp);
});