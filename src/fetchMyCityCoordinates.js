async function fetchMyCityCoordinates() {

    const myInsertedCity = document.getElementById('myCity').value;

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${myInsertedCity}&appid=f47919da3b9f25258951e3c43233925a`, {mode : 'cors'});

    const myCityCoordinates = await response.json();

        const myCoordinatesObject = {
            myLat : myCityCoordinates[0].lat,
            myLong : myCityCoordinates[0].lon
        }
        return myCoordinatesObject
};

export { fetchMyCityCoordinates };