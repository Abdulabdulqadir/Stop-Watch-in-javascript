var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var timer;
var stop = "stop"
function start() {
    timer = setInterval(() => {
        miliseconds++
        if (miliseconds > 100) {
            seconds++
            miliseconds = 0
        }
        if (seconds > 60) {
            minutes++
            seconds = 0
        }
        if (minutes > 60) {
            hours++
            minutes = 0
        }
        document.getElementById("watch").innerHTML = `${hours}:${minutes}:${seconds}:${miliseconds}`
    }, 10)
}
function Reset() {
    location.reload()
}
function del() {
    if (stop == "stop") {
        clearInterval(timer)
        stop = "start"
        document.getElementById("icon").className = "fa fa-play"
    }
    else {
        start()
        stop = "stop"
        document.getElementById("icon").className = "fa fa-pause"
    }
}