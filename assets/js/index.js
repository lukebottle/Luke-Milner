let pokeButton = null;
let pokemon = {
    fetchPokemon: function(name) {
        fetch(
                `https://lukebottle.pythonanywhere.com/poke/name=${name}`

            )
            .then((response) => response.json())
            .then((data) => this.displayPokemon(data));

    },
    displayPokemon: function(data) {
        //two ways of grabbing data from .json.
        let icon = data['sprites']['other']['home']['front_default'];
        name = data.name,
        height = data.height / 10;
        weight = data.weight / 10;
        ability = data.abilities[0].ability.name;
        hp = data.stats[0].base_stat;
        attack = data.stats[1].base_stat;
        defense = data.stats[2].base_stat;
        id = data.game_indices[0].game_index;
        
        document.querySelector(".js-pokeIcon").src = "" + icon
        document.querySelector(".js-pokeName").innerText = name;
        document.querySelector(".js-PokeHeight").innerText = `${height}M`; 
        document.querySelector(".js-PokeWeight").innerText =`${weight}'KG'`;
        document.querySelector(".js-PokeAbility").innerText = ability;
        document.querySelector(".js-PokeHealth").innerText = hp;
        document.querySelector(".js-PokeAttack").innerText = attack;
        document.querySelector(".js-PokeDefense").innerText = defense;
        document.querySelector(".js-index").innerText = `#${id}`;
        healthBar = document.querySelectorAll('.js-PokeHealthBar');
        AttackBar = document.querySelectorAll('.js-PokeAttackBar');
        DefenseBar = document.querySelectorAll('.js-PokeDefenseBar');

        healthBar[0].style.width = `${hp}%`;
        AttackBar[0].style.width = `${attack}%`;

        DefenseBar[0].style.width = `${defense}%`;


    },
    search: function() {
        this.fetchPokemon(document.querySelector(".js-search-bar").value.toLowerCase());
    }
}


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
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

let fontColor = window.localStorage.getItem('font-color'),
    btnTheme = document.querySelectorAll('.js-btn'),
    btnHover = document.querySelectorAll('.js-btn-hover'),
    btnColor = "";
    btnColor = fontColor.replace('text-', '');
    btnTheme[0].classList.replace(`border-white-400`, `border-${btnColor}`);
    btnHover[0].classList.replace(`bg-white-400`, `bg-${btnColor}`);

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
    
    
    document.querySelectorAll(".js-button")[0].addEventListener("click", function() {
    pokemon.search();

    })
    document.querySelectorAll(".js-search-bar")[0].addEventListener("keypress", function(e) {
        if (e.key === 'Enter'){
            pokemon.search();

        }
    
        })

    let themeLoad = document.querySelectorAll('.js-mainTheme');
    console.log(themeLoad)
    if (fontColor == null){
        

    } else{
    
    themeLoad[0].classList.replace('text-white-400', fontColor);
    }
}
  


function myFunction(element, color){
    let mainTheme = document.getElementById('js-mainTheme'),
    btnTheme = document.querySelectorAll('.js-btn'),
    btnHover = document.querySelectorAll('.js-btn-hover'),
    btnColor = "";

    if (mainTheme.classList.contains('text-white-400')){
        mainTheme.classList.replace('text-white-400', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-white-400', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-white-400`, `bg-${btnColor}`);
    }
    if (mainTheme.classList.contains('text-red-300')){
        mainTheme.classList.replace('text-red-300', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-red-300', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-red-300`, `bg-${btnColor}`);
    }
    if (mainTheme.classList.contains('text-orange-300')){
        mainTheme.classList.replace('text-orange-300', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-orange-300', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-orange-300`, `bg-${btnColor}`);
    }
    if (mainTheme.classList.contains('text-yellow-300')){
        mainTheme.classList.replace('text-yellow-300', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-yellow-300', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-yellow-300`, `bg-${btnColor}`);
    }
    if (mainTheme.classList.contains('text-green-300')){
        mainTheme.classList.replace('text-green-300', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-green-300', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-green-300`, `bg-${btnColor}`);
    }
    if (mainTheme.classList.contains('text-blue-300')){
        mainTheme.classList.replace('text-blue-300', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-blue-300', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-blue-300`, `bg-${btnColor}`);
    }
    if (mainTheme.classList.contains('text-indigo-300')){
        mainTheme.classList.replace('text-indigo-300', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-indigo-300', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-indigo-300`, `bg-${btnColor}`);
    }
    if (mainTheme.classList.contains('text-violet-300')){
        mainTheme.classList.replace('text-violet-300', color);
        btnColor = color.replace('text-', '');
        btnTheme[0].classList.replace('border-violet-300', `border-${btnColor}`);
        btnHover[0].classList.replace(`bg-violet-300`, `bg-${btnColor}`);
    }
    window.localStorage.setItem('font-color' , color);

}
