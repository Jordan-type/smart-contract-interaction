const { getWalletBalance } = require('./index.js')


const userBalance = async () => {
const balance = await getWalletBalance('0x079858FcD81Ac2901684Da361693ec10e3C8a770')

console.log(balance)

}

userBalance()