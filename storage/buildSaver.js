var insideKey= "inside"
var button=document.querySelector('#submit')
button.addEventListener('click',function(element){
    var input= document.querySelector('#text');
    var inside= document.querySelector('#paragraph')
    inside.innerHTML += " " + input.value;
    window.localStorage.setItem(insideKey, inside.innerHTML)

    input.value='' //makes sure to change the inside of the text to nothing
   
})

var inside= document.querySelector('#paragraph')
inside.innerHTML=window.localStorage.getItem(insideKey)



var clearButton=document.querySelector('#clear')
clearButton.addEventListener('click', function(element){
    var inside=document.querySelector('#paragraph')
    inside.innerHTML= ""
    window.localStorage.setItem('insideKey', inside.innerHTML)
    input.value = ''
})
// Duplicate​ ​builderSaver.html​ ​as​ ​builderSaverClearer.html​.​ ​
//Add​ ​a​ ​button​ ​reading​ ​"clear". When​ ​the​ ​button​ ​is​ ​clicked,​
// ​the​ ​.innerText​​ ​of​ ​the​ ​paragraph​ ​should​ ​be​ ​set​ ​to​ ​an empty​ ​string.


