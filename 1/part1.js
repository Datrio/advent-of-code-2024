const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

const list = { left: [], right: [] };

lines.forEach(line => {
  const [left, right] = line.split('   ')

  list.left.push(+left)
  list.right.push(+right)
})

list.left.sort()
list.right.sort()

const sum = list.left.reduce((sum, _, index) => {
  return sum + Math.abs(list.left[index] - list.right[index])
}, 0)

console.log(sum)