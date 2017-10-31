let initial= prompt("Please pick one of the four choice: one, two, three, four")
let initial2= prompt("Again, please pick one of the four choice: one, two, three, four")



let x = document.getElementById(initial).innerHTML
let y = document.getElementById(initial2).innerHTML



document.getElementById(initial).innerHTML= y
document.getElementById(initial2).innerHTML=x


// so we are just creating a statement and then the last two lines are actually implementing those changes
