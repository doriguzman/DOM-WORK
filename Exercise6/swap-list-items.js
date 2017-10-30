let initial= prompt("Please pick one of the four choice: one, two, three, four")
let initial2= prompt("Again, please pick one of the four choice: one, two, three, four")



let x = document.getElementById(initial).innerText
let y = document.getElementById(initial2).innerText



document.getElementById(initial).innerHTML= y
document.getElementById(initial2).innerHTML=x


