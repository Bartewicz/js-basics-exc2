
var milkTemp = 20

for (i = 0; milkTemp <= 100; i++) {

    var deltaTemp = Math.round(Math.random() * 100) / 10

    milkTemp += deltaTemp

    console.log(milkTemp)

}

console.log(Math.round(milkTemp*10)/10)
