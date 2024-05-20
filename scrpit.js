const ApiKey = "554a9c86454a7f36a936e323ac4a53c1";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".Weather-icon");


async function  CheckWeather(city) {

 const Response = await fetch(ApiUrl+ city + `&appid=${ApiKey}` + "&units=metric");
 if (Response.status ==404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".Weather").style.display = "none";
    document.querySelector(".card").style.display = "block";
    
 }
 else{
    
 var data = await Response.json();
 console.log(data);
 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
 document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
 document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
 if(data.weather[0].main == "Clouds"){
    WeatherIcon.src = "images/clouds.png"
 }
 else if(data.weather[0].main == "Clear"){
    WeatherIcon.src = "images/clear.png"

 }
 else if(data.weather[0].main == "Rain"){
    WeatherIcon.src = "images/rain.png"

 }
 else if(data.weather[0].main == "Drizzle"){
    WeatherIcon.src = "images/drizzle.png"

 }
 else if(data.weather[0].main == "Mist"){
    WeatherIcon.src = "images/mist.png"

 }
 document.querySelector(".Weather").style.display = "block" 
 document.querySelector(".error").style.display = "none";
 document.querySelector(".card").style.display = "block";

 }



}

searchBtn.addEventListener("click", () =>{
    CheckWeather(searchBox.value);
})


