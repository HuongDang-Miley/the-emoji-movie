const day = require('./day.js')

const goodDay = function () {
    console.log(`what a good day!`)
    i = day.length - 1
    const print = function () {
        if (i >= 0) {
            console.log(day[i])
            i--
        } else {
            clearInterval(run)
        }
    }
    let run = setInterval(print, 100)
}

goodDay();