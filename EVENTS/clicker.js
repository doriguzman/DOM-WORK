       
        document.addEventListener('click', function(event){
            let width= window.innerWidth
            if ((width - event.clientX)/ width > .5){
                document.body.style.backgroundColor= 'mediumaquamarine'
            }else{
                document.body.style.backgroundColor='peachpuff'
            }
        })
    