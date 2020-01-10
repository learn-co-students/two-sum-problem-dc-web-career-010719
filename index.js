function bruteForceTwoSum(numbers, sum) {
  let results = []
  for (let i = 0; i < numbers.length; i++) {
    let firstNumber = numbers[i]
    let secondNumber = sum - numbers[i]
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === secondNumber) {
        results.push([firstNumber, secondNumber])
        numbers[numbers.indexOf(firstNumber)] = undefined
        numbers[numbers.indexOf(secondNumber)] = undefined
      }
    }
  }
  return results
}

function binarySearchTwoSum(numbers, sum) {
  let results = []
  numbers.sort((a, b) => a - b)
  for (let i = 0; i < numbers.length; i++) {
    let firstNumber = numbers[i]
    let secondNumber = sum - firstNumber
    let start = i + 1
    let end = numbers.length - 1
    while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      if (numbers[mid] === secondNumber) {
        results.push([firstNumber, secondNumber])
        numbers[numbers.indexOf(firstNumber)] = undefined
        numbers[numbers.indexOf(secondNumber)] = undefined
      } else if (numbers[mid] < secondNumber) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return results
}

function binaryMatch() {
  return true
}

function hashTwoSum(numbers, sum) {
  let hashTable = {}
  let results = []
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      hashTable[numbers[i]] = 1
    } else {
      let secondNumber = sum - numbers[i]
      if (hashTable[secondNumber] !== undefined) {
        results.push([secondNumber, numbers[i]])
        hashTable[secondNumber] = undefined
      } else {
        hashTable[numbers[i]] = 1
      }
    }
  }
  return results
}
