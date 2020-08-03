let greenPlanet = document.getElementById('greenplanet');

console.log(greenPlanet.innerHTML);

// greenPlanet.classList.add('redtext');

greenPlanet.setAttribute("class", "redtext");

greenPlanet.innerHTML = "The DOM changed Text";