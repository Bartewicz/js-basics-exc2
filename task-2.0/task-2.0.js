var a = 'Lorem'
var b = '5'
var b2 = 'Ipsum'
var c = true
var c2 = [5, 10, 15]
var d = false
var e = null
var f = 0
var f1 = 1
var f16 = { name: 'Henrik', old: 86, married: false}
var g = b

console.log("'a' lenght > 'b' lenght", a.lenght > b.lenght)
console.log("'a' lenght > 'b2' lenght", a.lenght > b2.lenght)
console.log('b == c2[0]', b == c2[0])
console.log('b === c2[0]', b === c2[0])
console.log('c2 == 15 * f1', c2 == 15 * f1)
console.log('c2[2] == 15 * f1', c2[2] == 15 * f1)
console.log('e == f', e == f)
console.log('d == f16[2]', d == f16[2])
console.log("f16['old'] > c2[2]", f16['old'] > c2[2])