//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
//Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI
const ui = new UI

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click' ,(e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //Change location
    weather.changeLocation(city, state);

    //set location in LS
    storage.setLocationData(city, state);

    getWeather();

    //Close Modal
    $('#locModal').modal('hide');

})

// weather.changeLocation('Miami', 'US');

function getWeather () {
    weather.getWeather()
    .then(response => ui.paint(response))
    .catch(err => console.log(err));
}
