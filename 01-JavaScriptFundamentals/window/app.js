//WINDOW METHODS/OBJECT/PROPERTIES


//Alert
// alert("Hello..");

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if (confirm('Are you sure')){
//     console.log('YES');
// } else {
//     console.log("NO");
// }

let val;

//Outer height and Width
val = window.outerWidth;
val = window.outerHeight;

//Inner height and inner width
val = window.innerWidth;
val = window.innerHeight;

//scroll point
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Reload and href
// window.location.href = 'https://google.com';
// window.location.reload();

//History Object
//window.history.go(-1);
//window.history.length; to check the how many pages back we have

//NAVIGATOR OBJECT
val = window.navigator;
val = window.navigator.geolocation;
val = window.navigator.userAgent;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.vendor;
val = window.navigator.language; 

console.log(val);