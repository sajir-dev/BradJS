const user = {email: 'jdoe@gmail.com'};

try {
    // Produce a reference error
    // myFunction();

    // Produce a Type Error
    // null.myFunction();

    // Produce a syntax error - Actually this code is not producing a syntax error
    // eval('HelloWorld');

    //Produce a URIError
    // decodeURIComponent('%');

    if (!user.name){
        // throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
} catch (err) {
    console.log(`User Error: ${err.message}`);
    // console.log(err);
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err instanceof TypeError);

} finally {
    console.log('whatever happens, this will execute');
}

console.log('Program continous');