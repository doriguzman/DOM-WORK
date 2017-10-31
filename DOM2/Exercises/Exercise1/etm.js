var arr = document.querySelectorAll('p')

for (var i = 0; i <arr.length; i+=2){
    arr[i].classList.add('bgGreen')
}

for (var j = 1; j<arr.length;j+=2){
    arr[j].classList.add('bgYellow')
}
