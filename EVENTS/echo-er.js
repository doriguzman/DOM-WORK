document.addEventListener('keypress', function(event){
    let key= event.key;
    let newnew=document.querySelector('h1')
    newnew.innerText= key
       })
   

    //    Continuing with the files echo-er.html, echo-er.js, and echo-er.css 
    //    add a text-decoration: underline property to the h1 element when the user types a 
    //    capital letter, and remove it when the user types a period, question mark, or exclamation
    //     point.