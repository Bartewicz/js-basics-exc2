var randomArray = new Array(6+Math.round(Math.random() * 100) + 1)

var randomEvenArray = randomArray.length % 2 === 1 ? randomArray.pop() : randomArray

console.log(randomEvenArray)

