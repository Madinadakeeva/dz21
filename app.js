// filter
console.log('Filter')
let cities = ['Алматы', 'Астана', 'Караганда', 'Шымкент', 'Павлодар', 'Семей']
let result = cities.filter((citi) => citi.length > 7)
console.log(result)

// map
console.log('Map')
let number = [1, 4, 9, 16, 25, 36, 49, 64, 81]
let roots = number.map(Math.sqrt)
console.log(roots)

//sort
console.log('Sort')
let sort = (cities) => cities.sort()
console.log(sort(cities))

//reduce
console.log('Reduce')
let initial = 0
let sum = [{x: 1}, {x: 2}, {x: 3}, {x: 4}].reduce(
(num, znach) => num + znach.x, initial,)
console.log(sum)