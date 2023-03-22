const os = require('os')


//info about the user(which is me)
const user = os.userInfo()
console.log(user)

// Info about the system uptime in seconds
const systemUptime = os.uptime()
console.log(`The system uptime is: ${systemUptime} seconds`)

const current0S = {
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalMem: os.totalmem()
}
console.log(current0S)