const form = document.querySelector('.weather_form');
const cityInput = document.querySelector('.weather_card_input');
let HTML = document.querySelector('.weather_card_details');
const icon = document.querySelector('.weather_card_details_icon');
const dateHolder = document.querySelector('.weather_card_today');
const timeHolder = document.querySelector('.weather_card_clock');


form.addEventListener('submit',async e =>{
    e.preventDefault();
    // console.log(cityInput.value);
    if(cityInput.value !== ""){
        const cityDetails = await searchCity(cityInput.value.trim().toLowerCase());
        const weatherData = await getWeather(cityDetails.Key);
        updateHTML(cityDetails, weatherData);
        form.reset();
    }
    
})

const updateHTML = (cityDetails, weatherData)=>{
    
    //  console.log('city: ', cityDetails);
    //  console.log('weather: ', weatherData);
    const weather = weatherData.Temperature;
    const metric = weather.Metric;
    const city = cityDetails.cityData;
    const weatherText = weatherData.WeatherText;
    const isDayTime = weatherData.isDayTime;
    const icon = weatherData.WeatherIcon;

    HTML.classList.remove('hidden');

    HTML.innerHTML = `
    <img src="images/icons/${icon}.svg" class="weather_card_details_icon" >
    <div class="weather_card_details_city">${city.LocalizedName}</div>
    <div class="weather_card_details_weatherText">${weatherText}</div>
    <div class="weather_card_details_temp">${metric.Value} &deg;${metric.Unit}</div>
    `;
}

const showDate = ()=>{
    const today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();
    var hour = String(today.getHours());
    var minute = String(today.getMinutes());
    var second = String(today.getSeconds());

    
    if(second.length < 2){
        second = `0${second}`
    }

    if(minute.length < 2){
        minute = `0${minute}`
    }

    if(hour.length < 2){
        hour = `0${hour}`
    }

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const months = ['Jan','Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    switch(day){
        case 0:
            day = days[0];
            break; 
        case 1:
            day = days[1];
            break;
        case 2:
            day = days[2];
            break;
        case 3:
            day = days[3];
            break;
        case 4:
            day = days[4];
            break;
        case 5:
            day = days[5];
            break;
        case 6:
            day = days[6];
            break;
        }

    switch(month){
        case 0:
            month = months[0];
            break; 
        case 1:
            month = months[1];
            break;
        case 2:
            month = months[2];
            break;
        case 3:
            month = months[3];
            break;
        case 4:
            month = months[4];
            break;
        case 5:
            month = months[5];
            break;
        case 6:
            month = months[6];
            break;
        case 7:
            month = months[7];
            break;
        case 8:
            month = months[8];
            break;
        case 9:
            month = months[9];
            break;
        case 10:
            month = months[10];
            break;
        case 11:
            month = months[11];
            break;
       
        }
    //show the date and clock
    dateHolder.innerText = `${day} - ${month} ${date}, ${year}`;
    timeHolder.innerText = `${hour} : ${minute} : ${second}`;
}

setInterval(showDate,1000);










