const day = require('./day.js')

const slowDay = function () {
    console.log(`it's a bad day`)
    i = 0
    const print = function () {
        if (i < day.length) {
            console.log(day[i])
            i++
        } else {
            clearInterval(run)
        }
    }
   let run =  setInterval(print, 3000)
}

slowDay();