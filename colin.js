const day = require('./day.js')

let i = 0

const working = function () {
    console.clear()
    console.log('my day is good')
    console.log(day[i])
    i ++
    if (i >= day.length) {
        clearInterval(run)
    }
}


console.clear()
console.log('my day is good')

const run = setInterval(working, 100)


// const fakeSetTimeout = function (func, time) {
//     // do some node magic to wait 'time' milliseconds
//     func();
// }