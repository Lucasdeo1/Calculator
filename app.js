
function somar(){
    var n1 = document.getElementById('v1')
    var n2 = document.getElementById('v2')
    var int1 = Number( n1.value )
    var int2 = Number( n2.value )
    var result = int1 + int2
    var res = document.getElementById('res')
    res.innerHTML = `resultado = ${result}`
}

function sub(){
    var n1 = document.getElementById('v1')
    var n2 = document.getElementById('v2')
    var int1 = Number( n1.value )
    var int2 = Number( n2.value )
    var result = int1 - int2
    var res = document.getElementById('res')
    res.innerHTML = `resultado = ${result}`
}

function divi(){
    var n1 = document.getElementById('v1')
    var n2 = document.getElementById('v2')
    var int1 = Number( n1.value )
    var int2 = Number( n2.value )
    var result = int1 / int2
    var res = document.getElementById('res')
    res.innerHTML = `resultado = ${result}`
}

function multi(){
    var n1 = document.getElementById('v1')
    var n2 = document.getElementById('v2')
    var int1 = Number( n1.value )
    var int2 = Number( n2.value )
    var result = int1 * int2
    var res = document.getElementById('res')
    res.innerHTML = `resultado = ${result}`
}