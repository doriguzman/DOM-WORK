

document.addEventListener('click', function(event){

    if (event.target.tagName==='DIV' ){
        if (event.target.style.backgroundColor==="white"){
        event.target.style.backgroundColor="black"
            }else if(event.target.style.backgroundColor = "black"){
        event.target.style.backgroundColor = "white"
    }
}
})


