const day = require('./day.js')

const badDay = function () {
    console.log(`it's a bad day`)
    i = 0
    const print = function () {
        if (i < day.length) {
            console.clear()
            console.log(day[i])
            i++
        } else {
            clearInterval(run)
        }
    }
   let run =  setInterval(print, 1000)
}

badDay();