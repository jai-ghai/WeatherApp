const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const wheather = document.querySelector(".wheather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

const Api_key = '7009d199362cd8e2d39cc87c02e36ca9';

btn.addEventListener("click",()=>{
    let city = input.value;
    getWheather(city);
})

function getWheather(city){
    console.log(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'7009d199362cd8e2d39cc87c02e36ca9'}&units=metric`)
    .then(response => response.json())
    .then(data => {console.log(data)
    const iconCode = data.weather[0].icon;
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png"
    alt="Wheather-icon">`

    const cityName = data.name;
    const countryName = data.sys.country;
    wheather.innerHTML = `${cityName}, ${countryName}`;
  

    const citytemperature = data.main.temp;
    temperature.innerHTML = `${citytemperature} C`;

    const wheatherdescription = data.weather[0].description;
    description.innerHTML = `${wheatherdescription}`;
    
})
}










// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}