function solve(...args) {
  let outputValues = {}

  args.forEach(x => {
    let type = typeof(x)
    outputValues[type] = (outputValues[type] || 0) + 1
    console.log(`${type}: ${x}`)
  })
  let sortedValues = Object.entries(outputValues).sort((a, b) => b[1] - a[1])

  for (const el of sortedValues) {
    console.log(`${el[0]} = ${el[1]}`)
  }
}