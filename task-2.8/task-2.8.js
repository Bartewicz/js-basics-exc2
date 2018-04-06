var queue = [1, 2, 3]
console.log(queue)

queue.pop()
queue.push(5, 5.5)
queue.shift()
queue.unshift(1, 1.1)

console.log(queue)

queue.unshift(0)
queue.push(6)
console.log(queue)
queue.shift()
queue.pop()
console.log(queue)