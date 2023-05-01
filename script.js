// https://api.openweathermap.org/data/2.5/weather?q=gwalior&appid=ebd122708bd2b22abd6750255f893236
let country = document.querySelector(".country");

let temprature = document.querySelector(".temp_value");

let humidity = document.querySelector(".humidity_value");

let wind = document.querySelector(".wind_value");


let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apikey = "ebd122708bd2b22abd6750255f893236";

const search_btn = document.querySelector("#search-btn");
const search_box = document.querySelector("#search-box");
async function showWeather(city) {

    const response = await fetch(url + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);
    country.innerHTML = data.name;
    //setting temperature 
    temprature.innerHTML =data.main.temp + " \u00B0" + "C";
    document.getElementById("max-temp").innerHTML = data.main.temp_max;
    document.getElementById("min-temp").innerHTML = data.main.temp_min;
    //humidity 
    humidity.innerHTML = data.main.humidity + "%";
    document.getElementById("feels-like").innerHTML = data.main.feels_like;
    document.getElementById("pressure").innerHTML = data.main.pressure;
    //wind speed
    wind.innerHTML = data.wind.speed + "Km/hr";
    document.getElementById("sunrise").innerHTML = data.sys.sunrise;
    document.getElementById("sunset").innerHTML = data.sys.sunset;


}

search_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    showWeather(search_box.value);
    console.log("Searched place is : "+ search_box.value)
})
console.log(typeof(search_box.value))
if(search_box.value===""){
    showWeather("Indore");
    console.log("No item in serach ")
}



