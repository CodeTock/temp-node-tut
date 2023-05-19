
const os=require("os");


const user=os.userInfo()
console.log(user)

const currentOs={
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalmem: os.totalmem()
}
console.log(currentOs);