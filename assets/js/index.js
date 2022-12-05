let lat = '',
lon = '',
UserLat = '',
UserLon = '';

let name = null,
    temp = null,
    icon = null,
    desc = null,
    humidity = null,
    wind = null;
const successCallback = (position) => {
    UserLat = position.coords.latitude;
    UserLon = position.coords.longitude;
    fetch(`https://lukebottle.pythonanywhere.com/location/long=${UserLat}&lat=${UserLon}`)
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        let ResponseName = data.name,
        ResponseTemp = data.main.temp,
        ResponseIcon = data.weather[0].icon,
        ResponseDesc = data.weather[0].description,
        ResponseHumidity = data.main.humidity,
        ResponseWind = data.wind.speed;

        name = document.querySelectorAll('.js-city'),
        temp = document.querySelectorAll('.js-temp');
        icon = document.querySelectorAll('.js-icon');
        desc = document.querySelectorAll('.js-desc');
        humidity = document.querySelectorAll('.js-humidity');
        wind = document.querySelectorAll('.js-wind');
        name[0].textContent = ResponseName;
        temp[0].textContent = `${ResponseTemp}°C`;
        icon[0].src = `https://openweathermap.org/img/wn/${ResponseIcon}.png`;
        desc[0].innerHTML = `${ResponseDesc}`;
        humidity[0].textContent = `humidity: ${ResponseHumidity}`;
        wind[0].textContent = `wind: ${ResponseWind}`;
      });
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

let fontColor = window.localStorage.getItem('font-color');

let apiUrl = `https://lukebottle.pythonanywhere.com/`;

// let apiUrl = `http://127.0.0.1:5000`;


 // Defining async function
 async function getApi(url) {

 // Storing response
 const response = await fetch(url);

 // Storing data in form of JSON
 var data = await response.json();
 show(data);
}
// Calling that async function
getApi(apiUrl);

function show(data){
userName = data.response.players[0].personaname,
userState = data.response.players[0].personastate;

userNameText = document.querySelectorAll('.js-userName');
userStateText = document.querySelectorAll('.js-userState');
loadingBar = document.querySelectorAll('.js-loadBar');
if (userState == 0){
 userState = "Offline";
 userStateColor = "#868686";
};
if (userState == "1"){
 userState = "Online";
 userStateColor = "#56c9dc";
};
userNameText[0].textContent = userName;
userStateText[0].textContent = userState;
userStateText[0].classList.add(`text-[${userStateColor}]`);
loadingBar[0].style.width = "100%";
}

window.onload = init;
  function init(){

    let themeLoad = document.querySelectorAll('.js-mainTheme');
    
    if (fontColor == null){


    } else{
    
    themeLoad[0].classList.replace('text-white', fontColor);

    }
}
  


function myFunction(element, color){
    let mainTheme = document.getElementById('js-mainTheme');

    if (mainTheme.classList.contains('text-white')){
        mainTheme.classList.replace('text-white', color);
    }
    if (mainTheme.classList.contains('text-red-300')){
        mainTheme.classList.replace('text-red-300', color);
    }
    if (mainTheme.classList.contains('text-orange-300')){
        mainTheme.classList.replace('text-orange-300', color);
    }
    if (mainTheme.classList.contains('text-yellow-300')){
        mainTheme.classList.replace('text-yellow-300', color);
    }
    if (mainTheme.classList.contains('text-green-300')){
        mainTheme.classList.replace('text-green-300', color);
    }
    if (mainTheme.classList.contains('text-blue-300')){
        mainTheme.classList.replace('text-blue-300', color);
    }
    if (mainTheme.classList.contains('text-indigo-300')){
        mainTheme.classList.replace('text-indigo-300', color);
    }
    if (mainTheme.classList.contains('text-violet-300')){
        mainTheme.classList.replace('text-violet-300', color);
    }
    window.localStorage.setItem('font-color' , color);

}
