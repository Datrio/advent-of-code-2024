const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

let foundCount = 0

const directions = [
  {x: -1, y: 0},
  {x: +1, y: 0},
  {x: 0, y: -1},
  {x: 0, y: +1},
  {x: -1, y: -1},
  {x: -1, y: +1},
  {x: +1, y: -1},
  {x: +1, y: +1},
]

for (let y = 0; y < lines.length; y++) {
  for (let x = 0; x < lines[0].length; x++) {
    if (restDirection(y, x)) {
      foundCount++
    }
  }
}

function restDirection(y, x) {
  let test1 = `${lines?.[y-1]?.[x-1]}${lines[y][x]}${lines?.[y+1]?.[x+1]}`
  let test2 = `${lines?.[y+1]?.[x-1]}${lines[y][x]}${lines?.[y-1]?.[x+1]}`
  
  if (
    (test1 === 'MAS' || test1 === 'SAM') &&
    (test2 === 'MAS' || test2 === 'SAM')
  ) {
    return true
  }
}

console.log(foundCount)