## Chapter-6 DOM

DOM:<br>
document <br>
html <br>
head....body <br>
etc.. <br>
document is a global obj <br>
getElementById is its function <br>
getElementById returns an HTML element object with id passed to it <br>
the innerHTML property contains the content within the HTML element but without the enclosing HTML tags. <br>
*let planet = document.getElementById("greenplanet");* <br>
*console.log(planet.innerHTML);* <br>
will return *All is well* but not < p id="greenplanet">All is well </ p> <br>
But innerText return just the text content in the element. <br>
*window.onload = init;* will load the the init function only after the page loads and thus we can avoid the element calling error if the element is getting called befoer the page loads<br>

element.setAttribute("class","redtext"); <br>
setAttribute has two parameters. first one is the name of the attribute, for eg: class, id, placeholder etc.. and second one is the class name or id itself, here it is redtext<br>
similarly getAttribute can be used to access attributes of an element. <br>

<hr>

We can get elements from DOM using getElementById, querySelector, querySelectorAll, getElementsByTagName etc.. <br>
We can create and add DOM elements by createElement, innerHTML appendChild, etc.. <br>
We can remove elements from DOM using Remove element <br>
We can traverse the DOM element using getParentElement, getSibling etc.. <br>

