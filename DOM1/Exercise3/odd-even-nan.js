let initial= prompt("please input a number")

let number= Number(initial)

if(isNaN(number)){
    alert("that is not a number")
}else if(number%2===0){
 alert("that number is even")
}else{
   alert("that number is odd")
}