function binarySearchTwoSum(numbers, sum) {
  let result = []
  numbers.sort((a, b) => a - b)
  for (let i = 0; i < numbers.length; i++) {
    let first = numbers[i]
    let second = sum - first
    let start = i + 1;
    let end = numbers.length - 1
    while (start <= end) {
      let mid = Math.floor((start + end)/2)
      if (numbers[mid] === second) {
        result.push([first, second])
        numbers[numbers.indexOf(first)] = "already got paired"
        numbers[numbers.indexOf(second)] = "already got paired"
      } else if (numbers[mid] < second) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return result
}

function bruteForceTwoSum(numbers, sum) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    let first = numbers[i]
    let second = sum - first
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === second) {
        result.push([first, second])
        numbers[numbers.indexOf(first)] = "already got paired"
        numbers[numbers.indexOf(second)] = "already got paired"
      }
    }
  }
  return result
}

function hashTwoSum(numbers, sum) {
  let result = []
  let hashTable = {}
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      hashTable[numbers[0]] = 1
    } else {
      let second = sum - numbers[i]
      if (hashTable[second] !== undefined) {
        result.push([second, numbers[i]])
        hashTable[second] = undefined
      } else {
        hashTable[numbers[i]] = 1
      }
    }
  }
  return result
}

function binaryMatch(numbers, sum) {
  numbers.sort((a, b) => a - b)
  for (let i = 0; i < numbers.length; i++) {
    let first = numbers[i]
    let second = sum - numbers[i]
    let start = i + 1
    let end = numbers.length - 1
    while (start <= end) {
      let mid = Math.floor((start + end)/2)
      if (numbers[mid] === second) {
        return true
      } else if (numbers[mid] > second) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }
  return false
}
