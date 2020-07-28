const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionareBtn = document.getElementById('show_millionares');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate_wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// get user from randomuser.me 
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()* 1000000)
    };

    // console.log(newUser);
    addData(newUser);
}

// double the money
function doubleMoney() {
    // console.log('inside double money');
    data = data.map(user => {
        return {name: user.name, money: user.money*2};
    });
    updateDOM();
}

// Sort users by the richest
function sortByRichest() {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}

// Show only millionaires
function showOnlyMillionaires() {
    data = data.filter(user => user.money>1000000);
    // console.log('show only millionaires');
    updateDOM();
}

// calculate wealth
function calculateWealth(){
    let totalWealth = data.reduce((acc, user) => ( acc += user.money), 0 );
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>$${formatMoney(totalWealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

// initial data adding
function addData(obj){
    data.push(obj);
    updateDOM();
}

// update DOM
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong> ${item.name}</strong> $${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionareBtn.addEventListener('click', showOnlyMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);