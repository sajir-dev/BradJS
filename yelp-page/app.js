//Functions to change and names dynamically
const shopInfo = document.querySelectorAll('.hot-business');
const shopInfoWrapper = document.querySelector('.hot-business-wrapper');

const shopInfoArray = Array.from(shopInfo);

starRatingCreator = (n) => {
    let backgroundColor = 'yellowish';
    let stars = '';
    for (let i=0; i<n; i++) {
        stars = stars + ('<i class="material-icons">star</i>');
    }
    console.log(n);
    if (n==5){
        console.log('inside color changer');
        backgroundColor = 'reddish';
    }
    console.log(backgroundColor);
    return {"backgoundColor":backgroundColor, "stars":stars};
}

setShopInfo = (shopData) => {
    let shopInfoFromData = '';
    for (let i=0; i<shopInfoArray.length; i++) {
        shopInfoFromData = shopInfoFromData + `
        <div class="hot-business ${shopData[i].class}">
            <div class="shop-info">
            <h4 class="shop-name">${shopData[i].name}</h4>
            <div class="rating ${starRatingCreator(shopData[i].rating).backgoundColor} shop-rating">
                ${starRatingCreator(shopData[i].rating).stars}
                <span>${shopData[i].reviews} reviews</span>
            </div>
            <p class="specialty">${shopData[i].speciality}</p>
            <p class="location">${shopData[i].location}</p>
            <p class="when-opened">${shopData[i].whenOpened}</p>
            </div>
        </div>
        `;
    }
    return(shopInfoFromData);
}

let shopData = [{
        'name': 'shop 1', 
        'class' :'one',
        'rating':'3', 
        'reviews':27,
        'speciality': 'Tacos and Food trucks',
        'location': 'Potrero Hills',
        'whenOpened':'Opened two weeks ago'
    }, {
        'name':'shop 2', 
        'class':'two',
        'rating':'1', 
        'reviews':10,
        'speciality': 'Smoked chicken and salads',
        'location': 'Silver Hills',
        'whenOpened':'Opened two months ago'
    }, {
        'name': 'shop 3', 
        'class':'three',
        'rating': '4', 
        'reviews':4,
        'speciality': 'Indian cuisine',
        'location': 'Down town',
        'whenOpened':'Opened four weeks ago'
    }];

shopInfoWrapper.innerHTML = setShopInfo(shopData);

console.log(shopInfoWrapper);