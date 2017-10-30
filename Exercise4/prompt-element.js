
function print(){
let opening= prompt("write​ ​an ​opening tag")
let text=prompt("write some text")
let ending=prompt("write a closing tag")

document.getElementById("container").innerHTML=opening + text+ ending

}
print()


// let element = window.prompt("Write an HTML element.");

// let container = document.getElementById('container');

// container.innerHTML = element;