const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = movieSelect.value;

// Price change event
updateCountAndTotal = () => {
    let selectedSeats = document.querySelectorAll('.row .seat.selected').length;

    count.innerText = selectedSeats;
    total.innerText = ticketPrice*selectedSeats ;
}

// Movie change event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value; // + sign to convert the ticket price to an integer
    // console.log(typeof ticketPrice);

    updateCountAndTotal();
})

container.addEventListener('click', (e) => {
    // console.log(e.target.classList);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        // Change total and ticket price
        updateCountAndTotal();
    }
    
})