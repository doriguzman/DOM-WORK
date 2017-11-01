document.addEventListener('keypress', function (event) {
    let key = event.key;
    let newnew = document.querySelector('h1')
    newnew.innerText += key

    if (key >= 'A' && key <= 'Z') {
        newnew.style.textDecoration = 'underline';
    } else if ('.?!'.includes(key)) {
        newnew.style.textDecoration = 'none'
    }


    // if (key === key.toUpperCase()) {
    //     newnew.style.textDecoration= "underline"
    // } else if (key===key.toLowerCase()|| key==='!'||key==='.'|| key ==='?'){
    //     newnew.style.textDecoration= "none"
    // }


})
