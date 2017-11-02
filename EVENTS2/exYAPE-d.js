
var list= document.querySelector('ul')
document.addEventListener('click', function(event){
    // let node = document.querySelector('ul')
    // let edited= node.appendChild(event.target)
    if(event.target.tagName.toUpperCase() ==='LI'){
        var n = document.createElement('LI');
        n.innerHTML=event.target.innerHTML;
        list.appendChild(n);
    }
})





// Duplicate the files exYAPE.html and exYAPE.js as 
// exYAPE-d.html and exYAPE-d.js. With the new files, every 
// time a list item is clicked, duplicate that list item with document.createElement() 
// and add it to the bottom of the list with .appendChild() on the ul element.

