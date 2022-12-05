
let fontColor = window.localStorage.getItem('font-color');
 //api url
 const apiKey = "EA5D5BCBBC33290E41E194D1EC5373D8",
       corsProxy = "", // https://proxy.cors.sh/ use this in production. // https://cors-anywhere.herokuapp.com use this in local host.
 
 apiUrl = `http://lukebottle.pythonanywhere.com/`;

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
