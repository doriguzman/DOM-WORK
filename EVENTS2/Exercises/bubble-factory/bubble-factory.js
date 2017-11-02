//Using the files bubble-factory.html and bubble-factory.js, 
// build a page with a single button that reads, "Build a Bubble". 
// Search the internet for an image of a bubble. When the button is 
// clicked, use document.createElement() to build an img element where 
// src is a link to that bubble and add it to 
// the page. (This exercise is more fun with smaller bubbles.)

var button= document.querySelector('input')
button.addEventListener('click', function(event){
    let create=document.createElement('img')
    create.setAttribute('src', 'bubble.jpg')
    create.setAttribute('height','100px')
    create.setAttribute('width', '100px')
    document.body.appendChild(create);


})
