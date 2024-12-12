const fs = require('fs')
const path = require('path')
//const lines = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n')
const lines = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n')

const searchPhrase = 'XMAS'

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
    for (let i = 0; i < directions.length; i++) {
      if (restDirection(y, x, directions[i])) {
        foundCount++
      }
    }
  }
}

function restDirection(y, x, dir) {
  let newY = y
  let newX = x

  for (let i = 0; i < searchPhrase.length; i++) {
    if (!lines[newY] || !lines[newY][newX] || lines[newY][newX] !== searchPhrase[i]) {
      return false
    }

    newY = newY + dir.y
    newX = newX + dir.x
  }

  return true
}

console.log(foundCount)