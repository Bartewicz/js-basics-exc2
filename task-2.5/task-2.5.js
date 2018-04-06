var numbers = [1, 2, 3, 4, 5]

console.time('in loop')
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
console.timeEnd('in loop')

console.time('before loop')
var length = numbers.length
for (var i = 0; i < length; i++) {
    console.log(numbers[i])
}
console.timeEnd('before loop')

var a = 0

for (i = 1; i <= 10; i++) {
    var randomNumber = Math.random()
    var check = randomNumber < 0.5 ? true : false

    if (check == true) {
        a++
    }

    console.log(i, randomNumber, check)
}

console.log('You have ' + a + ' numbers lower or equal 0.5')
