import { format } from 'date-fns';
import { fetchmyHourlyWeatherData, fetchmyDailyWeatherData} from './fetchMyWeeklyHourlyWeatherData';

async function fetchMyDefaultWeatherData() {

    /* Fetching data */

    const myDefaultCity = document.getElementById('myCity');
    myDefaultCity.value = "Rabat";

    const myDefaultResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=34.022405&lon=-6,834543&units=metric&appid=f47919da3b9f25258951e3c43233925a`, {mode : 'cors'})

    const myDefaultCityData = await myDefaultResult.json();

    const myDefaultHourlyData = await fetchmyHourlyWeatherData(); 

    const myDefaultDailyData = await fetchmyDailyWeatherData();

    const todaysDate = format(new Date(), 'PPPP');

    /* Default Current Weather Data */ 

    const myPopulatedTemp = document.querySelector('.temp');
    myPopulatedTemp.innerHTML = `${myDefaultCityData.main.temp}°C`;

    const myPopulatedDescp = document.querySelector('.descp');
    const upperCaseDescp = myDefaultCityData.weather[0].description.charAt(0).toUpperCase() + myDefaultCityData.weather[0].description.slice(1);
    myPopulatedDescp.innerHTML = upperCaseDescp;

    const myPopulatedCity = document.querySelector('.theCity'); 
    myPopulatedCity.innerHTML = myDefaultCityData.name

    const myPopulatedDate = document.querySelector('.todayDate');
    myPopulatedDate.innerHTML = todaysDate;

    const myPopulatedFeelsLikeTemp = document.querySelector('.feels-like');
    myPopulatedFeelsLikeTemp.innerHTML = `${myDefaultCityData.main.feels_like}°C`;

    const myPopulatedWindSpeed = document.querySelector('.wind-speed');
    myPopulatedWindSpeed.innerHTML = `${myDefaultCityData.wind.speed} meter/sec`;

    const myPopulatedHumidity = document.querySelector('.humidity');
    myPopulatedHumidity.innerHTML = `${myDefaultCityData.main.humidity}%`;

    const myPopulatedIcon = document.querySelector('.weather-icon');
    const weatherIcon = myDefaultCityData.weather[0].icon;
    myPopulatedIcon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);

    
    const myPopulatedImg = document.querySelector('.weather-img')
    const myPopulatedBgImg = document.querySelector('.block1')
    if ( myDefaultCityData.weather[0].description.includes("rain") || myDefaultCityData.weather[0].description.includes("drizzle") || myDefaultCityData.weather[0].description.includes("thunderstorm") ){
        myPopulatedImg.setAttribute('src','images/rain.png');
        myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-rain.jpg)');
    }
    else if ( myDefaultCityData.weather[0].description.includes("clear") ) {
        myPopulatedImg.setAttribute('src','images/cloudy.png');
        myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/clear-weather.jpg)');
    }

    else if ( myDefaultCityData.weather[0].description.includes("clouds") ) {
        myPopulatedImg.setAttribute('src','images/clouds.png');
        myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-weather1.jpg)');
    }
    else {
        myPopulatedImg.setAttribute('src','images/clouds.png');
        myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-weather1.jpg)');
    }

    /* Default Hourly Data */ 

    for (let i = 0; i <= 6; i++) {

        const myTime = document.querySelector(`.myTime${i}`);
        const myProcessedTime = myDefaultHourlyData.myHour[i];
        let myFinalTime = "";
            if (myProcessedTime == 0) {
                myFinalTime = "12 am";
            }
            else if (myProcessedTime == 3) {
                myFinalTime = "3 am";
            }
            else if (myProcessedTime == 6) {
                myFinalTime = "6 am";
            }

            else if (myProcessedTime == 9) {
                myFinalTime = "9 am";
            }

            else if (myProcessedTime == 12) {
                myFinalTime = "12 pm";
            }

            else if (myProcessedTime == 15) {
                myFinalTime = "3 pm";
            }

            else if (myProcessedTime == 18) {
                myFinalTime = "6 pm";
            }

            else if (myProcessedTime == 21) {
                myFinalTime = "9 pm";
            }
        myTime.innerHTML = myFinalTime;


        const myHourlyTemp = document.querySelector(`.temp${i}`);
        myHourlyTemp.innerHTML = myDefaultHourlyData.myTemperature[i];

        const myHourlyWind = document.querySelector(`.wind${i}`);
        myHourlyWind.innerHTML = myDefaultHourlyData.myWindSpeed[i];

        const myHourlyIcon = document.querySelector(`.hourlyIcon${i}`);
        myHourlyIcon.setAttribute('src', `http://openweathermap.org/img/wn/${myDefaultHourlyData.myIcon[i]}@2x.png`);
    }

    /* Default Daily Data */ 

    for (let i = 0; i <= 5; i++) {
        const myDefaultNextDays = document.querySelector(`.day${i}`);
        myDefaultNextDays.innerHTML = myDefaultDailyData.myDay[i];

        const myDefaultDaysTemp = document.querySelector(`.daytemp${i}`);
        myDefaultDaysTemp.innerHTML = myDefaultDailyData.myDayTemperature[i];

        const myDefaultDaysWind = document.querySelector(`.daywind${i}`);
        myDefaultDaysWind.innerHTML = myDefaultDailyData.myDayWindSpeed[i];

        const myDefaultDailyIcon = document.querySelector(`.dailyIcon${i}`);
        myDefaultDailyIcon.setAttribute('src', `http://openweathermap.org/img/wn/${myDefaultDailyData.myIcon[i]}@2x.png`);
    }



};

export { fetchMyDefaultWeatherData }