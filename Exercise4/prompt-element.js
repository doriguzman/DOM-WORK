
function print(){
let opening= prompt("write​ ​an ​opening tag")
let text=prompt("write some text")
let ending=prompt("write a closing tag")

document.getElementById("container").innerHTML=opening + text+ ending
// document.getElementById("container").innerText=text
// document.getElementById("container").innerHTML=ending

}
print()
