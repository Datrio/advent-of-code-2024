const fs = require('fs')
const path = require('path')
//const [rules, pages] = fs.readFileSync(path.join(__dirname, 'example.txt'), { encoding: 'utf8' }).trim().split('\n\n')
const [rules, pages] = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf8' }).trim().split('\n\n')

const pagesMapped = pages.split('\n').map(pageList => pageList.split(',').map(Number))

const rulesObject = rules.split('\n').reduce((acc, rule) => {
  const [a, b] = rule.split('|').map(Number)
  acc[b] = acc[b] || {}
  acc[b][a] = true
  return acc
}, {})

let wrongIndexes = new Set()

for (let i = 0; i < pagesMapped.length; i++) {
  let correctLine = true
  let prevNumbers = []
  
  for (let j = 0; j < pagesMapped[i].length; j++) {
    const rulesKey = pagesMapped[i][j]

    if (!prevNumbers.every(prev => rulesObject[rulesKey]?.[prev])) {
      correctLine = false
      wrongIndexes.add(i)

      // Swap elements
      const item = pagesMapped[i].splice(j, 1)[0]
      pagesMapped[i].splice(j - 1, 0, item)

      // Restart checks
      j -= 1
    }
    
    if (!correctLine) {
      break
    }

    prevNumbers.push(rulesKey)
  }

  // restart line
  if (!correctLine) i -= 1
}

const sum = Array.from(wrongIndexes).reduce((sum, i) => {
  return sum + pagesMapped[i][ Math.floor(pagesMapped[i].length / 2) ]
}, 0)

console.log(sum)