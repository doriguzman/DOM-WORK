let form = document.querySelector('form');
let getting= document.querySelector('p');
form.addEventListener('submit', function(event){
    let text= document.getElementById('switch').value.split('').reverse().join('');
    event.preventDefault();
    getting.innerText=text;
})