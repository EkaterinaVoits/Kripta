var CryptoJS = require("crypto-js")

const message = 'myMessageText'

//поддерживаются другие алгоритмы хеширования, такие как SHA-1, SHA-512, MD5 
const enc = CryptoJS.SHA256(message).toString()

console.log("Зашифрование на SHA-256:");
console.log(enc);
