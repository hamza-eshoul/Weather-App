


async function populateMyWeather() {

    const mySearchButton = document.querySelector('.fa.fa-search');

    mySearchButton.addEventListener('click', async function() {

        const myInsertedCity = document.getElementById('myCity').value;

        if ( /^[a-zA-Z\s]*$/.test(myInsertedCity) == false ) {
            const myCityInput = document.getElementById('myCity');
            myCityInput.setAttribute('style', 'border: 2px solid red');

            const myErrorMessage = document.querySelector('.error-message');
            myErrorMessage.innerHTML = "You did not insert a valid city ! "

            return
        }

        else {
            const myCityInput = document.getElementById('myCity');
            myCityInput.removeAttribute('style');

            const myErrorMessage = document.querySelector('.error-message');
            myErrorMessage.innerHTML = ""
            
            const myWeatherData = await fetchMyCurrentWeatherData();

            const myHourlyData = await fetchmyWeeklyHourlyWeatherData();

            console.log(myHourlyData);

            /* Populate my Current Weather */

            const myPopulatedTemp = document.querySelector('.temp');
            myPopulatedTemp.innerHTML = myWeatherData.myTemperature;

            const myPopulatedDescp = document.querySelector('.descp');
            myPopulatedDescp.innerHTML = myWeatherData.myDescription;

            const myPopulatedCity = document.querySelector('.theCity'); 
            myPopulatedCity.innerHTML = myWeatherData.myCity;

            const myPopulatedDate = document.querySelector('.todayDate');
            myPopulatedDate.innerHTML = myWeatherData.myDate;

            const myPopulatedFeelsLikeTemp = document.querySelector('.feels-like');
            myPopulatedFeelsLikeTemp.innerHTML = myWeatherData.myFeelsLikeTemp;

            const myPopulatedWindSpeed = document.querySelector('.wind-speed');
            myPopulatedWindSpeed.innerHTML = myWeatherData.myWindSpeed;

            const myPopulatedHumidity = document.querySelector('.humidity');
            myPopulatedHumidity.innerHTML = myWeatherData.myHumidity;

            const myPopulatedIcon = document.querySelector('.weather-icon');
            myPopulatedIcon.setAttribute('src', `http://openweathermap.org/img/wn/${myWeatherData.myWeatherIcon}@2x.png`);

            const myPopulatedImg = document.querySelector('.weather-img')
            const myPopulatedBgImg = document.querySelector('.block1')
            if (myWeatherData.myDescription.includes("rain") || myWeatherData.myDescription.includes("drizzle") || myWeatherData.myDescription.includes("thunderstorm") ){
                myPopulatedImg.setAttribute('src','images/rain.png');
                myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-rain.jpg)');
            }
            else if ( myWeatherData.myDescription.includes("Clear") ) {
                myPopulatedImg.setAttribute('src','images/cloudy.png');
                myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/clear-weather.jpg)');
            }

            else if ( myWeatherData.myDescription.includes("clouds") ) {
                myPopulatedImg.setAttribute('src','images/clouds.png');
                myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-weather1.jpg)');
            }

            else {
                myPopulatedImg.setAttribute('src','images/clouds.png');
                myPopulatedBgImg.setAttribute('style', 'background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-weather1.jpg)');
            }

            /* Populate my Hourly Weather */ 

            for (let i = 0; i <= 6; i++) {
                const myHourlyTemp = document.querySelector(`.temp${i}`);
                myHourlyTemp.innerHTML = myHourlyData.myTemperature[i];

                const myHourlyWind = document.querySelector(`.wind${i}`);
                myHourlyWind.innerHTML = myHourlyData.myWindSpeed[i];

                const myHourlyIcon = document.querySelector(`.hourlyIcon${i}`);
                myHourlyIcon.setAttribute('src', `http://openweathermap.org/img/wn/${myHourlyData.myIcon[i]}@2x.png`);
            }

        }})};





