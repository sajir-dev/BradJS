const cars = [  {id: 101, type:"Fiat", model:"500", color:"white"},
                {id: 102, type:"Suzuki", model:"600", color:"white"},   
                {id: 103, type:"Tata", model:"800", color:"black"},
                {id: 104, type:"Tata", model:"800", color:"black"},
                {id: 105, type:"Fiat", model:"600", color:"red"},
                {id: 106, type:"GM", model:"500", color:"red"}]

const container = document.querySelector(".container");
const dropDownItems = document.querySelectorAll(".dropdown-item");
const dropdown = document.querySelectorAll(".dropdown");
const dropDownArray = Array.from(dropDownItems);

container.addEventListener("click", (e) => {
    // console.log("clicked");
    if (e.target.matches ("input") && (e.target.checked === true || e.target.checked === false)) {
        // console.log(e.target.parentElement);
        // console.log(dropDownArray.indexOf(e.target.parentElement));
        const filtersObjArr = generateFilterDOM();
        console.log(filtersObjArr);
        console.log(parallelFilter(cars, filtersObjArr));
    }
})

// const filtersObjArr = generateFilterDOM();
// console.log(filtersObjArr);
// console.log(typeof filtersObjArr[0][0]);

function generateFilterDOM() {
    const filters = ["GM", "Suzuki", "Tata", "Fiat", "500", "600", "800", "white","black", "red"];
    const specificFilters = [];
    let start = 0;
    for (let i = 0; i < dropdown.length; i++) {
        let end = start + dropdown[i].childNodes[3].children.length;
        let currentFilter = []
        for (let j = start; j<end; j++) {
            // console.log("j", j);
            if (dropDownArray[j].firstElementChild.checked) {
                currentFilter.push({[`${dropdown[i].childNodes[1].innerText}`]: filters[j]});
            }
        }
        start = end;
        specificFilters.push(currentFilter);
    }
    return specificFilters;
}

// console.log(filters[dropDownArray.indexOf(checkedItem.parentElement)]);
// console.log(dropDownItems)
// console.log(dropdown[2].childNodes[3].children.length);
// console.log(dropdown[2].childNodes[1].innerText)

// function createFilter(checkedItem, filtersObjArr) {
//     // console.log(dropDownArray.indexOf(checkedItem.parentElement));
//     // console.log(dropDownArray);
//     let filter = 
//     for (let i = 0; i < dropDownArray.length; i++) {
//         console.log(dropDownArray[i].firstElementChild.checked)
//         if (dropDownArray[i].firstElementChild.checked) {

//         }
//     }
// }


// complete the logic of connecting the filtering parallely and series

function parallelFilter (cars, filtersArr) {
    let filtered = [];
    for (let i = 0; i < filtersArr.length; i++) {
        if (filtersArr[i].length === 0) {
            filtered[i] = cars;
            continue;
        } else {
            for (let j = 0; j < filtersArr[i].length; j++) {
                let filteredOnce = singleFilter(filtersArr[i][j], cars);
                if (!filtered[i].length === 0) {
                    filtered[i] = filteredOnce;
                } else {
                    filtered[i].splice(filtered.length, filteredOnce.length, ...filteredOnce);
                }
            }
            filtered[i] = removeDuplicate(filtered);
        }
    }

    // filtered = removeDuplicate(filtered);
    // if (filtered.length === 0) {
    //     return cars;
    // }
    return filtered;
}

function singleFilter (filterObj, ItemsArr) {
    let filtered;
    for (let key in filterObj) {
        filtered = ItemsArr.filter(item =>
                filterObj[key] === item[key]
            );
    }
    return filtered;
}

function removeDuplicate (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1 ; j < arr.length; j++) {
            if (arr[i].id === arr[j].id) {
                arr.splice(j,1);
                j = i;
            }
        }
    }
    return arr;
}

// console.log(singleFilter({model:"600"}, cars ));


