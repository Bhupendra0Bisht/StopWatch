let Timer = document.querySelector("#Timer")
let stopBtn = document.querySelector("#stopBtn")
let startBtn = document.querySelector("#startBtn")
let resetBtn = document.querySelector("#resetBtn")

var sec = 0 ;
var min = 0 ;
var hr = 0 ;
var ms = 0 ;

var timeout;
var timerStart = false;

startBtn.addEventListener("click", function timerCycle() {

    sec = parseInt( sec)
    min = parseInt( min)
    hr = parseInt( hr)
    ms = parseInt( ms)

    timerStart = true

    ms += 1
    if( ms == 100 ){
        sec ++
        ms = 0
    }
    if( sec == 60 ){
        min ++
        sec = 0
        ms = 0
    }
    else if( min == 60 ){
        hr ++
        min = 0
        sec = 0
        ms = 0
    }

    if( sec < 10  ){
        sec = "0" + sec
    }
     if( min < 10 ){
        min = "0" + min
    }
     if( hr < 10 ){
        hr = "0" + hr
    }
    if( ms < 10 ){
        ms = "0" + ms
    }
    
    Timer.textContent = `${hr} : ${min} : ${sec} : ${ms}`

     timeout = setTimeout( timerCycle, 1)
})

let ol = document.querySelector("#ol")

const RecordsNoted = ()=> {
    if( sec > 0 ){
        
        let ul = document.createElement("ul")
        let li = document.createElement("li")
        ul.appendChild(li)
        ol.appendChild(li)

        li.innerHTML = Timer.innerHTML
    }
}

stopBtn.addEventListener("click", function() {
   timerStart = false
   clearTimeout( timeout)
})

resetBtn.addEventListener("click", function() {
    timerStart = false 
    clearTimeout( timeout)
    Timer.innerHTML = `00 : 00 : 00 : 00`
    sec = 0
    min = 0
    hr = 0
    ms = 0
})


document.querySelector("#Laps")
.addEventListener("click", function() {
    RecordsNoted()
})

document.querySelector("#Remove")
.addEventListener("click", function() {
    ol.lastChild.remove()
})