document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e){

    //Initialising xhr object
    const xhr = new XMLHttpRequest();

    //creating get request
    xhr.open('GET', 'customer.json', true);

    //handling the respone
    xhr.onload = function(){
        if (this.status === 200){
            //console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    //send respone
    xhr.send();

}

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e){

    //initialising xhr object
    const xhr = new XMLHttpRequest();

    //creating get request
    xhr.open('GET', 'customers.json', true);

    //handling response
    xhr.onload = function () {
        // console.log(this.responseText);
        const customers = JSON.parse(this.responseText);

        let output = '';

        // console.log(customers);
        customers.forEach(function(customer){
            output+=`
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
        });

        document.getElementById('customers').innerHTML = output;
    }

    //send response
    xhr.send();
}