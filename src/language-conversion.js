import { fetchMyCityCoordinates } from './fetchMyCityCoordinates';
import { format } from 'date-fns';

function convertMyLanguage() {

    const myEnglish = document.querySelector('.english');
    const myFrench = document.querySelector('.french');

    myEnglish.addEventListener('click', function() {

        if ( myEnglish.classList == "english active") {
            return
        }
        else if (myEnglish.classList == "english") {

        EnglishTranslate();
        }

        myEnglish.classList.add('active');
        myFrench.classList.remove('active');

    })


    myFrench.addEventListener('click', function() {

        myFrench.classList.add('active');
        myEnglish.classList.remove('active');

        FrenchTranslate();
    })
}


function FrenchTranslate(){

        /* Header Conversion  */

            const myHeading1 = document.querySelector('.main-heading1');
            myHeading1.innerHTML = "Le projet"
            const myHeadingSpan = document.querySelector('.myspan')
            myHeadingSpan.innerHTML = "d'application Météo"
            const myHeading2 = document.querySelector('.main-heading2');
            myHeading2.innerHTML = "TOP"

        /* Wind Speed Conversion  */

            const myWinds = document.querySelectorAll('.iswind');

            myWinds.forEach(function(e) {

                const mySlicedWind = e.innerHTML.slice(0,4);
                const myFrenchWind = `${mySlicedWind} mètre/sec`;
                e.innerHTML = myFrenchWind;
            })

        /* Block1 - Conversion */

            const myCity = document.querySelector('label');
            myCity.innerHTML = "Ville";
        
            const myFeelsLikeTemp = document.getElementById('feelsLikeTemp');
            myFeelsLikeTemp.innerHTML = "Temp Ressentie" 
        
            const myWindSpeed = document.getElementById('windSpeed');
            myWindSpeed.innerHTML = "Vitesse du vent"
        
            const myHumidity = document.getElementById('humidity');
            myHumidity.innerHTML = "Humidité";

        /* Block2 - Conversion */

        for ( let i = 0; i <= 5; i++) {
            const myDay = document.querySelector(`.day${i}`);
            
            if ( myDay.innerHTML == "Monday" ) {
                myDay.innerHTML = "Lundi"
            }
            else if ( myDay.innerHTML == "Tuesday") {
                myDay.innerHTML = "Mardi"
            }
            else if ( myDay.innerHTML == "Wednesday" ) {
                myDay.innerHTML = "Mercredi"
            }
            else if ( myDay.innerHTML == "Thirsday" ) {
                myDay.innerHTML = "Jeudi"
            }
            else if ( myDay.innerHTML == "Friday") {
                myDay.innerHTML = "Vendredi"
            }
            else if ( myDay.innerHTML == "Saturday") {
                myDay.innerHTML = "Samedi"
            }
            else if ( myDay.innerHTML == "Sunday") {
                myDay.innerHTML = "Dimanche"
            }
        }

        for ( let i = 0; i <= 6; i++) {
            const myHour = document.querySelector(`.myTime${i}`);
            
            if ( myHour.innerHTML == "12 pm" ) {
                myHour.innerHTML = "12h"
            }
            else if ( myHour.innerHTML == "3 pm") {
                myHour.innerHTML = "15h"
            }
            else if ( myHour.innerHTML == "6 pm" ) {
                myHour.innerHTML = "18h"
            }
            else if (myHour.innerHTML == "9 pm" ) {
                myHour.innerHTML = "21h"
            }
            else if ( myHour.innerHTML == "12 am") {
                myHour.innerHTML = "24h"
            }
            else if ( myHour.innerHTML == "3 am") {
                myHour.innerHTML = "3h"
            }
            else if ( myHour.innerHTML == "6 am") {
                myHour.innerHTML = "6h"
            }
            else if ( myHour.innerHTML == "9 am") {
                myHour.innerHTML = "9h"
            }
        }

        const myWeatherDays = document.querySelector('.next-days');
        myWeatherDays.innerHTML = "La météo pour les 5 prochains jours";

        const myWeatherHours = document.querySelector('.next-hours');
        myWeatherHours.innerHTML = "La météo pour les prochaines heures";

        async function convertMyDescription() {
                
            const myCoordinates = await fetchMyCityCoordinates();

            const myLatitude = myCoordinates.myLat;
            const myLongitude = myCoordinates.myLong;
        
            const myResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${myLatitude}&lon=${myLongitude}&lang=fr&appid=f47919da3b9f25258951e3c43233925a`, {mode : 'cors'}); 
        
            const myResponseObject = await myResponse.json();
            
            const myDescription = document.querySelector('.descp');
            const upperCaseDescp = myResponseObject.weather[0].description.charAt(0).toUpperCase() + myResponseObject.weather[0].description.slice(1);
            myDescription.innerHTML = upperCaseDescp;

        }

        convertMyDescription();

        function convertMyDate() {

            let todaysDay = format (new Date(), 'EEEE');
            
            let todaysMonthDay = format (new Date(), 'd');

            let todaysMonth = format (new Date(), 'MMMM');

            if ( todaysDay == "Monday" ) {
                todaysDay = "Lundi"
            }
            else if ( todaysDay == "Tuesday") {
                todaysDay = "Mardi"
            }
            else if ( todaysDay == "Wednesday" ) {
                todaysDay = "Mercredi"
            }
            else if ( todaysDay == "Thursday" ) {
                todaysDay = "Jeudi"
            }
            else if ( todaysDay == "Friday") {
                todaysDay = "Vendredi"
            }
            else if ( todaysDay == "Saturday") {
                todaysDay = "Samedi"
            }
            else if (todaysDay == "Sunday") {
                todaysDay = "Dimanche";
            }


            if ( todaysMonth == "December" ) {
            todaysMonth = "Décembre"
            }
            else if ( todaysMonth == "January") {
                todaysMonth= "Janvier"
            }
            else if ( todaysMonth == "February" ) {
                todaysMonth = "Février"
            }
            else if ( todaysMonth == "March" ) {
                todaysMonth = "Mars"
            }

        let myFrenchDate = todaysDay + " " + todaysMonthDay + " " + todaysMonth + " " + "2022";
        
        let myPageDate = document.querySelector('.todayDate');
        myPageDate.innerHTML = myFrenchDate;

        }
        convertMyDate();
    };


    function EnglishTranslate() {
       

        /* Header Conversion  */

            const myHeading1 = document.querySelector('.main-heading1');
            myHeading1.innerHTML = "This is the Top"
            const myHeadingSpan = document.querySelector('.myspan')
            myHeadingSpan.innerHTML = "Weather App"
            const myHeading2 = document.querySelector('.main-heading2');
            myHeading2.innerHTML = "Project"

        /* Wind Speed Conversion  */

            const myWinds = document.querySelectorAll('.iswind');

                myWinds.forEach(function(e) {
                const mySlicedWind = e.innerHTML.slice(0,4);
                const myEnglishWind = `${mySlicedWind} meter/sec`;
                e.innerHTML = myEnglishWind;
        })

        /* Block 1 conversion */

        const myCity = document.querySelector('label');
        myCity.innerHTML = "City";
    
        const myFeelsLikeTemp = document.getElementById('feelsLikeTemp');
        myFeelsLikeTemp.innerHTML = "Feels Like Temp" 
    
        const myWindSpeed = document.getElementById('windSpeed');
        myWindSpeed.innerHTML = "Wind Speed"
    
        const myHumidity = document.getElementById('humidity');
        myHumidity.innerHTML = "Humidity";

        /* Block2 - Conversion */

        for ( let i = 0; i <= 5; i++) {
            const myDay = document.querySelector(`.day${i}`);
            
            if ( myDay.innerHTML == "Lundi" ) {
                myDay.innerHTML = "Monday"
            }
            else if ( myDay.innerHTML == "Mardi") {
                myDay.innerHTML = "Tuesday"
            }
            else if ( myDay.innerHTML == "Mercredi" ) {
                myDay.innerHTML = "Wednesday"
            }
            else if ( myDay.innerHTML == "Jeudi" ) {
                myDay.innerHTML = "Thirsday"
            }
            else if ( myDay.innerHTML == "Vendredi") {
                myDay.innerHTML = "Friday"
            }
            else if ( myDay.innerHTML == "Samedi") {
                myDay.innerHTML = "Saturay"
            }
            else if ( myDay.innerHTML == "Dimanche") {
                myDay.innerHTML = "Sunday"
            }
        }
    
        for ( let i = 0; i <= 6; i++) {
            const myHour = document.querySelector(`.myTime${i}`);
            
            if ( myHour.innerHTML == "12h" ) {
                myHour.innerHTML = "12 pm"
            }
            else if ( myHour.innerHTML == "15h") {
                myHour.innerHTML = "3 pm"
            }
            else if ( myHour.innerHTML == "18h" ) {
                myHour.innerHTML = "6 pm"
            }
            else if (myHour.innerHTML == "21h" ) {
                myHour.innerHTML = "9 pm"
            }
            else if ( myHour.innerHTML == "24h") {
                myHour.innerHTML = "12 am"
            }
            else if ( myHour.innerHTML == "3h") {
                myHour.innerHTML = "3 am"
            }
            else if ( myHour.innerHTML == "6h") {
                myHour.innerHTML = "6 am"
            }
            else if ( myHour.innerHTML == "9h") {
                myHour.innerHTML = "9 am"
            }
        }
    
        const myWeatherDays = document.querySelector('.next-days');
        myWeatherDays.innerHTML = "The weather For The Next 5 Days";
    
        const myWeatherHours = document.querySelector('.next-hours');
        myWeatherHours.innerHTML = "The Weather For The Next Hours";

        /* Description - Date - conversion */
        
        async function convertMyDescription() {
            
            const myCoordinates = await fetchMyCityCoordinates();

            const myLatitude = myCoordinates.myLat;
            const myLongitude = myCoordinates.myLong;
        
            const myResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${myLatitude}&lon=${myLongitude}&appid=f47919da3b9f25258951e3c43233925a`, {mode : 'cors'}); 
        
            const myResponseObject = await myResponse.json();
            
            const myDescription = document.querySelector('.descp');
            const upperCaseDescp = myResponseObject.weather[0].description.charAt(0).toUpperCase() + myResponseObject.weather[0].description.slice(1);
            myDescription.innerHTML = upperCaseDescp;
        }

        convertMyDescription();

        function convertmyDate() {

            const todaysDate = format(new Date(), 'PPPP');
            const myDate = document.querySelector('.todayDate');
            myDate.innerHTML = todaysDate;

        }

        convertmyDate();
        
    };


export { convertMyLanguage, FrenchTranslate };