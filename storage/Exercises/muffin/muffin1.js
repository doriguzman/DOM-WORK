

var header= document.querySelector('h1')
var eat= document.querySelector('#eat');
var bake= document.querySelector('#bake');

eat.addEventListener('click',function(){
    muffinCount+=-1;
if (muffinCount<0){
    header.innerText= "there are no more muffins :( "
}else{
    header.innerText= "Muffin count: " + muffinCount
    
}
window.localStorage.setItem('header', muffinCount)
})

bake.addEventListener('click', function(){
    muffinCount+=5
    header.innerText= "Muffin count: " + muffinCount;
    window.localStorage.setItem('header', muffinCount)
})

var savedMuffins= window.localStorage.getItem('header');

var muffinCount= 10;
if(savedMuffins!==null){
muffinCount= Number(savedMuffins)
}
header.innerText= "Muffin Count: " + muffinCount
