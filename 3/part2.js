const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim()
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim()

const regex = /mul\((\d+),(\d+)\)/g

const splitDonts = ('do()' + lines).split('don\'t()')
const splitEntry = entry => entry.split('do()').slice(1).join('')
const isNotEmpty = v => v

const calculateMatchValue = entry => +entry[1] * +entry[2]
const calculateLineSum = (line) => {
  return Array.from(line.matchAll(regex))
    .reduce((sum, entry) => sum + calculateMatchValue(entry), 0)
}

const sum = splitDonts
  .map(splitEntry)
  .filter(isNotEmpty)
  .reduce((totalSum, line) => totalSum + calculateLineSum(line), 0)
  
console.log(sum)