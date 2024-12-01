const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

const list = { left: [], right: {} };

lines.forEach(line => {
  const [left, right] = line.split('   ')

  list.left.push(+left)
  list.right[right] = list.right[right] ? list.right[right] + 1 : 1
})

const sum = list.left.reduce((sum, leftItem) => {
  return sum + leftItem * (list.right[leftItem] ?? 0)
}, 0)

console.log(sum)