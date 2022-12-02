import { fetchMyCityCoordinates } from './fetchMyCityCoordinates';
import { getHours } from 'date-fns';
import { getDay } from 'date-fns'


async function fetchmyHourlyWeatherData() {

    const myCoordinates = await fetchMyCityCoordinates();

    const myLatitude = myCoordinates.myLat;
    const myLongitude = myCoordinates.myLong;

    const myResponse= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${myLatitude}&lon=${myLongitude}&units=metric&appid=f47919da3b9f25258951e3c43233925a`, {mode : 'cors'}); 

    const myWeeklyHourlyData = await myResponse.json();

    const myHourlyObject = {
        myHour : [getHours(new Date(myWeeklyHourlyData.list[0].dt_txt)), getHours(new Date(myWeeklyHourlyData.list[1].dt_txt)), getHours(new Date(myWeeklyHourlyData.list[2].dt_txt)), getHours(new Date(myWeeklyHourlyData.list[3].dt_txt)), getHours(new Date(myWeeklyHourlyData.list[4].dt_txt)), getHours(new Date(myWeeklyHourlyData.list[5].dt_txt)), getHours(new Date(myWeeklyHourlyData.list[6].dt_txt)) ],
        
        myTemperature : [`${myWeeklyHourlyData.list[0].main.temp}°C`,`${myWeeklyHourlyData.list[1].main.temp}°C`,`${myWeeklyHourlyData.list[2].main.temp}°C`,`${myWeeklyHourlyData.list[3].main.temp}°C`, `${myWeeklyHourlyData.list[4].main.temp}°C`,`${myWeeklyHourlyData.list[5].main.temp}°C`,`${myWeeklyHourlyData.list[6].main.temp}°C`] ,

        myWindSpeed : [`${myWeeklyHourlyData.list[0].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[1].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[2].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[3].wind.speed} meter/sec`, `${myWeeklyHourlyData.list[4].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[5].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[6].wind.speed} meter/sec`],

        myIcon : [myWeeklyHourlyData.list[0].weather[0].icon, myWeeklyHourlyData.list[1].weather[0].icon, myWeeklyHourlyData.list[2].weather[0].icon, myWeeklyHourlyData.list[3].weather[0].icon, myWeeklyHourlyData.list[4].weather[0].icon, myWeeklyHourlyData.list[5].weather[0].icon, myWeeklyHourlyData.list[6].weather[0].icon]
    }

    return myHourlyObject;

}

async function fetchmyDailyWeatherData() {

    const myCoordinates = await fetchMyCityCoordinates();

    const myLatitude = myCoordinates.myLat;
    const myLongitude = myCoordinates.myLong;

    const myResponse= await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${myLatitude}&lon=${myLongitude}&units=metric&appid=f47919da3b9f25258951e3c43233925a`, {mode : 'cors'}); 

    const myWeeklyHourlyData = await myResponse.json();
    
    function convertDayOfWeek(x) {
        let dayOfWeekNumber = getDay(new Date(myWeeklyHourlyData.list[x].dt_txt));
            let dayOfWeek  = "";
            if ( dayOfWeekNumber == 0) {
                dayOfWeek = "Sunday";
            }
            else if ( dayOfWeekNumber == 1) {
                dayOfWeek = "Monday"
            }
            else if ( dayOfWeekNumber == 2) {
                dayOfWeek = "Tuesday"
            }
            else if ( dayOfWeekNumber == 3) {
                dayOfWeek = "Wednesday"
            }
            else if ( dayOfWeekNumber == 4) {
                dayOfWeek = "Thirsday"
            }
            else if ( dayOfWeekNumber == 5) {
                dayOfWeek = "Friday"
            }
            else if ( dayOfWeekNumber == 6) {
                dayOfWeek = "Saturday"
            }
            return dayOfWeek;
    }

    const myDailyObject = {
        myDay : [convertDayOfWeek(0), convertDayOfWeek(8), convertDayOfWeek(16), convertDayOfWeek(24), convertDayOfWeek(32), convertDayOfWeek(39)],

        myDayWindSpeed : [`${myWeeklyHourlyData.list[0].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[8].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[16].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[24].wind.speed} meter/sec`, `${myWeeklyHourlyData.list[32].wind.speed} meter/sec`,`${myWeeklyHourlyData.list[39].wind.speed} meter/sec`],

        myDayTemperature : [`${myWeeklyHourlyData.list[0].main.temp}°C`,`${myWeeklyHourlyData.list[8].main.temp}°C`,`${myWeeklyHourlyData.list[16].main.temp}°C`,`${myWeeklyHourlyData.list[24].main.temp}°C`, `${myWeeklyHourlyData.list[32].main.temp}°C`,`${myWeeklyHourlyData.list[39].main.temp}°C`],

        myIcon : [myWeeklyHourlyData.list[0].weather[0].icon, myWeeklyHourlyData.list[8].weather[0].icon, myWeeklyHourlyData.list[16].weather[0].icon, myWeeklyHourlyData.list[24].weather[0].icon, myWeeklyHourlyData.list[32].weather[0].icon, myWeeklyHourlyData.list[39].weather[0].icon],
    }

    return myDailyObject;


}

export { fetchmyHourlyWeatherData, fetchmyDailyWeatherData};