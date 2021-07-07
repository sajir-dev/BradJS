const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');
const movieSelect = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('total');

let ticketPrice = movie.value;

// populate UI 
populateUI = () => {
    const seatsSelected = JSON.parse(localStorage.getItem('seatsIndex'));
    // console.log(seatsSelected);
    if (seatsSelected !== null && seatsSelected.length> 0) {
        seats.forEach((seat, index) => {
            // console.log('1');
            if (seatsSelected.indexOf(index)>-1){
                seat.classList.add('selected');
                // console.log(seat.classList);
            }
        });
        // console.log('here');
    }

    const selectedMovieIndex = localStorage.getItem('movieIndex');
    
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Update total and count
updateCountAndTotal = () => {
    const selectedSeats = document.querySelectorAll(' .row .seat.selected');
    // console.log(selectedSeats.length);
    const seatsIndex = [...selectedSeats].map((seat, index) => [...seats].indexOf(seat));

    localStorage.setItem('seatsIndex', JSON.stringify(seatsIndex));

    count.innerText = selectedSeats.length;
    total.innerText = ticketPrice * selectedSeats.length;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

    const movieIndex = e.target.selectedIndex;
    
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('total', total.value);

    updateCountAndTotal();
});

// Seat click event
container.addEventListener('click', (e) => {
    // console.log(e.target);

    if (e.target.classList.contains('seat')) {
        if (!e.target.classList.contains('occupied')) {
            e.target.classList.toggle('selected');
            updateCountAndTotal();
        }
    }
});

// Intial UI
populateUI();

// Initial count and total
updateCountAndTotal();
