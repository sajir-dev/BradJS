const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = movieSelect.value;

// Price change event
updateCountAndTotal = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');;

    // Copy selected seats into an array
    // Map through array
    // Return a new array of indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    
    //set to local storage
    localStorage.setItem('seatsIndex', JSON.stringify(seatsIndex)); 

    count.innerText = selectedSeats.length;
    total.innerText = ticketPrice*selectedSeats.length ;
    console.log(count, total);
}


// populate function
populateUI = () => {
    const seatsSelected = JSON.parse(localStorage.getItem('seatsIndex'));
    if (seatsSelected !== null && seatsSelected.length > 0) {
        seats.forEach((seat, index) => {
            if (seatsSelected.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const movieIndex = localStorage.getItem('movieIndex');

    if (movieIndex !== null) {
        movieSelect.selectedIndex = movieIndex;
    } 
}

// Movie change event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value; // + sign to convert the ticket price to an integer
    // console.log(typeof ticketPrice);

    console.log(e.target.selectedIndex, e.target.value);
    localStorage.setItem('movieIndex', e.target.selectedIndex);
    localStorage.setItem('ticketPrice', e.target.value);
    updateCountAndTotal();
});

// Seat click event
container.addEventListener('click', (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        // Change total and ticket price
        updateCountAndTotal();
    }
});

// set initial UI
populateUI();

// set initial count and total price
updateCountAndTotal();