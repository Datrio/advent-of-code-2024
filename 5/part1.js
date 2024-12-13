const fs = require('fs')
const path = require('path')
//const [rules, pages] = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n\n')
const [rules, pages] = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n\n')

const rulesMapped = rules.split('\n').map(rule => rule.split('|').map(Number))
const pagesMapped = pages.split('\n').map(pageList => pageList.split(',').map(Number))

const rulesObject = {}

rulesMapped.forEach(rule => {
  if (!rulesObject[rule[1]]) {
    rulesObject[rule[1]] = {}
  }

  rulesObject[rule[1]][rule[0]] = true
})

let sum = 0

for (let i = 0; i < pagesMapped.length; i++) {
  let correctLine = true
  let prevNumbers = []

  for (let j = 0; j < pagesMapped[i].length; j++) {
    const rulesKey = pagesMapped[i][j]

    if (!prevNumbers.every(prev => rulesObject[rulesKey]?.[prev])) {
      correctLine = false
      break
    }

    prevNumbers.push(rulesKey)
  }

  if (correctLine) {
    sum += pagesMapped[i][ Math.floor(pagesMapped[i].length / 2) ]
  }
}

console.log(sum)