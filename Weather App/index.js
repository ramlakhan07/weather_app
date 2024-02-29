var bd = document.querySelector("body")
var citySearch = document.getElementById("city-search");
var btn = document.querySelector("#add")
var city = document.querySelector("#cityoutput")
var descrip = document.querySelector("#description")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
apikey = "be954ac7ef2052a9a60b91352b26baa2"
function convertion(val){
    return (val-273).toFixed(3);
}

// Disables the right-click menu or inspect
window.addEventListener('contextmenu', function (e) {
    e.preventDefault(); 
});

//crear input box when submit
function clearSr(){
    console.log("clear")
    citySearch.value=" ";
}

btn.addEventListener("click",function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citySearch.value+'&appid='+apikey)
    .then(res => res.json())

    .then((data) =>{
        var nameval = data['name']
        var descr = data['weather']['0']['description']
        var temprature = data['main']['temp']
        var windspeed = data['wind']['speed']
        console.log(nameval)

        city.innerHTML = `Weather of <span>${nameval}</span>`
        temp.innerHTML = `Temprature: <span>${convertion(temprature)}</span>`
        description.innerHTML = `Sky conditions: <span>${descr}</span>`
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`


        if(descr=='haze'){
            bd.style.backgroundImage = "url('weather_0.jpg')"
        }
        if(descr=='overcast clouds'){
            bd.style.backgroundImage = "url('data:image/jpeg;base64,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')"
        }
        
        if(descr='scattered clouds'){
            bd.style.backgroundImage="url('data:image/jpeg;base64,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')"
        }

        clearSr();


    })
    .catch(err=>alert('You entered wrong city!'))
})