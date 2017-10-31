// Example:​ ​Every​ ​Other​ ​Thing​ ​is​ ​Purple Build​ ​a​ ​page​ ​with​ ​an​ ​
// unordered​ ​list​ ​of​ ​types​ ​of​ ​candy​ ​bars.​ ​In​ ​a​ ​separate​ ​JavaScript​ ​
// file,​ ​use document.querySelectorAll()​,​ ​a​ ​for​ ​loop,​ ​and​ ​the​ ​HTMLElement.style​​ ​
// property​ ​to give​ ​purple​ ​text​ ​to​ ​every​ ​other​ ​list​ ​item.


var listArray= document.querySelectorAll('li')
// [listed1,listed2,listed3]

for (var i = 0; i<listArray.length; i+=2){
    listArray[i].style.backgroundColor= "purple"
}


// listArray.forEach(function(element,index){
//     if (index % 2 ===0){
//         elem.style.backgroundColor = "purple"
//     }
// })