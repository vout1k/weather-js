document.getElementById("getWeather").addEventListener("click", function() {
   const city = document.getElementById("city").value;
   if (city) { 
      fetchWeather(city)
   } else {
      alert("Please input the city")
   }
});


function fetchWeather(city) {
   const API_KEY = "9bc248772d9a7567e64956f85844c721";
   const url = 
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

try {
   fetch(url)
      .then((res) => res.json())
      .then((data) => {
         console.log (data, "data");
         if (data.cod === 200) {
            const weatherInfo = `
            <h2>${data.name} </h2>
  
            <p> Temperature °C: ${data.main.temp}</p>

            <p> Weather condition: ${data.weather[0].description} </p>

            <p> Wind speed: ${data.wind.speed} </p>

            
            
            
            `;
            document.getElementById("weatherResult").innerHTML = weatherInfo;
         } else {
            document.getElementById("weatherResult").innerHTML = `<p> City is not found </p>`;
         }
      });
} catch (error) {
   document.getElementById("weatherResult").innerHTML = `<p>Something went wrong</p>`;
   }
}

















