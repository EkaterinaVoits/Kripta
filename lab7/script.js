var CryptoJS = require("crypto-js")

const key = 'abcdef'
const message = 'myMessageText'
const enc = CryptoJS.DES.encrypt(message, key).toString()

console.log("Зашифрование:");
console.log(enc);

const dec = CryptoJS.DES.decrypt(enc, key);
const text = dec.toString(CryptoJS.enc.Utf8);

console.log("Расшифрование:");
console.log(text);