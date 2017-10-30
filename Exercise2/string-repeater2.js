let first = prompt("insert a string")
let second = prompt("now tell me how many times you want me to repeat it")
let string= ""


for (var i = 0; i< second; i++){
    string+= first + " "
}

alert(string)


// Now, use​ ​window.prompt()​​ ​once​ ​to​ ​query​ ​the​ ​user​ ​for​ ​a​ ​string, and​ ​again​ ​
// to​ ​query​ ​the​ ​user for​ ​a​ ​number, x.Use​ ​​window.alert()​​ ​to​ ​display​ ​the​ ​same​ ​
// string, repeated​ ​x​ ​times.You​ ​may assume​ ​appropriate​ ​input.
// HINT:​ ​You​ ​must​ ​convert, or​ ​typecast, the​ ​user​ ​input​ ​into​ ​a​ ​number.