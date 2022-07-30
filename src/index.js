module.exports = function reverse(n){
    n = Math.abs(n)
    nStr = String(n)
    nArr = nStr.split('').reverse().join('')
    return nArr
}
   

