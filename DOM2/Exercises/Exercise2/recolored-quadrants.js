let initial= prompt('pick from the following:#topLeft, #topRight, #bottomLeft,#bottomRight')
let color = prompt('Pick a color')

var select= document.querySelector(initial)
select.style.backgroundColor= color


// extended version to add more colors and keep them and then ask:

// function colorQuads() {
//     let quadrant = '#' + prompt(`Select quadrant`)
//     let color = prompt("Now Choose any color you'll like")
//     let element = document.querySelector(quadrant)
    
//     if (!element){
//         window.alert("no element found")
//     } else {
//         element.style.backgroundColor = color        
//     }

//     setTimeout(function(){
//         let option = prompt("Would you like to add another color?")
//         if (option.toLowerCase() === "yes") {
//             colorQuads()
//         } 
//     }, 1000)
// }

// colorQuads()