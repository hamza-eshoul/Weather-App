import { fetchMyCityCoordinates } from './fetchMyCityCoordinates';
import { format } from 'date-fns';

async function fetchMyCurrentWeatherData() {

    const myResult = await fetchMyCityCoordinates();

    const myLatitude = myResult.myLat;
    const myLongitude = myResult.myLong;

    const myResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${myLatitude}&lon=${myLongitude}&units=metric&appid=f47919da3b9f25258951e3c43233925a`); 

    const myCityWeatherData = await myResponse.json();

    const todaysDate = format(new Date(), 'PPPP');

    const upperCaseDescp = myCityWeatherData.weather[0].description.charAt(0).toUpperCase() + myCityWeatherData.weather[0].description.slice(1);

    const CurrentWeather = {
        myTemperature : `${myCityWeatherData.main.temp}°C`,
        myDescription : upperCaseDescp,
        myCity : myCityWeatherData.name,
        myDate : todaysDate,
        myFeelsLikeTemp : `${myCityWeatherData.main.feels_like}°C`,
        myWindSpeed : `${myCityWeatherData.wind.speed} meter/sec`,
        myHumidity : `${myCityWeatherData.main.humidity}%`,
        myWeatherIcon : myCityWeatherData.weather[0].icon
    }

    return CurrentWeather;
};

export { fetchMyCurrentWeatherData };