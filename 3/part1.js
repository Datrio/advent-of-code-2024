const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim()
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim()

const regex = /mul\((\d+),(\d+)\)/g

const sum = Array.from(lines.matchAll(regex)).reduce((sum, entry) => {
  return sum + +entry[1] * +entry[2]
}, 0)

console.log(sum)