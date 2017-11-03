var muffinKey= 'muffinCnt';

function muffinChange(n){
    var muffinCnt= Math.max(0, window.localStorage.setItem(muffinKey,window.localStorage.getItem(muffinKey)+n);
    window.localStorage.setItem(muffinKey,muffinCnt);
    document
    .querySelector('#muffincnt')
    .innerText=window.localStorage.getItem(muffinKey); 
}

document
.querySelector('#eatone')
.addEventListener('click', function(event){
    muffinChange(-1)
}
);

document 
.querySelector('#bakefive')
.addEventListener('click', function(event){
    muffinChange(5)
}
);


if(isNaN(window.localStorage.getItem(muffinKey===undefined))){
    window.localStorage.setItem(muffinKey,10)
}
muffinChange(0) 


