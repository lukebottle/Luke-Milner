let fontColor = window.localStorage.getItem('font-color');
window.onload = init;

  function init(){
    let themeLoad = document.querySelectorAll('.js-mainTheme');
    themeLoad[0].classList.replace('text-white', fontColor);

        const apiKey = "EA5D5BCBBC33290E41E194D1EC5373D8",
        url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=76561198077564405`;
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
        
        
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
