//const apiKey = "60a440d89263b43b0c735288b5181bda";

var getCityWeather = function() {
    console.log("function was called");

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lang=en&units=imperial&q=columbus" + "&appid=60a440d89263b43b0c735288b5181bda";
    
    fetch(apiUrl)
    console.log(data);
    
};

getCityWeather();
