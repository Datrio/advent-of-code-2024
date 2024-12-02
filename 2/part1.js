const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

const validDecrease = diff => diff >= 1 && diff <= 3
const validIncrease = diff => diff <= -1 && diff >= -3

const sum = lines.reduce((sum, line) => {
  const data = line.split(' ').map(Number)
  const differences = data.slice(1).map((current, i) => data[i] - current)

  if (differences.every(validDecrease) || differences.every(validIncrease)) {
    return sum + 1
  }

  return sum
}, 0)

console.log(sum)