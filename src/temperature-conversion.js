
function convertMyTemperature() {

    const myCelcius = document.querySelector('.celcius');
    const myFahrenheit = document.querySelector('.fahrenheit');

    myCelcius.addEventListener('click', function() {

        if ( myCelcius.classList == "celcius active") {
            return
        }
        else if (myCelcius.classList == "celcius") {
            convertToCelcius();
        }
        myCelcius.classList.add('active');
        myFahrenheit.classList.remove('active');
    })

    myFahrenheit.addEventListener('click', function() {
        myFahrenheit.classList.add('active');
        myCelcius.classList.remove('active');

        convertToFehr()
        });

     
    }

    function convertToCelcius() {
        const myTemps = document.querySelectorAll('.istemp');
        myTemps.forEach(function(e) {

            const mySlicedFahrenheit = e.innerHTML.slice(0,5)
            const getCelciusTemp = (+mySlicedFahrenheit - 32) * (5 / 9);
            const printedCelciusTemp = `${getCelciusTemp.toFixed(2)}°C`;
            e.innerHTML = printedCelciusTemp;
        })

    }

    function convertToFehr() {
        const myTemps = document.querySelectorAll('.istemp');

        myTemps.forEach(function(e) {

            if (e.innerHTML.length == 7) {
              let mySlicedCelcius =  e.innerHTML.slice(0, 5);
              const getFahrenheitTemp = +mySlicedCelcius * (9 / 5) + 32 
              const printedFahrenheitTemp = `${getFahrenheitTemp.toFixed(2)}°F`;
              e.innerHTML = printedFahrenheitTemp;
              
            }
            else if ( e.innerHTML.length == 6) {
              let mySlicedCelcius = e.innerHTML.slice(0, 4)
              const getFahrenheitTemp = +mySlicedCelcius * (9 / 5) + 32 
              const PrintedFahrenheitTemp = `${getFahrenheitTemp.toFixed(2)}°F`;
              e.innerHTML = PrintedFahrenheitTemp;
            }
    })}




export { convertMyTemperature, convertToFehr } 