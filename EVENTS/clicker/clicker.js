       
        // document.addEventListener('click', function(event){
        //     let width= window.innerWidth
        //     if ((width - event.clientX)/ width > .5){
        //         document.body.style.backgroundColor= 'mediumaquamarine'
        //     }else{
        //         document.body.style.backgroundColor='peachpuff'
        //     }
        // })
    var body = document.querySelector('body')
    body.addEventListener('click', function(event){
        if (event.clientX<window.innerWidth/2){
            body.style.backgroundColor='mediumaquamarine';
        }else{
            body.style.backgroundColor='peachpuff'
        }
    })


//~~~~~~short cut is using a ternary operator ~~~~~~

// var body = documentquerySelctor('body')
// document.addEventListener('click', function(event){
// var isLeftSide=event.clientX<window.innerWidth/2;
// body.style.backgroundColor=isLeftSide ? 'mediumaquamarine' : 'peachpuff'
// })
