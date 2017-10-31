var arr = document.querySelectorAll('p')

for (var i = 0; i <arr.length; i+=2){
    arr[i].classList.add('bgGreen')
}

for (var j = 1; j<arr.length;j+=2){
    arr[j].classList.add('bgYellow')
}
///could also be done as 


// arr.forEach(function(p,index){
//     if (index %2===0){
//         p.classList.add('bgYellow');
//     }else{
//         p.classList.add('bgGreen')
//     }
// })