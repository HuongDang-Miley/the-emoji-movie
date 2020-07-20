const day = require('./day.js')
// get user input
let userInput = process.argv.slice(2)
// convert userInput to number
let userTime = 1 * userInput[0]

const timeMaster = function () {
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
   let run =  setInterval(print, userTime)
}

timeMaster();